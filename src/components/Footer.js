import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-green-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 브랜드 섹션 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/shellby.png"
                alt="셸비 로고"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="font-bold text-lg text-gray-800">셸비</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              느린학습자와 가족을 위한<br />
              따뜻한 비대면 상담 서비스
            </p>
            <div className="flex space-x-3">
              {/* 소셜 미디어 링크들 (필요시 추가) */}
            </div>
          </div>

          {/* 서비스 링크 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">서비스</h3>
            <ul className="space-y-2">
                <li>
                <Link href="/solution" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                  솔루션
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                  소식
                </Link>
              </li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">고객지원</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-gray-600">
                  📧 letschugalong@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* 회사 정보 */}
          {/* <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">회사 정보</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                  보도자료
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        <Separator className="my-8 bg-gray-200" />

        {/* 법적 정보 섹션 */}
        <div className="space-y-6">
          {/* 이용약관 및 개인정보처리방침 */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/terms" className="text-gray-800 hover:text-teal-600 font-medium transition-colors">
              이용약관
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/privacy" className="text-gray-800 hover:text-teal-600 font-medium transition-colors">
              개인정보처리방침
            </Link>
            {/* <span className="text-gray-300">|</span>
            <Link href="/youth-protection" className="text-gray-600 hover:text-teal-600 transition-colors">
              청소년보호정책
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/dispute-resolution" className="text-gray-600 hover:text-teal-600 transition-colors">
              분쟁해결기준
            </Link> */}
          </div>

          {/* 사업자 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="space-y-1">
              <p><span className="font-medium">상호:</span> 셸비</p>
              <p><span className="font-medium">대표자:</span> 전민경</p>
              <p><span className="font-medium">사업자등록번호:</span> 274-14-02663</p>
              {/* <p>
                <span className="font-medium">통신판매업신고:</span> 
                <Link 
                  href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1234567890" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-600 transition-colors ml-1"
                >
                  제2024-서울강남-12345호
                </Link>
              </p> */}
            </div>
            <div className="space-y-1">
              <p><span className="font-medium">주소:</span> 서울특별시 마포구 잔다리로7길 3, 403호 (서교동, 패스트파이브 합정2호점)</p>
              <p><span className="font-medium">개인정보관리책임자:</span> 정현주</p>
              <p><span className="font-medium">호스팅제공자:</span> Vercel Inc.</p>
            </div>
          </div>

          {/* 저작권 및 추가 정보 */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4 mb-2 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              <p>© 2025 셸비(Shellby). All rights reserved.</p>
            </div>
          </div>

          {/* 면책 조항 */}
          <div className="text-xs text-gray-500 leading-relaxed">
            <p>
              셸비는 전문가와 이용자 간의 상담 중개 서비스를 제공하며, 상담 내용에 대한 법적 책임은 각 전문가에게 있습니다. 
              상담 서비스 이용 시 발생하는 분쟁에 대해서는 관련 법령에 따라 해결됩니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}