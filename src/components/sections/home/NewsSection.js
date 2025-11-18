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

  const getCategoryInfo = (category) => {
    const categoryMap = {
      announcement: { label: '공지사항', color: 'bg-blue-100 text-blue-800 border-blue-200' },
      tips: { label: '육아 팁', color: 'bg-green-100 text-green-800 border-green-200' },
      update: { label: '업데이트', color: 'bg-purple-100 text-purple-800 border-purple-200' },
      event: { label: '이벤트', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-teal-200 text-teal-700">
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
        
      </div>
    </section>
  )
}