"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Heart, 
  Download, 
  Star, 
  Shield, 
  Users, 
  Clock, 
  Gift,
  Smartphone,
  ArrowRight,
  Loader2
} from "lucide-react"
import { getAppInfo } from "@/app/api"

export default function FinalCTASection() {
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
      // 다운로드 클릭 추적을 위한 이벤트 (GA, 앰플리튜드 등)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'app_download_click', {
          platform: platform,
          section: 'final_cta'
        })
      }
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      alert(`${platform} 앱이 곧 출시될 예정입니다!`)
    }
  }

  const benefits = [
    {
      icon: Clock,
      title: "24시간 언제든지",
      description: "원하는 시간에 편리하게"
    },
    {
      icon: Shield,
      title: "안전한 상담 환경",
      description: "개인정보 완벽 보호"
    },
    {
      icon: Users,
      title: "검증된 전문가",
      description: "자격을 갖춘 상담사들"
    },
    {
      icon: Gift,
      title: "합리적인 가격",
      description: "부담 없이 시작해보세요"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-teal-500 via-emerald-500 to-teal-600 relative overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 콘텐츠 */}
          <div className="text-white space-y-8">
            {/* 배지 */}
            <div className="flex items-center space-x-3">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Heart className="w-3 h-3 mr-1 fill-current" />
                지금 시작하세요
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Gift className="w-3 h-3 mr-1" />
                첫 상담 무료
              </Badge>
            </div>

            {/* 메인 헤드라인 */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                따뜻한 상담이{" "}
                <br className="hidden lg:block" />
                당신을{" "}
                <span className="text-yellow-300">
                  기다리고 있어요
                </span>
              </h2>
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
                더 이상 혼자 고민하지 마세요.{" "}
                <br className="hidden lg:block" />
                셸비가 함께 할게요.
              </p>
            </div>

            {/* 혜택 리스트 */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{benefit.title}</h4>
                      <p className="text-xs opacity-80">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* 앱 다운로드 버튼들 */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="h-16 px-8 bg-white hover:bg-gray-100 text-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 flex-1 sm:flex-initial"
                  onClick={() => handleDownloadClick(appInfo?.app_store_url, 'App Store')}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <div className="flex items-center space-x-4">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-gray-500">Download on the</div>
                        <div className="text-base font-semibold">App Store</div>
                      </div>
                    </div>
                  )}
                </Button>

                <Button
                  size="lg"
                  className="h-16 px-8 bg-white hover:bg-gray-100 text-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 flex-1 sm:flex-initial"
                  onClick={() => handleDownloadClick(appInfo?.play_store_url, 'Google Play')}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <div className="flex items-center space-x-4">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-gray-500">GET IT ON</div>
                        <div className="text-base font-semibold">Google Play</div>
                      </div>
                    </div>
                  )}
                </Button>
              </div>

              {/* 추가 정보 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm opacity-90">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span>5.0/5.0 평점</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>0+ 다운로드</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 fill-current" />
                  <span>100% 만족도</span>
                </div>
              </div>
            </div>
          </div>

          {/* 스마트폰 모형 및 시각적 요소 */}
          <div className="relative lg:flex justify-center hidden">
            <div className="relative">
              {/* 메인 스마트폰 */}
              <div className="relative z-10 w-64 h-96 bg-white rounded-[3rem] shadow-2xl p-4">
                <div className="w-full h-full bg-gradient-to-br from-teal-400 to-emerald-400 rounded-[2rem] flex flex-col items-center justify-center space-y-6 text-white relative overflow-hidden">
                  {/* 앱 아이콘 */}
                  <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center">
                    <Heart className="w-10 h-10 fill-current" />
                  </div>
                  
                  {/* 앱 정보 */}
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">셸비</h3>
                    <p className="text-sm opacity-90">따뜻한 상담 서비스</p>
                  </div>

                  {/* 다운로드 버튼 */}
                  <div className="bg-white/20 rounded-2xl px-6 py-3 backdrop-blur-sm">
                    <div className="flex items-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span className="text-sm font-medium">무료 다운로드</span>
                    </div>
                  </div>

                  {/* 장식 요소들 */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
              </div>

              {/* 플로팅 요소들 */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <Star className="w-8 h-8 text-white fill-current animate-pulse" />
              </div>

              <div className="absolute top-1/2 -left-12 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                <Heart className="w-8 h-8 text-white fill-current animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* 긴급성 유도 메시지 */}
        <div className="mt-16 text-center">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-white">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">전문가 온라인</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">평균 응답시간 5분</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}