"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Calendar,
  Clock,
  Search,
  Tag,
  ArrowRight,
  Newspaper,
  TrendingUp,
  MessageCircle,
  Eye,
  Filter,
  Loader2,
  Heart,
  Star
} from "lucide-react"
import { supabase } from "@/app/supabase"

export default function NewsListPage() {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [featuredNews, setFeaturedNews] = useState([])

  useEffect(() => {
    async function fetchNews() {
      try {
        // 모든 발행된 뉴스 가져오기
        const { data: allNews, error } = await supabase
          .from('news')
          .select('*')
          .eq('is_published', true)
          .order('published_at', { ascending: false })

        if (error) throw error

        setNews(allNews)
        
        // 피처드 뉴스 (최신 3개)
        setFeaturedNews(allNews.slice(0, 3))
      } catch (error) {
        console.error('Failed to fetch news:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchNews()
  }, [])

  // 카테고리 정의
  const categories = [
    { id: "all", label: "전체", color: "bg-gray-100 text-gray-800" },
    { id: "announcement", label: "공지사항", color: "bg-blue-100 text-blue-800" },
    { id: "tips", label: "육아 팁", color: "bg-green-100 text-green-800" },
    { id: "update", label: "업데이트", color: "bg-purple-100 text-purple-800" },
    { id: "event", label: "이벤트", color: "bg-emerald-100 text-emerald-800" },
    { id: "general", label: "일반", color: "bg-gray-100 text-gray-800" }
  ]

  // 검색 및 필터링된 뉴스
  const filteredNews = news.filter(article => {
    const matchesSearch = searchTerm === "" || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

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

  const getCategoryInfo = (category) => {
    const categoryInfo = categories.find(cat => cat.id === category)
    return categoryInfo || categories[0]
  }

  const truncateContent = (content, maxLength = 150) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength) + '...'
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-teal-500" />
            <p className="mt-4 text-gray-600">소식을 불러오는 중...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 페이지 헤더 */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-teal-200 text-teal-700">
              <Newspaper className="w-3 h-3 mr-1" />
              셸비 소식
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              따끈따끈한 소식들
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              셸비의 새로운 소식부터 느린학습자를 위한 유용한 팁까지,
              <br className="hidden sm:block" />
              도움이 되는 정보들을 전해드려요
            </p>
          </div>

          {/* 검색 및 필터 */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 검색바 */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="궁금한 내용을 검색해보세요..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-xl border-gray-200 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            {/* 카테고리 필터 */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white border-0" 
                    : "border-gray-200 text-gray-700 hover:bg-gray-50"
                  }
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {category.label}
                  <Badge variant="secondary" className="ml-2 h-5 px-1.5 text-xs">
                    {category.id === "all" ? news.length : news.filter(n => n.category === category.id).length}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 피처드 뉴스 (최신 3개) */}
      {featuredNews.length > 0 && selectedCategory === "all" && searchTerm === "" && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-teal-500" />
                주목할 만한 소식
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredNews.map((article, index) => {
                const categoryInfo = getCategoryInfo(article.category)
                const isMainFeature = index === 0

                return (
                  <Card 
                    key={article.id} 
                    className={`group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-teal-200 overflow-hidden ${
                      isMainFeature ? 'lg:col-span-2 lg:row-span-1' : ''
                    }`}
                  >
                    {/* 이미지 영역 */}
                    <div className={`relative ${isMainFeature ? 'h-64' : 'h-48'} bg-gradient-to-br from-teal-100 to-emerald-100 overflow-hidden`}>
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
                            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto">
                              <Newspaper className="w-8 h-8 text-white" />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">셸비 소식</p>
                          </div>
                        </div>
                      )}
                      
                      {/* 카테고리 배지 */}
                      <div className="absolute top-4 left-4">
                        <Badge className={`${categoryInfo.color} bg-white/90 backdrop-blur-sm border-0`}>
                          {categoryInfo.label}
                        </Badge>
                      </div>

                      {/* 피처드 배지 */}
                      {isMainFeature && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-teal-500 text-white border-0">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            주요 소식
                          </Badge>
                        </div>
                      )}
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
                            <span>3분 읽기</span>
                          </div>
                        </div>

                        {/* 제목 */}
                        <h3 className={`${isMainFeature ? 'text-xl' : 'text-lg'} font-bold text-gray-900 leading-tight group-hover:text-teal-600 transition-colors`}>
                          {article.title}
                        </h3>

                        {/* 내용 미리보기 */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {truncateContent(article.content, isMainFeature ? 200 : 120)}
                        </p>

                        {/* 더보기 링크 */}
                        <div className="pt-2">
                          <Link 
                            href={`/news/${article.id}`}
                            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors group"
                          >
                            <span>자세히 읽기</span>
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* 전체 뉴스 목록 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "all" ? "모든 소식" : `${getCategoryInfo(selectedCategory).label} 소식`}
            </h2>
            <div className="text-sm text-gray-500">
              총 {filteredNews.length}개의 소식
            </div>
          </div>

          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article) => {
                const categoryInfo = getCategoryInfo(article.category)
                
                return (
                  <Card 
                    key={article.id} 
                    className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-orange-200 overflow-hidden bg-white"
                  >
                    {/* 이미지 영역 */}
                    <div className="relative h-48 bg-gradient-to-br from-teal-100 to-emerald-100 overflow-hidden">
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
                            <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-xl flex items-center justify-center mx-auto">
                              <Newspaper className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs text-gray-600">셸비 소식</p>
                          </div>
                        </div>
                      )}
                      
                      {/* 카테고리 배지 */}
                      <div className="absolute top-3 left-3">
                        <Badge className={`${categoryInfo.color} bg-white/90 backdrop-blur-sm border-0 text-xs`}>
                          {categoryInfo.label}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <div className="space-y-3">
                        {/* 날짜 */}
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(article.published_at)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>2분 읽기</span>
                          </div>
                        </div>

                        {/* 제목 */}
                        <h3 className="font-semibold text-gray-900 leading-tight group-hover:text-teal-600 transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        {/* 내용 미리보기 */}
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {truncateContent(article.content, 100)}
                        </p>

                        {/* 더보기 */}
                        <div className="pt-2">
                          <Link 
                            href={`/news/${article.id}`}
                            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors"
                          >
                            <span>더 보기</span>
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ) : (
            <Card className="bg-white border-gray-200">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  검색 결과가 없어요
                </h3>
                <p className="text-gray-600 mb-6">
                  다른 검색어나 카테고리를 선택해보세요.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                  }}
                >
                  전체 소식 보기
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* 뉴스레터 구독 CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-emerald-500">
        <div className="container mx-auto px-4">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 lg:p-12 text-white text-center">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 fill-current" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  새로운 소식을 놓치지 마세요
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  셸비의 최신 소식과 느린학습자를 위한 전문가 팁을
                  <br className="hidden sm:block" />
                  앱을 통해 가장 먼저 받아보세요
                </p>
                <div className="pt-4">
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 shadow-lg">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    셸비 앱 다운로드
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <p className="text-sm opacity-80">
                  푸시 알림으로 새 소식을 즉시 받아보실 수 있어요! 📱
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}