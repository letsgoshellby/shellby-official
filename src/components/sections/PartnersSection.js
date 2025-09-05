"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Award, ExternalLink, Loader2 } from "lucide-react"
import { getPartners } from "@/app/api"

export default function PartnersSection() {
  const [partners, setPartners] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchPartners() {
      try {
        const data = await getPartners()
        setPartners(data)
      } catch (error) {
        console.error('Failed to fetch partners:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPartners()
  }, [])

  const getCategoryInfo = (category) => {
    const categoryMap = {
      medical: { label: '의료기관', icon: Building2, color: 'bg-blue-100 text-blue-800 border-blue-200' },
      education: { label: '교육기관', icon: Users, color: 'bg-green-100 text-green-800 border-green-200' },
      therapy: { label: '치료센터', icon: Award, color: 'bg-purple-100 text-purple-800 border-purple-200' },
      government: { label: '정부기관', icon: Building2, color: 'bg-gray-100 text-gray-800 border-gray-200' }
    }
    return categoryMap[category] || categoryMap.medical
  }

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-teal-500" />
            <p className="mt-4 text-gray-600">협력 파트너 정보를 불러오는 중...</p>
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
            <Award className="w-3 h-3 mr-1" />
            신뢰할 수 있는 파트너십
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            검증된 전문기관과 함께합니다
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            셸비는 엄선된 의료기관, 교육센터, 치료기관과 협력하여 
            <br className="block" />
            최고 수준의 전문 상담 서비스를 제공합니다.
          </p>
        </div>

        {/* 파트너 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner) => {
            const categoryInfo = getCategoryInfo(partner.category)
            const CategoryIcon = categoryInfo.icon

            return (
              <Card key={partner.id} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-teal-200 overflow-hidden">
                <CardContent className="p-6">
                  {/* 로고 영역 */}
                  <div className="flex items-center justify-center h-20 mb-6 bg-gray-50 rounded-lg group-hover:bg-teal-50 transition-colors">
                    {partner.logo_url ? (
                      <Image
                        src={partner.logo_url}
                        alt={`${partner.name} 로고`}
                        width={120}
                        height={60}
                        className="object-contain"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-lg">
                        <CategoryIcon className="w-8 h-8 text-white" />
                      </div>
                    )}
                  </div>

                  {/* 기관 정보 */}
                  <div className="space-y-4">
                    {/* 카테고리 배지 */}
                    <Badge variant="outline" className={categoryInfo.color}>
                      <CategoryIcon className="w-3 h-3 mr-1" />
                      {categoryInfo.label}
                    </Badge>

                    {/* 기관명 */}
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                      {partner.name}
                    </h3>

                    {/* 설명 */}
                    {partner.description && (
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {partner.description}
                      </p>
                    )}

                    {/* 웹사이트 링크 */}
                    {partner.website_url && (
                      <a
                        href={partner.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
                      >
                        <span>웹사이트 방문</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 파트너십 혜택 */}
        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              전문가 네트워크의 힘
            </h3>
            <p className="text-lg text-gray-600">
              다양한 분야의 전문기관과의 협력으로
              <br className="block" />
              더욱 체계적인 상담 서비스를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">전문가와의 협력</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                전문 상담 기관과의 협력으로 신뢰도가 높은 상담 서비스
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">개인 맞춤형 상담</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                특수교육 및 학습치료 전문기관과의 파트너십으로 맞춤형 솔루션 추천
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">가격 혁신</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                경쟁 서비스와 대비하여 가격은 낮게, 품질은 최고로
              </p>
            </div>
          </div>
        </div>

        {/* 파트너 등록 안내 */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <span className="text-sm">전문기관 파트너십 문의:</span>
            <a href="mailto:partner@shellby.co.kr" className="text-teal-600 hover:text-teal-700 font-medium transition-colors">
              partner@shellby.co.kr
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}