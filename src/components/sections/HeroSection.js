"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Download, Star, Users, Shield } from "lucide-react"
import { getAppInfo } from "@/app/api"

export default function HeroSection() {
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
      // 임시 링크 (실제 앱 출시 전)
      alert(`${platform} 앱이 곧 출시될 예정입니다!`)
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-orange-100 py-20 lg:py-32">
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-orange-200/30 to-pink-200/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-orange-200/20 to-pink-200/20 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 콘텐츠 */}
          <div className="space-y-8">
            {/* 배지 */}
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
                <Heart className="w-3 h-3 mr-1 fill-current" />
                새로운 상담 서비스
              </Badge>
              <Badge variant="outline" className="border-pink-200 text-pink-700">
                <Star className="w-3 h-3 mr-1 fill-current" />
                2025 런칭
              </Badge>
            </div>

            {/* 메인 헤드라인 */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                느린학습자와 가족을 위한{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                  전문 상담
                </span>이{" "}
                <br className="hidden lg:block" />
                이제 집에서도
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                신뢰할 수 있는 전문가와의 1:1 맞춤 상담을{" "}
                <br className="hidden lg:block" />
                스마트폰으로 편안하게 받아보세요
              </p>
            </div>

            {/* 주요 특징 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-100 rounded-lg">
                  <Users className="w-4 h-4 text-orange-600" />
                </div>
                <span className="text-sm font-medium">검증된 전문가</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="flex items-center justify-center w-8 h-8 bg-pink-100 rounded-lg">
                  <Shield className="w-4 h-4 text-pink-600" />
                </div>
                <span className="text-sm font-medium">안전한 상담</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-100 rounded-lg">
                  <Heart className="w-4 h-4 text-orange-600 fill-current" />
                </div>
                <span className="text-sm font-medium">따뜻한 케어</span>
              </div>
            </div>

            {/* 앱 다운로드 버튼들 */}
            <div className="space-y-4">
              <p className="text-gray-600 font-medium">지금 바로 셸비와 함께 시작해보세요</p>
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
              
              {/* 추가 정보 */}
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>✨ 첫 상담 무료 체험</span>
                <span>•</span>
                <span>📱 iOS & Android 지원</span>
              </div>
            </div>
          </div>

          {/* 이미지/일러스트 영역 */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* 메인 스마트폰 모형 */}
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-4">
                <div className="bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-8 h-8 fill-current" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">셸비</h3>
                      <p className="text-sm opacity-90">따뜻한 상담이 시작됩니다</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/30 rounded-full w-3/4 mx-auto"></div>
                      <div className="h-2 bg-white/30 rounded-full w-1/2 mx-auto"></div>
                      <div className="h-2 bg-white/30 rounded-full w-2/3 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 플로팅 요소들 */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-200 to-pink-200 rounded-2xl flex items-center justify-center shadow-lg">
                <Download className="w-8 h-8 text-orange-600" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-200 to-orange-200 rounded-xl flex items-center justify-center shadow-lg">
                <Star className="w-6 h-6 text-pink-600 fill-current" />
              </div>

              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-red-500 fill-current animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}