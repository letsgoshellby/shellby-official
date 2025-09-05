"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BookOpen,
  Brain,
  Heart,
  Users,
  GraduationCap,
  Puzzle,
  MessageCircle,
  Target,
  CheckCircle,
  Clock,
  User,
  ArrowRight,
  Lightbulb,
  Smile,
  Home,
  Star
} from "lucide-react"

export default function ConsultationFieldsSection() {
  const [activeField, setActiveField] = useState("learning")

  const consultationFields = [
    {
      id: "learning",
      icon: BookOpen,
      title: "학습 지원",
      subtitle: "배움의 즐거움 찾기",
      description: "개별 학습 속도에 맞춘 맞춤형 학습 방법과 전략을 제공합니다",
      color: "from-blue-400 to-blue-500",
      bgColor: "from-blue-50 to-indigo-50",
      services: [
        {
          icon: Target,
          name: "개별 학습 계획",
          description: "아이의 학습 특성을 파악하여 맞춤형 학습 로드맵을 제공해요"
        },
        {
          icon: Puzzle,
          name: "학습 방법 개선",
          description: "효과적인 학습 전략과 기법을 알려드려요"
        },
        {
          icon: Clock,
          name: "학습 루틴 관리",
          description: "지속 가능한 학습 습관 형성을 도와드려요"
        },
        {
          icon: Star,
          name: "동기 부여",
          description: "학습에 대한 흥미와 자신감을 키워드려요"
        }
      ],
      targetAudience: ["학습 속도가 느린 아이들", "학습 방법을 찾는 학부모", "기초 학력이 부족한 학생들"],
      expectedResults: ["개별 맞춤 학습법 습득", "학습 자신감 향상", "꾸준한 학습 습관 형성"]
    },
    {
      id: "behavior",
      icon: Brain,
      title: "행동 개선",
      subtitle: "긍정적인 변화 만들기",
      description: "일상생활에서의 어려운 행동들을 이해하고 개선할 수 있도록 도와드립니다",
      color: "from-purple-400 to-purple-500",
      bgColor: "from-purple-50 to-emerald-50",
      services: [
        {
          icon: Brain,
          name: "행동 분석",
          description: "문제 행동의 원인을 파악하고 이해해요"
        },
        {
          icon: Target,
          name: "행동 수정 전략",
          description: "긍정적인 행동으로 바뀔 수 있는 구체적인 방법을 제시해요"
        },
        {
          icon: CheckCircle,
          name: "일상 루틴 개발",
          description: "안정적인 일상 패턴 만들기를 도와드려요"
        },
        {
          icon: Heart,
          name: "정서적 지원",
          description: "행동 변화 과정에서 필요한 심리적 지지를 제공해요"
        }
      ],
      targetAudience: ["주의집중이 어려운 아이들", "충동적인 행동을 보이는 아이들", "규칙적인 생활이 어려운 가정"],
      expectedResults: ["문제 행동 감소", "자기 조절 능력 향상", "안정적인 일상 루틴 확립"]
    },
    {
      id: "emotional",
      icon: Heart,
      title: "정서 상담",
      subtitle: "마음 건강 돌보기",
      description: "아이와 가족의 정서적 어려움을 함께 나누고 해결책을 찾아갑니다",
      color: "from-emerald-400 to-emerald-500",
      bgColor: "from-emerald-50 to-teal-50",
      services: [
        {
          icon: Heart,
          name: "정서 표현 훈련",
          description: "감정을 건강하게 표현하는 방법을 배워요"
        },
        {
          icon: Smile,
          name: "자존감 향상",
          description: "아이의 장점을 발견하고 자신감을 키워요"
        },
        {
          icon: Users,
          name: "사회성 발달",
          description: "친구 관계와 사회적 상호작용 능력을 기르세요"
        },
        {
          icon: MessageCircle,
          name: "스트레스 관리",
          description: "어려운 상황에 대처하는 건강한 방법을 알려드려요"
        }
      ],
      targetAudience: ["불안이나 우울감을 보이는 아이들", "자존감이 낮은 아이들", "사회적 관계에 어려움이 있는 아이들"],
      expectedResults: ["정서적 안정감 확보", "자존감과 자신감 향상", "건강한 사회적 관계 형성"]
    },
    {
      id: "family",
      icon: Users,
      title: "가족 상담",
      subtitle: "함께 성장하기",
      description: "가족 전체가 함께 성장할 수 있는 소통 방법과 양육 전략을 제공합니다",
      color: "from-green-400 to-green-500",
      bgColor: "from-green-50 to-emerald-50",
      services: [
        {
          icon: Home,
          name: "가족 소통 개선",
          description: "건강한 가족 대화법과 소통 기술을 배워요"
        },
        {
          icon: Heart,
          name: "양육 스트레스 관리",
          description: "부모의 심리적 부담을 덜어드려요"
        },
        {
          icon: Users,
          name: "형제자매 관계",
          description: "가족 구성원 간의 조화로운 관계를 만들어가요"
        },
        {
          icon: Lightbulb,
          name: "양육 전략 수립",
          description: "우리 가족에게 맞는 양육 방침을 함께 만들어요"
        }
      ],
      targetAudience: ["양육에 어려움을 겪는 부모", "가족 갈등이 있는 가정", "형제자매 간 문제가 있는 가족"],
      expectedResults: ["가족 간 소통 개선", "양육 스트레스 감소", "조화로운 가족 관계 형성"]
    },
    {
      id: "career",
      icon: GraduationCap,
      title: "진로 지도",
      subtitle: "미래 설계하기",
      description: "아이의 특성과 흥미를 바탕으로 적합한 진로를 함께 탐색해봅니다",
      color: "from-teal-400 to-teal-500",
      bgColor: "from-teal-50 to-yellow-50",
      services: [
        {
          icon: Target,
          name: "적성 탐색",
          description: "아이의 강점과 관심사를 발견해요"
        },
        {
          icon: GraduationCap,
          name: "진로 계획",
          description: "구체적이고 실현 가능한 진로 로드맵을 세워요"
        },
        {
          icon: Lightbulb,
          name: "진로 체험",
          description: "다양한 직업 세계를 간접 체험할 수 있도록 도와드려요"
        },
        {
          icon: Star,
          name: "목표 설정",
          description: "단계별 목표를 세워 차근차근 준비해나가요"
        }
      ],
      targetAudience: ["진로에 고민이 많은 청소년", "자녀 진로가 걱정인 부모", "특수교육 대상 학생들"],
      expectedResults: ["진로 방향성 확립", "구체적인 진로 계획 수립", "진로에 대한 자신감 향상"]
    }
  ]

  const currentField = consultationFields.find(field => field.id === activeField)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-teal-200 text-teal-700">
            <Target className="w-3 h-3 mr-1" />
            상담 분야
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            어떤 도움이 필요하신가요?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            느린학습자와 가족의 다양한 어려움에 대해
            <br className="hidden sm:block" />
            전문적이고 따뜻한 상담을 제공합니다
          </p>
        </div>

        {/* 상담 분야 탭 */}
        <Tabs value={activeField} onValueChange={setActiveField} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-12 h-auto p-1 bg-white shadow-lg rounded-2xl">
            {consultationFields.map((field) => {
              const IconComponent = field.icon
              return (
                <TabsTrigger 
                  key={field.id} 
                  value={field.id}
                  className="flex flex-col items-center space-y-2 p-4 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:text-white transition-all duration-200"
                  style={activeField === field.id ? {
                    background: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`,
                    backgroundImage: `linear-gradient(to right, rgb(59 130 246), rgb(147 51 234))`
                  } : {}}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="text-sm font-medium">{field.title}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {/* 선택된 분야 상세 내용 */}
          {consultationFields.map((field) => {
            const IconComponent = field.icon
            
            return (
              <TabsContent key={field.id} value={field.id} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* 왼쪽: 분야 소개 */}
                  <div className="lg:col-span-1">
                    <Card className={`bg-gradient-to-br ${field.bgColor} border-0 shadow-lg h-full`}>
                      <CardContent className="p-8 space-y-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${field.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{field.title}</h3>
                          <p className="text-lg font-medium text-gray-600 mb-4">{field.subtitle}</p>
                          <p className="text-gray-700 leading-relaxed">{field.description}</p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">이런 분들께 추천해요</h4>
                            <ul className="space-y-1">
                              {field.targetAudience.map((audience, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  <span className="text-sm text-gray-600">{audience}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">기대할 수 있는 변화</h4>
                            <ul className="space-y-1">
                              {field.expectedResults.map((result, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                  <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 fill-current" />
                                  <span className="text-sm text-gray-600">{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* 오른쪽: 서비스 목록 */}
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {field.services.map((service, index) => {
                        const ServiceIcon = service.icon
                        
                        return (
                          <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 group">
                            <CardContent className="p-6 space-y-4">
                              <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 bg-gradient-to-r ${field.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                  <ServiceIcon className="w-5 h-5 text-white" />
                                </div>
                                <h4 className="font-semibold text-gray-900">{service.name}</h4>
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {service.description}
                              </p>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>

                    {/* 상담 신청 CTA */}
                    <Card className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 border-0 shadow-xl">
                      <CardContent className="p-6 text-white text-center">
                        <div className="space-y-4">
                          <h4 className="text-lg font-bold">
                            {field.title} 상담 받아보기
                          </h4>
                          <p className="text-sm opacity-90">
                            전문가와의 1:1 맞춤 상담으로 구체적인 해결책을 찾아보세요
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button className="bg-white hover:bg-gray-100 text-gray-900">
                              <MessageCircle className="w-4 h-4 mr-2" />
                              상담 신청하기
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                            <Button variant="ghost" className="text-white border-white/30 hover:bg-white/20">
                              <User className="w-4 h-4 mr-2" />
                              전문가 보기
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            )
          })}
        </Tabs>

        {/* 추가 안내 */}
        <div className="mt-20 text-center">
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-white fill-current" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  어떤 상담이 필요할지 모르겠다면?
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  괜찮아요! 셸비의 전문가들이 먼저 상담을 통해
                  <br className="hidden sm:block" />
                  가장 적합한 상담 분야를 찾아드릴게요.
                </p>
                
                <div className="pt-4">
                  <Button size="lg" className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white shadow-lg">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    종합 상담 신청하기
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500">
                  첫 15분 상담으로 어떤 도움이 필요한지 함께 파악해봐요
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}