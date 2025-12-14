import Image from 'next/image'

export default function TeamHeroSection() {

  return (
    <section>
      <div className="w-full flex justify-center">
        {/* 2x2 그리드 컨테이너 - 최대 크기 제한 */}
        <div className="grid grid-cols-2 grid-rows-2 w-full max-w-[1504px] md:max-w-6xl gap-4 p-4">
          {/* 왼쪽 상단 */}
          <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: '500/233' }}>
            <Image
              src="/team_together_1.png"
              alt="Team members"
              fill
              className="object-cover"
            />
          </div>

          {/* 오른쪽 상단 */}
          <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: '500/233' }}>
            <Image
              src="/team_together_3.png"
              alt="Team members"
              fill
              className="object-cover"
            />
          </div>

          {/* 왼쪽 하단 - Shellby 로고 */}
          <div className="relative w-full overflow-hidden rounded-lg bg-[#0a956b] flex items-center justify-center" style={{ aspectRatio: '500/233' }}>
            <Image
              src="/shellby.png"
              alt="Shellby Logo"
              width={300}
              height={100}
              className="object-contain brightness-0 invert"
            />
          </div>

          {/* 오른쪽 하단 */}
          <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: '500/233' }}>
            <Image
              src="/team_together_2.png"
              alt="Team members"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <div className='max-w-[1504px] md:max-w-6xl w-full p-4'>
          <h1 className='text-3xl' style={{ letterSpacing: '-0.025em' }}>안녕하세요, 우리는 <span className='font-bold'>셸비</span>입니다.</h1>
          <p className=' text-lg mt-1' style={{ letterSpacing: '-0.025em' }}>
            느린학습자 가족들이 겪는 어려움을 보며, <span className='font-bold'>우리가 뭔가 도울 수 있지 않을까</span> 라는 생각에서 시작됐어요.
          </p>
          <p className=' text-lg' style={{ letterSpacing: '-0.025em' }}>
            아직 대학생이고, 완벽하지 않지만 <span className='font-bold'>진심으로 의미 있는 변화</span>를 만들고 싶어해요.
          </p>
        </div>
      </div>
    </section>
  )
}