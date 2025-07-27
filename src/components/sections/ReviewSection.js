"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, Users, Quote, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { getReviews } from "@/app/api"

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await getReviews(true) // featured reviews만 가져오기
        setReviews(data)
      } catch (error) {
        console.error('Failed to fetch reviews:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchReviews()
  }, [])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`} 
      />
    ))
  }

  const scrollToReview = (index) => {
    setCurrentIndex(index)
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const reviewWidth = container.children[0]?.offsetWidth || 0
      const gap = 32 // gap-8 = 32px
      container.scrollTo({
        left: index * (reviewWidth + gap),
        behavior: 'smooth'
      })
    }
  }

  const nextReview = () => {
    const nextIndex = (currentIndex + 1) % reviews.length
    scrollToReview(nextIndex)
  }

  const prevReview = () => {
    const prevIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1
    scrollToReview(prevIndex)
  }

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-orange-500" />
            <p className="mt-4 text-gray-600">후기를 불러오는 중...</p>
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
            <Heart className="w-3 h-3 mr-1 fill-current" />
            진짜 후기
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            셸비와 함께한 가족들의 이야기
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            실제로 셸비 상담 서비스를 이용하신 가족들이 직접 전해주는
            <br className="hidden sm:block" />
            따뜻하고 진솔한 경험담을 들어보세요
          </p>
        </div>

        {reviews.length > 0 ? (
          <>
            {/* 통계 정보 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-orange-500">5.0</div>
                <div className="flex justify-center space-x-1 mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-gray-600 text-sm">평균 만족도</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-pink-500">0+</div>
                <div className="flex justify-center">
                  <Users className="w-5 h-5 text-pink-500" />
                </div>
                <p className="text-gray-600 text-sm">이용 가족 수</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-orange-500">100%</div>
                <div className="flex justify-center">
                  <Heart className="w-5 h-5 text-orange-500 fill-current" />
                </div>
                <p className="text-gray-600 text-sm">재이용률</p>
              </div>
            </div>

            {/* 후기 캐러셀 */}
            <div className="relative">
              {/* 네비게이션 버튼 */}
              {reviews.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border-gray-200 hover:bg-orange-50 hover:border-orange-200 -ml-6 hidden lg:flex"
                    onClick={prevReview}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border-gray-200 hover:bg-orange-50 hover:border-orange-200 -mr-6 hidden lg:flex"
                    onClick={nextReview}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </>
              )}

              {/* 후기 카드들 */}
              <div 
                ref={scrollContainerRef}
                className="flex space-x-8 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {reviews.map((review, index) => (
                  <Card 
                    key={review.id} 
                    className="flex-shrink-0 w-full md:w-96 bg-gradient-to-br from-orange-50 to-pink-50 border-orange-100 shadow-lg"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        {/* 인용 아이콘 */}
                        <div className="flex justify-between items-start">
                          <Quote className="w-8 h-8 text-orange-300" />
                          <div className="flex space-x-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>

                        {/* 후기 내용 */}
                        <blockquote className="text-gray-700 leading-relaxed text-lg">
                          "{review.content}"
                        </blockquote>

                        {/* 작성자 정보 */}
                        <div className="flex items-center space-x-4 pt-4 border-t border-orange-200">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-lg">
                              {review.customer_name?.charAt(0) || '😊'}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {review.customer_name || '익명의 학부모'}
                            </p>
                            <p className="text-sm text-gray-600">셸비 이용 가족</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* 도트 인디케이터 */}
              {reviews.length > 1 && (
                <div className="flex justify-center space-x-2 mt-8">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentIndex 
                          ? 'bg-orange-500 scale-110' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      onClick={() => scrollToReview(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* 후기 작성 유도 */}
            <div className="mt-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-8 lg:p-12 text-white text-center">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 fill-current" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  당신의 소중한 경험을 나눠주세요
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  셸비와 함께한 특별한 순간들이 다른 가족들에게도
                  <br className="block" />
                  큰 힘과 용기가 될 수 있어요!
                </p>
              </div>
            </div>
          </>
        ) : (
          /* 후기가 없을 때 */
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-orange-400 fill-current" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">첫 번째 후기의 주인공이 되어주세요!</h3>
            <p className="text-gray-600 mb-8">
              셸비와 함께하는 여러분의 특별한 이야기를 기다리고 있어요.
            </p>
            <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50">
              상담 시작하기
            </Button>
          </div>
        )}
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}