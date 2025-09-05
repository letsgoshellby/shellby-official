"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Smartphone,
  Video,
  MessageCircle,
  Phone,
  Clock,
  MapPin,
  Heart,
  Shield,
  Users,
  Zap,
  CheckCircle,
  Play,
  Star
} from "lucide-react"
import { getAppInfo } from "@/app/api"

export default function SolutionHeroSection() {
  const [appInfo, setAppInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchAppInfo() {
      try {
        const data = await getAppInfo()
        setAppInfo(data)
      } catch (error) {
        console.error('Failed to fetch app info:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchAppInfo()
  }, [])

  const handleDownloadClick = (url, platform) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      alert(`${platform} 앱이 곧 출시될 예정입니다!`)
    }
  }

  const keyFeatures = [
    {
      icon: Video,
      title: "화상 상담",
      description: "얼굴을 보며 진행하는 따뜻한 상담"
    },
    {
      icon: Phone,
      title: "음성 상담",
      description: "부담 없이 편안하게 대화해요"
    },
    {
      icon: MessageCircle,
      title: "채팅 상담",
      description: "글로 차근차근 소통할 수 있어요"
    }
  ]

  const advantages = [
    {
      icon: MapPin,
      title: "이동 부담 Zero",
      description: "집에서, 카페에서, 어디서든"
    },
    {
      icon: Clock,
      title: "시간 자유롭게",
      description: "내가 원하는 시간에 맞춰서"
    },
    {
      icon: Shield,
      title: "안전한 환경",
      description: "익숙한 공간에서 편안하게"
    },
    {
      icon: Users,
      title: "맞춤형 매칭",
      description: "나에게 딱 맞는 전문가와"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-200/20 to-blue-200/20 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 콘텐츠 */}
          <div className="space-y-8">
            {/* 배지들 */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                <Smartphone className="w-3 h-3 mr-1" />
                모바일 앱 서비스
              </Badge>
              <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                <Video className="w-3 h-3 mr-1" />
                비대면 상담
              </Badge>
              <Badge variant="outline" className="bg-indigo-100 text-indigo-800 border-indigo-200">
                <Heart className="w-3 h-3 mr-1 fill-current" />
                1:1 맞춤 케어
              </Badge>
            </div>

            {/* 메인 헤드라인 */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                더 이상{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  혼자 고민
                </span>하지{" "}
                <br className="hidden lg:block" />
                마세요
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                느린학습자와 가족을 위한 전문 상담이
                <br className="hidden lg:block" />
                이제 스마트폰으로 간편하게
              </p>
            </div>

            {/* 핵심 기능들 */}
            <div className="grid grid-cols-3 gap-4">
              {keyFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* 앱 다운로드 섹션 */}
            <div className="space-y-4">
              <p className="text-gray-700 font-medium">지금 바로 셸비 앱을 다운로드하세요</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-black hover:bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => handleDownloadClick(appInfo?.app_store_url, 'App Store')}
                  disabled={isLoading}
                >
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </div>
                </Button>

                <Button
                  size="lg"
                  className="h-14 px-8 bg-black hover:bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => handleDownloadClick(appInfo?.play_store_url, 'Google Play')}
                  disabled={isLoading}
                >
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </div>
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>✨ 첫 상담 무료 체험</span>
                <span>•</span>
                <span>🔒 개인정보 완벽 보호</span>
              </div>
            </div>
          </div>

          {/* 비주얼 영역 - 앱 인터페이스 목업 */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              {/* 메인 스마트폰 모형 */}
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl h-[500px] flex flex-col justify-between p-6 text-white relative overflow-hidden">
                  {/* 상단 - 앱 헤더 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Heart className="w-4 h-4 fill-current" />
                      </div>
                      <span className="font-semibold">셸비</span>
                    </div>
                    <Badge className="bg-white/20 border-white/30">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                      온라인
                    </Badge>
                  </div>

                  {/* 중간 - 상담 카드들 */}
                  <div className="space-y-3">
                    <Card className="bg-white/20 backdrop-blur-sm border-white/30">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">김상담 선생님</p>
                            <p className="text-xs opacity-80">학습치료 전문가</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/20 backdrop-blur-sm border-white/30">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Video className="w-5 h-5" />
                            <span className="text-sm font-medium">화상 상담</span>
                          </div>
                          <div className="text-xs">15:00 - 16:00</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* 하단 - 액션 버튼들 */}
                  <div className="space-y-3">
                    <Button className="w-full bg-white/20 hover:bg-white/30 border-white/30 text-white">
                      <Play className="w-4 h-4 mr-2" />
                      상담 시작하기
                    </Button>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="flex-1 text-white hover:bg-white/20">
                        <Video className="w-4 h-4 mr-1" />
                        화상
                      </Button>
                      <Button size="sm" variant="ghost" className="flex-1 text-white hover:bg-white/20">
                        <Phone className="w-4 h-4 mr-1" />
                        음성
                      </Button>
                      <Button size="sm" variant="ghost" className="flex-1 text-white hover:bg-white/20">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        채팅
                      </Button>
                    </div>
                  </div>

                  {/* 배경 장식 */}
                  <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-20 left-10 w-12 h-12 bg-white/10 rounded-full"></div>
                </div>
              </div>

              {/* 플로팅 요소들 */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>

              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </div>
        </div>

        {/* 장점 카드들 */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{advantage.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}