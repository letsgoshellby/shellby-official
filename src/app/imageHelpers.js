import { supabase } from './supabase'

// 팀원 프로필 이미지 URL 생성
export function getTeamMemberAvatarUrl(avatarPath) {
  if (!avatarPath) return null
  
  const { data } = supabase.storage
    .from('shellby-team-avatars')
    .getPublicUrl(avatarPath)
  
  return data.publicUrl
}

// 이미지 업로드 함수 (관리자용)
export async function uploadTeamMemberAvatar(file, memberId) {
  try {
    // 파일 확장자 추출
    const fileExt = file.name.split('.').pop()
    const fileName = `avatars/${memberId}-${Date.now()}.${fileExt}`
    
    // 파일 업로드
    const { data, error } = await supabase.storage
      .from('team-avatars')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })
    
    if (error) throw error
    
    // 팀원 테이블의 avatar_path 업데이트
    const { error: updateError } = await supabase
      .from('steam_members')
      .update({ avatar_path: fileName })
      .eq('id', memberId)
    
    if (updateError) throw updateError
    
    return { success: true, path: fileName }
  } catch (error) {
    console.error('Upload error:', error)
    return { success: false, error: error.message }
  }
}

// 이미지 삭제 함수 (관리자용)
export async function deleteTeamMemberAvatar(avatarPath) {
  try {
    const { error } = await supabase.storage
      .from('shellby-team-avatars')
      .remove([avatarPath])
    
    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Delete error:', error)
    return { success: false, error: error.message }
  }
}