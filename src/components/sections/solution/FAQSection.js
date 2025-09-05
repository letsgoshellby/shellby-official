"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  HelpCircle,
  Search,
  MessageCircle,
  Smartphone,
  CreditCard,
  Shield,
  Users,
  Clock,
  Mail,
  Phone,
  ChevronRight,
  Loader2,
  Star,
  Heart
} from "lucide-react"
import { getFAQ } from "@/app/api"

export default function FAQSection() {
  const [faqs, setFaqs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  useEffect(() => {
    async function fetchFAQs() {
      try {
        const data = await getFAQ()
        setFaqs(data)
      } catch (error) {
        console.error('Failed to fetch FAQs:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchFAQs()
  }, [])

  // 카테고리 정의
  const categories = [
    { id: "all", label: "전체", icon: HelpCircle, color: "text-gray-600" },
    { id: "app", label: "앱 사용법", icon: Smartphone, color: "text-blue-600" },
    { id: "cost", label: "요금/결제", icon: CreditCard, color: "text-green-600" },
    { id: "privacy", label: "개인정보", icon: Shield, color: "text-purple-600" },
    { id: "expert", label: "전문가", icon: Users, color: "text-teal-600" },
    { id: "consultation", label: "상담 진행", icon: MessageCircle, color: "text-emerald-600" },
    { id: "general", label: "기타", icon: Clock, color: "text-gray-600" }
  ]

  // 검색 및 필터링된 FAQ
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = searchTerm === "" || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory
    
    return matchesSearch && matchesCategory
  })

  // 카테고리별 FAQ 개수
  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") return faqs.length
    return faqs.filter(faq => faq.category === categoryId).length
  }

  const popularFAQs = [
    {
      question: "첫 상담은 정말 무료인가요?",
      answer: "네, 맞습니다! 첫 번째 상담은 15분간 무료로 체험하실 수 있어요."
    },
    {
      question: "상담 내용이 외부에 노출될 가능성은 없나요?",
      answer: "절대 그렇지 않습니다. 모든 상담 내용은 암호화되어 안전하게 보관됩니다."
    },
    {
      question: "아이가 화상 상담을 거부하면 어떻게 하나요?",
      answer: "음성 상담이나 채팅 상담으로도 충분히 효과적인 상담이 가능해요."
    }
  ]

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-teal-500" />
            <p className="mt-4 text-gray-600">자주 묻는 질문을 불러오는 중...</p>
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
          <Badge variant="outline" className="mb-4 border-teal-200 text-teal-700">
            <HelpCircle className="w-3 h-3 mr-1" />
            궁금한 점들
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            자주 묻는 질문들
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            셸비 이용에 대해 궁금한 점들을 미리 정리해봤어요.
            <br className="hidden sm:block" />
            찾는 답변이 없다면 언제든 문의해 주세요!
          </p>
        </div>

        {/* 인기 질문들 */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              💡 가장 많이 궁금해하시는 질문들
            </h3>
            <p className="text-gray-600">
              다른 분들도 같은 궁금증을 가지고 계셨어요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularFAQs.map((faq, index) => (
              <Card key={index} className="bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 leading-tight">
                        {faq.question}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 검색 바 */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="궁금한 것을 검색해보세요..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>

        {/* 카테고리 탭 */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 mb-8 h-auto p-1 bg-gray-100 rounded-2xl">
            {categories.map((category) => {
              const IconComponent = category.icon
              const count = getCategoryCount(category.id)
              
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center space-y-1 p-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
                >
                  <IconComponent className={`w-4 h-4 ${category.color}`} />
                  <span className="text-xs font-medium">{category.label}</span>
                  {count > 0 && (
                    <Badge variant="secondary" className="text-xs h-5 px-1.5">
                      {count}
                    </Badge>
                  )}
                </TabsTrigger>
              )
            })}
          </TabsList>

          {/* FAQ 아코디언 */}
          <TabsContent value={activeCategory} className="mt-8">
            {filteredFAQs.length > 0 ? (
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {filteredFAQs.map((faq, index) => (
                      <AccordionItem 
                        key={faq.id} 
                        value={`item-${faq.id}`}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-gray-900 hover:no-underline">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-xs font-bold">Q</span>
                            </div>
                            <span>{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-white text-xs font-bold">A</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    검색 결과가 없어요
                  </h3>
                  <p className="text-gray-600 mb-6">
                    다른 검색어를 시도해보시거나, 직접 문의해 주세요.
                  </p>
                  <Button variant="outline" onClick={() => setSearchTerm("")}>
                    전체 FAQ 보기
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        {/* 추가 문의 섹션 */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 border-0 shadow-2xl">
            <CardContent className="p-8 lg:p-12 text-white text-center">
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold">
                  찾는 답변이 없으셨나요?
                </h3>
                
                <p className="text-lg opacity-90 leading-relaxed">
                  궁금한 점이 있으시면 언제든 연락해 주세요.
                  <br className="hidden sm:block" />
                  친절하게 상세히 안내해드릴게요!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 shadow-lg">
                    <Mail className="w-4 h-4 mr-2" />
                    이메일로 문의하기
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/20">
                    <Phone className="w-4 h-4 mr-2" />
                    전화 상담 신청
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                
                <div className="pt-4 space-y-2">
                  <p className="text-sm opacity-80">
                    📞 고객센터: 1588-0000 (평일 09:00-18:00)
                  </p>
                  <p className="text-sm opacity-80">
                    📧 이메일: help@shellby.co.kr
                  </p>
                  <p className="text-xs opacity-70">
                    보통 24시간 이내에 답변드려요!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}