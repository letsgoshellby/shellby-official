"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Code, 
  Palette, 
  BarChart3, 
  Briefcase,
  Book,
  Heart,
  Coffee,
  Music,
  Gamepad2,
  BookOpen,
  Camera,
  Mail,
  Github,
  Linkedin,
  Instagram,
  ChevronDown,
  ChevronUp,
  Loader2
} from "lucide-react"
import { getTeamMembers } from "@/app/api"

export default function TeamMembersSection() {
  const [teamMembers, setTeamMembers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [expandedMember, setExpandedMember] = useState(null)

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const data = await getTeamMembers()
        setTeamMembers(data)
      } catch (error) {
        console.error('Failed to fetch team members:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchTeamMembers()
  }, [])

  const iconMap = {
    Briefcase,
    Code,
    Palette,
    BarChart3,
    Book,
    BookOpen,
    Users,
    Camera
  }


  const handleMemberExpand = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId)
  }

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-orange-500" />
            <p className="mt-4 text-gray-600">팀원 정보를 불러오는 중...</p>
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-orange-200 text-orange-700">
            <Users className="w-3 h-3 mr-1" />
            우리 팀원들
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            이런 사람들이 만들고 있어요
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            각자 다른 전공과 성격을 가지고 있지만,
            <br className="hidden sm:block" />
            셸비를 더 좋게 만들고 싶다는 마음은 하나예요
          </p>
        </div>

        {/* 팀원 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => {
            const IconComponent = iconMap[member.icon_name] || Briefcase
            const isExpanded = expandedMember === member.id
            
            return (
              <Card key={member.id} className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* 프로필 헤더 */}
                  <div className={`relative h-48 bg-gradient-to-r ${member.main_color} flex items-center justify-center overflow-hidden`}>
                    {/* 프로필 사진 */}
                    <div className="relative w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                      {member.avatar_url ? (
                        <Image 
                          src={member.avatar_url} 
                          alt={`${member.name} 프로필`}
                          width={96}
                          height={96}
                          className="object-cover"
                          onError={(e) => {
                            // 이미지 로드 실패 시 이미지 숨기고 아이콘 표시
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                      ) : null}
                      <div style={{ display: member.avatar_url ? 'none' : 'flex' }}>
                        <IconComponent />
                      </div>
                    </div>
                    
                    {/* MBTI 배지 */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        {member.mbti}
                      </Badge>
                    </div>
                  </div>

                  {/* 기본 정보 */}
                  <div className="pt-6 pb-6 px-6 space-y-4">
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-sm font-medium text-gray-600">{member.role}</p>
                      <p className="text-xs text-gray-500">{member.major}</p>
                      <p className="text-xs text-gray-500">{member.university}</p>
                    </div>

                    {/* 한 줄 소개 */}
                    <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-orange-200">
                      <p className="text-sm text-gray-700 italic">
                        "셸비에 참여한 이유"
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {member.one_linear}
                      </p>
                    </div>

                    {/* 성격 태그들 */}
                    <div className="flex flex-wrap gap-2">
                      {member.personality.map((trait, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {trait}
                        </Badge>
                      ))}
                    </div>

                    {/* 더보기 버튼 */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleMemberExpand(member.id)}
                      className="w-full text-gray-600 hover:text-orange-600"
                    >
                      {isExpanded ? (
                        <>
                          간단히 보기 <ChevronUp className="w-4 h-4 ml-1" />
                        </>
                      ) : (
                        <>
                          더 자세히 보기 <ChevronDown className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </Button>

                    {/* 확장된 정보 */}
                    {isExpanded && (
                      <div className="space-y-4 pt-4 border-t border-gray-100 animate-in slide-in-from-top-2">
                        {/* 취미 */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                            <Heart className="w-4 h-4 mr-1 text-pink-500" />
                            취미
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {member.hobbies.map((hobby, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {hobby}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* TMI */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs text-gray-600">
                            <span>💛 좋아하는 음식: {member.fav_food}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-gray-600">
                            <span>🎬 좋아하는 영화: {member.fav_movie}</span>
                          </div>
                        </div>

                        {/* 명언 */}
                        <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-3">
                          <p className="text-xs text-gray-700 italic">
                            💭 "{member.quote}"
                          </p>
                        </div>

                        {/* TMI */}
                        <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                          <p className="text-xs text-yellow-800">
                            <span className="font-semibold">TMI:</span> {member.tmi}
                          </p>
                        </div>

                        {/* 전문 분야 */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-800 mb-2">전문 분야</h4>
                          <div className="flex flex-wrap gap-1">
                            {member.skills.map((skill, index) => (
                              <Badge key={index} variant="outline" className={`text-xs bg-gradient-to-r ${member.main_color} text-white border-0`}>
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* 연락처 */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-800 mb-2">연락하기</h4>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="text-xs">
                              <Mail className="w-3 h-3 mr-1" />
                              이메일
                            </Button>
                            {member.contact.github_username && (
                              <Button size="sm" variant="outline" className="text-xs">
                                <Github className="w-3 h-3 mr-1" />
                                GitHub
                              </Button>
                            )}
                            {member.contact.linkedin && (
                              <Button size="sm" variant="outline" className="text-xs">
                                <Linkedin className="w-3 h-3 mr-1" />
                                LinkedIn
                              </Button>
                            )}
                            {member.contact.instagram && (
                              <Button size="sm" variant="outline" className="text-xs">
                                <Instagram className="w-3 h-3 mr-1" />
                                Instagram
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 팀 문화 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">솔직한 소통</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                불편한 이야기도 서로 솔직하게 나눠요. 
                그래야 더 좋은 팀이 될 수 있다고 믿어요.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">일과 휴식의 균형</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                열심히 일하는 만큼 제대로 쉬기도 해요. 
                번아웃 없이 지속가능하게!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-50 to-orange-50 border-pink-200">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">실험 정신</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                새로운 시도를 두려워하지 않아요. 
                실패해도 배우는 게 있다면 OK!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 함께하기 */}
        <Card className="bg-gradient-to-r from-orange-500 to-pink-500 border-0 shadow-2xl">
          <CardContent className="p-8 lg:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold">
                우리와 함께하고 싶다면?
              </h3>
              
              <p className="text-lg opacity-90 leading-relaxed">
                셸비 팀에 관심이 있으시거나, 함께 의미있는 일을 하고 싶으시다면
                <br className="hidden sm:block" />
                언제든 연락해 주세요! 🤗
              </p>
              
              <div className="pt-4 space-y-2">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900">
                  <Mail className="w-4 h-4 mr-2" />
                  team@shellby.co.kr
                </Button>
                <p className="text-sm opacity-80">
                  인턴, 파트타임, 프로젝트 협업 등 다양한 형태로 함께할 수 있어요!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}