"use client"

import { useState } from "react"
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
  Heart,
  Coffee,
  Music,
  Gamepad2,
  Book,
  Camera,
  Mail,
  Github,
  Linkedin,
  Instagram,
  ChevronDown,
  ChevronUp
} from "lucide-react"

export default function TeamMembersSection() {
  const [expandedMember, setExpandedMember] = useState(null)

  const teamMembers = [
    {
      id: 1,
      name: "전민경",
      role: "CEO 및 기획",
      major: "",
      university: "연세대학교 교육대학원",
      mbti: "OOOO",
      avatar: null, // 실제 사진 URL로 교체
      mainColor: "from-blue-400 to-blue-500",
      icon: Briefcase,
      oneLinear: "누구나 쉽게 쓸 수 있는 서비스를 만들고 싶어서",
      personality: ["열정적", "아이디어 뱅크", "사용자 중심"],
      hobbies: ["카페 탐방", "넷플릭스", "산책"],
      favFood: "마라탕 🌶️",
      favMovie: "인터스텔라",
      quote: "완벽하지 않아도 시작하면 길이 보여요!",
      tmi: "아이디어가 떠오르면 새벽 3시에도 메시지를 보내는 타입이에요 😅",
      skills: ["사용자 리서치", "비즈니스 기획", "프레젠테이션"],
      contact: {
        email: "doyeon@shellby.co.kr",
        github: null,
        linkedin: "kim-doyeon",
        instagram: "@doyeon_ideas"
      }
    },
    {
      id: 2,
      name: "이아영",
      role: "마케팅",
      major: "",
      university: "이화여자대학교 특수교육과",
      mbti: "OOOO",
      avatar: null,
      mainColor: "from-green-400 to-green-500",
      icon: Code,
      oneLinear: "코드로 사람들의 삶을 더 편하게 만들고 싶어서",
      personality: ["논리적", "완벽주의", "문제 해결사"],
      hobbies: ["코딩", "게임", "유튜브"],
      favFood: "치킨 🍗",
      favMovie: "매트릭스",
      quote: "버그는 항상 예상치 못한 곳에서 나타나죠",
      tmi: "커밋 메시지를 쓸 때 가장 오래 고민해요 🤔",
      skills: ["React/Next.js", "Node.js", "데이터베이스 설계"],
      contact: {
        email: "junho@shellby.co.kr",
        github: "junho-dev",
        linkedin: "lee-junho-dev",
        instagram: null
      }
    },
    {
      id: 3,
      name: "정현주",
      role: "CTO 및 PM",
      major: "",
      university: "국민대학교 소프트웨어학부",
      mbti: "OOOO",
      avatar: null,
      mainColor: "from-pink-400 to-pink-500",
      icon: Palette,
      oneLinear: "예쁜 디자인으로 사용자들을 행복하게 만들고 싶어서",
      personality: ["감성적", "디테일 지향", "사용자 공감"],
      hobbies: ["드로잉", "전시 관람", "인스타그램"],
      favFood: "딸기케이크 🍰",
      favMovie: "토이 스토리",
      quote: "좋은 디자인은 보이지 않는 곳에서 완성돼요",
      tmi: "픽셀 1px 차이도 신경 쓰는 완벽주의자예요 ✨",
      skills: ["UI/UX 디자인", "Figma", "일러스트레이션"],
      contact: {
        email: "seohyun@shellby.co.kr",
        github: null,
        linkedin: null,
        instagram: "@seohyun_design"
      }
    },
    {
      id: 4,
      name: "조원재",
      role: "백엔드 및 서버 개발",
      major: "",
      university: "국민대학교 소프트웨어학부",
      mbti: "OOOO",
      avatar: null,
      mainColor: "from-purple-400 to-purple-500",
      icon: BarChart3,
      oneLinear: "더 많은 분들께 셸비를 알리고 싶어서",
      personality: ["소통형", "트렌드 센스", "분석적"],
      hobbies: ["SNS", "카페", "영화"],
      favFood: "파스타 🍝",
      favMovie: "어벤져스",
      quote: "데이터는 거짓말하지 않아요!",
      tmi: "하루에 인스타 스토리를 10개는 올리는 것 같아요 📸",
      skills: ["소셜미디어 마케팅", "콘텐츠 기획", "데이터 분석"],
      contact: {
        email: "minsu@shellby.co.kr",
        github: null,
        linkedin: "choi-minsu-marketing",
        instagram: "@minsu_marketing"
      }
    },
    {
      id: 5,
      name: "전성호",
      role: "프론트엔드 개발",
      major: "",
      university: "한국뉴욕주립대학교 컴퓨터과학과",
      mbti: "OOOO",
      avatar: null,
      mainColor: "from-orange-400 to-orange-500",
      icon: Book,
      oneLinear: "따뜻한 콘텐츠로 마음을 전하고 싶어서",
      personality: ["공감 능력", "글쓰기 좋아함", "세심함"],
      hobbies: ["독서", "글쓰기", "음악 감상"],
      favFood: "떡볶이 🍢",
      favMovie: "라라랜드",
      quote: "좋은 글은 마음을 움직이는 힘이 있어요",
      tmi: "밤에 감성에 젖어서 시를 쓸 때가 있어요 🌙",
      skills: ["콘텐츠 라이팅", "사용자 인터뷰", "심리 상담"],
      contact: {
        email: "hayoung@shellby.co.kr",
        github: null,
        linkedin: null,
        instagram: "@hayoung_writes"
      }
    }
  ]

  const handleMemberExpand = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId)
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
            const IconComponent = member.icon
            const isExpanded = expandedMember === member.id
            
            return (
              <Card key={member.id} className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* 프로필 헤더 */}
                  <div className={`relative h-32 bg-gradient-to-r ${member.mainColor} flex items-end justify-center pb-4`}>
                    {/* 프로필 사진 */}
                    <div className="absolute -bottom-8 w-16 h-16 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      {member.avatar ? (
                        <Image
                          src={member.avatar}
                          alt={`${member.name} 프로필`}
                          width={60}
                          height={60}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <IconComponent className="w-8 h-8 text-gray-600" />
                      )}
                    </div>
                    
                    {/* MBTI 배지 */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        {member.mbti}
                      </Badge>
                    </div>
                  </div>

                  {/* 기본 정보 */}
                  <div className="pt-12 pb-6 px-6 space-y-4">
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-sm font-medium text-gray-600">{member.role}</p>
                      <p className="text-xs text-gray-500">{member.university}</p>
                    </div>

                    {/* 한 줄 소개 */}
                    <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-orange-200">
                      <p className="text-sm text-gray-700 italic">
                        "셸비에 참여한 이유"
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {member.oneLinear}
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
                            <span>💛 좋아하는 음식: {member.favFood}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-gray-600">
                            <span>🎬 좋아하는 영화: {member.favMovie}</span>
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
                              <Badge key={index} variant="outline" className={`text-xs bg-gradient-to-r ${member.mainColor} text-white border-0`}>
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
                            {member.contact.github && (
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