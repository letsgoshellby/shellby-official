"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight, Newspaper, Loader2, MessageCircle } from "lucide-react"
import { getLatestNews } from "@/app/api"

export default function NewsSection() {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getLatestNews(3) // 최신 3개 가져오기
        setNews(data)
      } catch (error) {
        console.error('Failed to fetch news:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchNews()
  }, [])

  const getCategoryInfo = (category) => {
    const categoryMap = {
      announcement: { label: '공지사항', color: 'bg-blue-100 text-blue-800 border-blue-200' },
      tips: { label: '육아 팁', color: 'bg-green-100 text-green-800 border-green-200' },
      update: { label: '업데이트', color: 'bg-purple-100 text-purple-800 border-purple-200' },
      event: { label: '이벤트', color: 'bg-pink-100 text-pink-800 border-pink-200' },
      general: { label: '일반', color: 'bg-gray-100 text-gray-800 border-gray-200' }
    }
    return categoryMap[category] || categoryMap.general
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return '오늘'
    if (diffDays === 1) return '어제'
    if (diffDays < 7) return `${diffDays}일 전`
    
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-orange-500" />
            <p className="mt-4 text-gray-600">최신 소식을 불러오는 중...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-orange-200 text-orange-700">
            <Newspaper className="w-3 h-3 mr-1" />
            따끈따끈한 소식
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            셸비의 최신 소식
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            서비스 업데이트부터 느린학습자를 위한 유용한 팁까지,
            <br className="block" />
            셸비가 전하는 따뜻한 정보들을 만나보세요
          </p>
        </div>

        {/* 뉴스 그리드 */}
        {news.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {news.map((article, index) => {
                const categoryInfo = getCategoryInfo(article.category)
                const isFeature = index === 0 // 첫 번째 기사를 피처로 처리

                return (
                  <Card 
                    key={article.id} 
                    className={`group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-orange-200 overflow-hidden ${
                      isFeature ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    {/* 이미지 영역 */}
                    <div className="relative h-48 bg-gradient-to-br from-orange-100 to-pink-100 overflow-hidden">
                      {article.featured_image ? (
                        <Image
                          src={article.featured_image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="text-center space-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto">
                              <Newspaper className="w-8 h-8 text-white" />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">셸비 소식</p>
                          </div>
                        </div>
                      )}
                      
                      {/* 카테고리 배지 */}
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className={`${categoryInfo.color} bg-white/90 backdrop-blur-sm`}>
                          {categoryInfo.label}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* 날짜 정보 */}
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(article.published_at)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>2분 읽기</span>
                          </div>
                        </div>

                        {/* 제목 */}
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">
                          {article.title}
                        </h3>

                        {/* 내용 미리보기 */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {truncateText(article.content)}
                        </p>

                        {/* 더보기 링크 */}
                        <div className="pt-2">
                          <Link 
                            href={`/news/${article.id}`}
                            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors group"
                          >
                            <span>자세히 보기</span>
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* 더 많은 소식 보기 버튼 */}
            <div className="text-center">
              <Button asChild size="lg" variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50">
                <Link href="/news" className="inline-flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>모든 소식 보기</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </>
        ) : (
          /* 소식이 없을 때 */
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Newspaper className="w-12 h-12 text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">곧 새로운 소식을 전해드릴게요!</h3>
            <p className="text-gray-600 mb-8">
              셸비의 다양한 소식과 유용한 정보들이 준비되고 있습니다.
            </p>
            <Button asChild variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50">
              <Link href="/news">
                소식 페이지 방문하기
              </Link>
            </Button>
          </div>
        )}

        {/* 뉴스레터 구독 안내 */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold">
              셸비 소식을 놓치지 마세요
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              셸비 앱에서는 느린학습자를 위한 전문가 칼럼을
              <br className="block" />
              가장 먼저 받아보실 수 있습니다!
            </p>
            <div className="pt-4">
              <p className="text-sm opacity-80">
                앱을 다운로드하시면 푸시 알림으로 새 칼럼을 받아보실 수 있어요 📱
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}