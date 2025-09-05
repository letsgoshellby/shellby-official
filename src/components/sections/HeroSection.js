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
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100">
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-teal-200/30 to-emerald-200/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-teal-200/20 to-emerald-200/20 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 콘텐츠 */}
          <div className="space-y-8">

            {/* 메인 헤드라인 */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                느린학습자 아이의{" "}
                <br className=" block" />
                <span className="">
                  보호자를 위한{" "}
                </span>
                <br className=" block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                  1:1 맞춤형 상담
                </span> 솔루션
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                내가 원하는 전문가로부터{" "}
                <br className=" block" />
                필요한 솔루션을 온라인으로 받아보세요
              </p>
            </div>

            {/* 주요 특징 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="flex items-center justify-center w-8 h-8 bg-teal-100 rounded-lg">
                  <Users className="w-4 h-4 text-teal-600" />
                </div>
                <span className="text-sm font-medium">검증된 전문가</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-lg">
                  <Shield className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm font-medium">안전한 상담</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="flex items-center justify-center w-8 h-8 bg-teal-100 rounded-lg">
                  <Heart className="w-4 h-4 text-teal-600 fill-current" />
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
                <span>📱 iOS & Android 지원</span>
              </div>
            </div>
          </div>

          {/* 이미지/일러스트 영역 */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* 메인 스마트폰 모형 */}
              <div className="relative z-10">
                <div className="relative h-[calc(100vh-4rem)] w-full">
                  <Image 
                    src={"/shellmate_hand.png"} 
                    alt="셸메이트" 
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}