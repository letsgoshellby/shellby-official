import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Download,
  UserPlus,
  Users,
  MessageCircle,
  ArrowRight,
  Smartphone,
  CheckCircle,
  Clock,
  Heart,
  Shield,
  Target,
  Zap,
  Star,
  Play
} from "lucide-react"

export default function ConsultationProcessSection() {
  const processSteps = [
    {
      step: "01",
      icon: Download,
      title: "앱 다운로드",
      subtitle: "간편하게 시작하기",
      description: "App Store나 Google Play에서 셸비 앱을 다운로드하고 회원가입을 해주세요.",
      details: [
        "무료 다운로드 및 가입",
        "간단한 본인 인증",
        "개인정보는 안전하게 보호됩니다"
      ],
      time: "2분 소요",
      color: "from-blue-400 to-blue-500",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      step: "02", 
      icon: UserPlus,
      title: "상담 신청",
      subtitle: "나의 상황 알리기",
      description: "상담이 필요한 분야와 현재 상황을 간단히 작성해 주세요.",
      details: [
        "상담 분야 선택 (학습, 행동, 정서 등)",
        "현재 상황과 고민 내용 작성",
        "선호하는 상담 방식 선택"
      ],
      time: "5분 소요",
      color: "from-purple-400 to-purple-500", 
      bgColor: "from-purple-50 to-emerald-50"
    },
    {
      step: "03",
      icon: Users,
      title: "전문가 매칭",
      subtitle: "딱 맞는 선생님 찾기",
      description: "AI가 분석한 결과를 바탕으로 가장 적합한 전문가를 추천해드려요.",
      details: [
        "AI 기반 맞춤 매칭",
        "전문가 프로필과 후기 확인",
        "마음에 드는 전문가 직접 선택"
      ],
      time: "즉시 추천",
      color: "from-green-400 to-green-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      step: "04",
      icon: MessageCircle,
      title: "상담 시작",
      subtitle: "따뜻한 만남",
      description: "예약한 시간에 전문가와 1:1 상담을 시작해요. 편안한 마음으로 대화해보세요.",
      details: [
        "화상, 음성, 채팅 중 선택",
        "50분간 충분한 상담 시간",
        "상담 후 피드백과 다음 계획 수립"
      ],
      time: "50분 상담",
      color: "from-emerald-400 to-emerald-500",
      bgColor: "from-emerald-50 to-teal-50"
    }
  ]

  const processFeatures = [
    {
      icon: Clock,
      title: "24시간 예약 가능",
      description: "내가 원하는 시간에 맞춰서"
    },
    {
      icon: Shield,
      title: "완벽한 개인정보 보호",
      description: "모든 상담 내용은 안전하게"
    },
    {
      icon: Target,
      title: "맞춤형 상담",
      description: "개별 상황에 특화된 솔루션"
    },
    {
      icon: Heart,
      title: "지속적인 케어",
      description: "일회성이 아닌 장기적 관계"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700">
            <Play className="w-3 h-3 mr-1" />
            이용 방법
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            이렇게 간단하게 시작할 수 있어요
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            복잡한 절차 없이 4단계만 거치면
            <br className="hidden sm:block" />
            전문가와의 따뜻한 상담이 시작됩니다
          </p>
        </div>

        {/* 프로세스 단계들 */}
        <div className="relative max-w-6xl mx-auto mb-20">
          {/* 연결선 (데스크톱) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-emerald-200"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              
              return (
                <div key={index} className="relative">
                  {/* 모바일 연결선 */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                  )}
                  
                  <Card className={`bg-gradient-to-br ${step.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}>
                    <CardContent className="p-6 space-y-6">
                      {/* 단계 번호와 아이콘 */}
                      <div className="relative">
                        <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                          <span className="text-xs font-bold text-gray-700">{step.step}</span>
                        </div>
                      </div>

                      {/* 제목과 부제목 */}
                      <div className="text-center space-y-2">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <p className="text-sm font-medium text-gray-600">{step.subtitle}</p>
                      </div>

                      {/* 설명 */}
                      <p className="text-sm text-gray-700 leading-relaxed text-center">
                        {step.description}
                      </p>

                      {/* 세부 사항 */}
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-xs text-gray-600">{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* 소요 시간 */}
                      <div className="text-center">
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {step.time}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* 프로세스 특징들 */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              이런 점들이 특별해요
            </h3>
            <p className="text-lg text-gray-600">
              셸비만의 차별화된 상담 시스템을 경험해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* 시작하기 CTA */}
        <Card className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 border-0 shadow-2xl">
          <CardContent className="p-8 lg:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold">
                준비되셨나요?
              </h3>
              
              <p className="text-lg opacity-90 leading-relaxed">
                첫 번째 단계는 앱을 다운로드하는 것부터 시작해요.
                <br className="hidden sm:block" />
                지금 바로 셸비와 함께 새로운 시작을 해보세요!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 shadow-lg">
                  <Download className="w-4 h-4 mr-2" />
                  무료 앱 다운로드
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/20">
                  <Star className="w-4 h-4 mr-2" />
                  후기 먼저 보기
                </Button>
              </div>
              
              <div className="pt-4 space-y-2">
                <p className="text-sm opacity-80">
                  ✨ 첫 상담은 무료로 체험해보실 수 있어요
                </p>
                <p className="text-xs opacity-70">
                  부담 없이 시작해보세요. 언제든 그만둘 수 있습니다.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}