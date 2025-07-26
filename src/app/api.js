// lib/api.js - 데이터 fetch 함수들
import { supabase } from './supabase'

// 1. 최근 소식 가져오기
export async function getLatestNews(limit = 3) {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching news:', error)
    return []
  }
  return data
}

// 2. 앱 다운로드 링크 가져오기
export async function getAppInfo() {
  const { data, error } = await supabase
    .from('app_info')
    .select('*')
    .eq('is_active', true)
    .single()

  if (error) {
    console.error('Error fetching app info:', error)
    return null
  }
  return data
}

// 3. 협력 파트너 가져오기
export async function getPartners() {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  if (error) {
    console.error('Error fetching partners:', error)
    return []
  }
  return data
}

// 4. FAQ 가져오기
export async function getFAQ() {
  const { data, error } = await supabase
    .from('faq')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  if (error) {
    console.error('Error fetching FAQ:', error)
    return []
  }
  return data
}

// 5. 고객 후기 가져오기
export async function getReviews(featured = false) {
  let query = supabase
    .from('reviews')
    .select('*')
    .eq('is_approved', true)

  if (featured) {
    query = query.eq('is_featured', true)
  }

  const { data, error } = await query.order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching reviews:', error)
    return []
  }
  return data
}

// 6. 사이트 설정 가져오기
export async function getSiteSettings() {
  const { data, error } = await supabase
    .from('site_settings')
    .select('*')

  if (error) {
    console.error('Error fetching site settings:', error)
    return {}
  }
  
  // 키-값 객체로 변환
  const settings = {}
  data.forEach(item => {
    settings[item.setting_key] = item.setting_value
  })
  return settings
}

// 7. 문의 등록하기
export async function submitInquiry(inquiryData) {
  const { data, error } = await supabase
    .from('inquiries')
    .insert([inquiryData])
    .select()

  if (error) {
    console.error('Error submitting inquiry:', error)
    return { success: false, error }
  }
  return { success: true, data }
}