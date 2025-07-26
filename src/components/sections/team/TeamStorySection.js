import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  BookOpen, 
  Lightbulb, 
  Users, 
  Code, 
  Heart, 
  Target,
  Coffee,
  Laptop,
  MessageCircle,
  Rocket,
  Star,
  Calendar
} from "lucide-react"

export default function TeamStorySection() {
  const storyTimeline = [
    {
      date: "2023년 12월",
      icon: Lightbulb,
      title: "첫 번째 만남",
      description: "수업 프로젝트로 만났는데, 우연히 느린학습자 가족 이야기를 듣게 되었어요.",
      details: "처음엔 그냥 과제였는데... 자료를 찾아보다가 이런 어려움이 있다는 걸 알게 됐어요.",
      mood: "😮",
      color: "from-blue-400 to-blue-500"
    },
    {
      date: "2024년 1월",
      icon: MessageCircle,
      title: "깊이 있는 대화",
      description: "직접 학부모님들과 이야기해보면서 진짜 필요한 게 뭔지 알게 되었어요.",
      details: "카페에서 3시간 넘게 이야기했던 그날... 정말 많은 걸 느꼈어요. 😭",
      mood: "💭",
      color: "from-purple-400 to-purple-500"
    },
    {
      date: "2024년 2월",
      icon: Coffee,
      title: "밤새운 회의들",
      description: "정말 이걸 만들어야겠다고 결심하고, 본격적으로 계획을 세우기 시작했어요.",
      details: "편의점 커피만 50잔은 마신 것 같아요... 아이디어 노트만 3권! ☕",
      mood: "🔥",
      color: "from-orange-400 to-orange-500"
    },
    {
      date: "2024년 3-5월",
      icon: Code,
      title: "첫 번째 시도",
      description: "MVP를 만들어봤는데... 완전 망했어요. 하지만 많은 걸 배웠죠!",
      details: "코딩하다가 울기도 하고, 디자인 때문에 싸우기도 하고... 진짜 힘들었어요 😅",
      mood: "😵‍💫",
      color: "from-red-400 to-red-500"
    },
    {
      date: "2024년 6-8월",
      icon: Target,
      title: "방향 전환",
      description: "사용자 피드백을 바탕으로 아예 다시 설계했어요. 이번엔 모바일부터!",
      details: "처음부터 다시 만드는 게 맞다고 결론내렸어요. 용기가 필요했죠.",
      mood: "💪",
      color: "from-green-400 to-green-500"
    },
    {
      date: "2024년 9-11월",
      icon: Laptop,
      title: "본격 개발",
      description: "드디어 지금의 셸비가 만들어지기 시작했어요. 밤샘 작업의 연속이었죠.",
      details: "도서관 24시간 열람실이 우리 제2의 집이었어요... 🏠",
      mood: "👨‍💻",
      color: "from-indigo-400 to-indigo-500"
    },
    {
      date: "2024년 12월",
      icon: Heart,
      title: "첫 사용자들",
      description: "베타 테스터분들이 실제로 써보시고 좋다고 해주셨을 때... 정말 감동이었어요.",
      details: "첫 후기를 받았을 때 팀원들이 다 울었어요 😭 드디어 해냈구나 싶었죠.",
      mood: "🥺",
      color: "from-pink-400 to-pink-500"
    },
    {
      date: "2025년 현재",
      icon: Rocket,
      title: "계속되는 여정",
      description: "아직 갈 길이 멀지만, 더 많은 가족들에게 도움이 되고 싶어요.",
      details: "매일 새로운 도전이지만, 의미있는 일이라는 확신이 있어요! 🚀",
      mood: "✨",
      color: "from-violet-400 to-violet-500"
    }
  ]

  const challenges = [
    {
      icon: Laptop,
      title: "기술적 한계",
      description: "처음엔 코딩도 서툴렀어요. 구글링이 일상이었죠.",
      solution: "포기하지 않고 계속 배웠어요!"
    },
    {
      icon: Users,
      title: "팀워크 갈등",
      description: "의견이 안 맞아서 며칠 말도 안 한 적도 있어요.",
      solution: "솔직한 대화로 더 끈끈해졌어요."
    },
    {
      icon: Coffee,
      title: "자금 부족",
      description: "대학생이다 보니... 알바비로 서버비 내고 그랬어요.",
      solution: "창의적으로 해결책을 찾았어요!"
    },
    {
      icon: Target,
      title: "방향성 혼란",
      description: "정말 이게 맞나 싶어서 고민이 많았어요.",
      solution: "사용자와의 대화가 답이었어요."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700">
            <BookOpen className="w-3 h-3 mr-1" />
            우리의 여정
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            셸비가 태어난 이야기
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            완벽하지 않았던 시작부터 지금까지,
            <br className="hidden sm:block" />
            우리가 겪은 진짜 이야기를 들려드릴게요
          </p>
        </div>

        {/* 타임라인 */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* 타임라인 선 */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>
          
          <div className="space-y-12">
            {storyTimeline.map((item, index) => {
              const IconComponent = item.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className="relative">
                  {/* 타임라인 도트 */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${item.color} border-4 border-white shadow-lg z-10`}></div>
                  
                  {/* 콘텐츠 카드 */}
                  <div className={`ml-20 ${isEven ? 'lg:ml-20' : 'lg:ml-32'}`}>
                    <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center space-x-3">
                              <Badge variant="secondary" className="text-xs">
                                <Calendar className="w-3 h-3 mr-1" />
                                {item.date}
                              </Badge>
                              <span className="text-2xl">{item.mood}</span>
                            </div>
                            
                            <h3 className="text-lg font-semibold text-gray-900">
                              {item.title}
                            </h3>
                            
                            <p className="text-gray-700">
                              {item.description}
                            </p>
                            
                            <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-200">
                              <p className="text-sm text-gray-600 italic">
                                💭 {item.details}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 어려웠던 순간들 */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              솔직히 이런 것들이 어려웠어요
            </h3>
            <p className="text-lg text-gray-600">
              실패와 시행착오가 있었기에 지금의 우리가 있을 수 있었어요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon
              return (
                <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900">{challenge.title}</h4>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      😵 {challenge.description}
                    </p>
                    
                    <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                      <p className="text-sm text-green-700 font-medium">
                        💪 {challenge.solution}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* 현재와 미래 */}
        <Card className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 shadow-2xl">
          <CardContent className="p-8 lg:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 fill-current" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold">
                지금은 이런 마음이에요
              </h3>
              
              <div className="space-y-4 text-lg opacity-90 leading-relaxed">
                <p>
                  "아직 부족한 점이 많지만, 사용자분들이 도움받고 계신다는 걸 보면
                  <br className="hidden sm:block" />
                  정말 뿌듯하고 더 열심히 하고 싶어져요."
                </p>
                
                <p className="text-base">
                  앞으로도 계속 배우고 성장하면서,
                  <br className="hidden sm:block" />
                  더 많은 가족들에게 따뜻한 도움이 되고 싶어요. 🌱
                </p>
              </div>
              
              <div className="pt-4">
                <p className="text-sm opacity-80">
                  우리의 여정이 궁금하시거나, 응원의 말씀이 있으시면 언제든 연락해 주세요!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}