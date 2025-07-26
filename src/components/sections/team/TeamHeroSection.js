import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Heart, 
  Users, 
  GraduationCap, 
  Lightbulb, 
  Target,
  Coffee,
  BookOpen,
  ArrowRight
} from "lucide-react"

export default function TeamHeroSection() {
  const teamStats = [
    { icon: Users, number: "5명", label: "팀원" },
    { icon: GraduationCap, number: "3개", label: "대학" },
    { icon: Coffee, number: "∞", label: "마신 커피" },
    { icon: Heart, number: "100%", label: "진심" }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-200/20 to-pink-200/20 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-gradient-to-br from-orange-200/40 to-pink-200/40 blur-2xl"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 콘텐츠 */}
          <div className="space-y-8">
            {/* 배지들 */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                <GraduationCap className="w-3 h-3 mr-1" />
                대학생 창업팀
              </Badge>
              <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                <Lightbulb className="w-3 h-3 mr-1" />
                2023년 시작
              </Badge>
            </div>

            {/* 메인 헤드라인 */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                우리는 이런{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  마음
                </span>으로{" "}
                <br className="hidden lg:block" />
                시작했어요
              </h1>
              <div className="space-y-4 text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>
                  "느린학습자 가족들이 겪는 어려움을 보면서
                  <br className="hidden sm:block" />
                  <span className="font-semibold text-purple-600">우리가 뭔가 도울 수 있지 않을까?</span>
                  라는 생각에서 시작됐어요."
                </p>
                <p className="text-base text-gray-600">
                  아직 대학생이고, 완벽하지 않지만 💪
                  <br />
                  진심으로 의미 있는 변화를 만들고 싶어해요.
                </p>
              </div>
            </div>

            {/* 팀 가치관 카드들 */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/70 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto">
                    <Heart className="w-5 h-5 text-white fill-current" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">진정성</h3>
                  <p className="text-xs text-gray-600">가식 없이, 진심으로</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">성장</h3>
                  <p className="text-xs text-gray-600">매일 배우고 발전</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA 버튼 */}
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                ☕ 가끔 카페에서 마주치면 인사해 주세요!
              </p>
            </div>
          </div>

          {/* 이미지/비주얼 영역 */}
          <div className="relative">
            {/* 메인 팀 사진 영역 */}
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  {/* 임시 팀 사진 영역 - 실제 사진으로 교체 */}
                  <div className="relative h-80 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="grid grid-cols-3 gap-3">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center ${
                              i === 2 ? 'col-start-2' : ''
                            }`}
                          >
                            <Users className="w-6 h-6 text-white" />
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-gray-800">셸비 팀</h3>
                        <p className="text-sm text-gray-600">
                          여기에 팀 단체 사진이<br />
                          들어갈 예정이에요! 📸
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 플로팅 요소들 */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                <Heart className="w-6 h-6 text-purple-600 fill-current animate-pulse" />
              </div>

              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        {/* 팀 통계 */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">숫자로 보는 우리 팀</h3>
            <p className="text-gray-600 text-sm">아직 시작 단계지만, 이런 마음으로 하고 있어요!</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* 인용구 */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-500 border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <blockquote className="text-white space-y-4">
                <p className="text-xl lg:text-2xl font-medium leading-relaxed">
                  "완벽하지 않아도 괜찮아요. 
                  <br className="hidden sm:block" />
                  중요한 건 시작하는 용기와 계속하는 마음이니까요."
                </p>
                <footer className="text-blue-100 text-sm">
                  - 셸비 팀 모토 -
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}