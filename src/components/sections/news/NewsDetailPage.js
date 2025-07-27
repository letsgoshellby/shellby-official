"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Heart,
  Bookmark,
  MessageCircle,
  Tag,
  User,
  Eye,
  ChevronRight,
  Loader2,
  Copy,
  Check
} from "lucide-react"
import { supabase } from "@/app/supabase"

export default function NewsDetailPage() {
  const params = useParams()
  const [article, setArticle] = useState(null)
  const [relatedNews, setRelatedNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    async function fetchArticle() {
      try {
        const articleId = params.id
        
        // 현재 기사 가져오기
        const { data: currentArticle, error: articleError } = await supabase
          .from('news')
          .select('*')
          .eq('id', articleId)
          .eq('is_published', true)
          .single()

        if (articleError) throw articleError
        setArticle(currentArticle)

        // 관련 뉴스 가져오기 (같은 카테고리, 현재 기사 제외)
        const { data: related, error: relatedError } = await supabase
          .from('news')
          .select('*')
          .eq('category', currentArticle.category)
          .eq('is_published', true)
          .neq('id', articleId)
          .order('published_at', { ascending: false })
          .limit(3)

        if (relatedError) throw relatedError
        setRelatedNews(related)

      } catch (error) {
        console.error('Failed to fetch article:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      fetchArticle()
    }
  }, [params.id])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    })
  }

  const getCategoryInfo = (category) => {
    const categoryMap = {
      announcement: { label: '공지사항', color: 'bg-blue-100 text-blue-800' },
      tips: { label: '육아 팁', color: 'bg-green-100 text-green-800' },
      update: { label: '업데이트', color: 'bg-purple-100 text-purple-800' },
      event: { label: '이벤트', color: 'bg-pink-100 text-pink-800' },
      general: { label: '일반', color: 'bg-gray-100 text-gray-800' }
    }
    return categoryMap[category] || categoryMap.general
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.content.substring(0, 100) + '...',
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // 폴백: URL 복사
      handleCopyLink()
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      console.log('Failed to copy:', error)
    }
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    // 여기에 실제 좋아요 API 호출 추가
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    // 여기에 실제 북마크 API 호출 추가
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-orange-500" />
            <p className="mt-4 text-gray-600">기사를 불러오는 중...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">기사를 찾을 수 없습니다</h1>
          <p className="text-gray-600 mb-8">요청하신 기사가 존재하지 않거나 삭제되었습니다.</p>
          <Button asChild>
            <Link href="/news">
              <ArrowLeft className="w-4 h-4 mr-2" />
              소식 목록으로 돌아가기
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const categoryInfo = getCategoryInfo(article.category)

  return (
    <div className="min-h-screen bg-white">
      {/* 브레드크럼 네비게이션 */}
      <div className="border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              홈
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/news" className="hover:text-orange-600 transition-colors">
              소식
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* 뒤로가기 버튼 */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild className="text-gray-600 hover:text-orange-600">
          <Link href="/news">
            <ArrowLeft className="w-4 h-4 mr-2" />
            소식 목록으로
          </Link>
        </Button>
      </div>

      {/* 기사 헤더 */}
      <article className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* 카테고리와 메타 정보 */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Badge className={`${categoryInfo.color} border-0`}>
                <Tag className="w-3 h-3 mr-1" />
                {categoryInfo.label}
              </Badge>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.published_at)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>5분 읽기</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>124회 조회</span>
                </div>
              </div>
            </div>
          </div>

          {/* 제목 */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8">
            {article.title}
          </h1>

          {/* 피처드 이미지 */}
          {article.featured_image && (
            <div className="relative h-64 lg:h-96 mb-8 rounded-2xl overflow-hidden">
              <Image
                src={article.featured_image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* 소셜 액션 버튼들 */}
          <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`${isLiked ? 'text-red-500' : 'text-gray-600'} hover:text-red-500`}
              >
                <Heart className={`w-4 h-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                좋아요 {isLiked ? '1' : '0'}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBookmark}
                className={`${isBookmarked ? 'text-blue-500' : 'text-gray-600'} hover:text-blue-500`}
              >
                <Bookmark className={`w-4 h-4 mr-1 ${isBookmarked ? 'fill-current' : ''}`} />
                북마크
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="text-gray-600 hover:text-orange-600"
              >
                <Share2 className="w-4 h-4 mr-1" />
                공유하기
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopyLink}
                className="text-gray-600 hover:text-orange-600"
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4 mr-1" />
                    복사됨!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-1" />
                    링크 복사
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* 기사 본문 */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>

          {/* 작성자 정보 (가상) */}
          <div className="border-t border-gray-200 py-8 mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">셸비 에디터팀</h4>
                <p className="text-sm text-gray-600">
                  느린학습자와 가족을 위한 유용한 정보를 전달합니다
                </p>
              </div>
            </div>
          </div>

          {/* 관련 뉴스 */}
          {relatedNews.length > 0 && (
            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <MessageCircle className="w-6 h-6 mr-2 text-orange-500" />
                관련 소식
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedNews.map((news) => {
                  const relatedCategoryInfo = getCategoryInfo(news.category)
                  
                  return (
                    <Card key={news.id} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
                      <div className="relative h-32 bg-gradient-to-br from-orange-100 to-pink-100 overflow-hidden">
                        {news.featured_image ? (
                          <Image
                            src={news.featured_image}
                            alt={news.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-lg flex items-center justify-center">
                              <MessageCircle className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        )}
                        
                        <div className="absolute top-2 left-2">
                          <Badge className={`${relatedCategoryInfo.color} bg-white/90 backdrop-blur-sm border-0 text-xs`}>
                            {relatedCategoryInfo.label}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="text-xs text-gray-500">
                            {formatDate(news.published_at)}
                          </div>
                          
                          <h4 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                            {news.title}
                          </h4>
                          
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {news.content.substring(0, 80)}...
                          </p>
                          
                          <Link 
                            href={`/news/${news.id}`}
                            className="inline-flex items-center text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                          >
                            <span>더 보기</span>
                            <ChevronRight className="w-3 h-3 ml-1" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          )}

          {/* 더 많은 소식 보기 CTA */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-orange-500 to-pink-500 border-0 shadow-xl">
              <CardContent className="p-8 text-white">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold">
                    더 많은 셸비 소식이 궁금하다면?
                  </h4>
                  <p className="opacity-90">
                    유용한 육아 팁부터 서비스 업데이트까지, 다양한 소식들을 만나보세요
                  </p>
                  <div className="pt-2">
                    <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 shadow-lg" asChild>
                      <Link href="/news">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        전체 소식 보기
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </div>
  )
}