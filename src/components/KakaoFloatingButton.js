const KAKAO_CHAT_URL = 'https://pf.kakao.com/_gPdPn'

export default function KakaoFloatingButton() {
  return (
    <a
      href={KAKAO_CHAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡 상담 바로가기"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 flex items-center justify-center"
      style={{ backgroundColor: '#FEE500' }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 3C7.032 3 3 6.358 3 10.5c0 2.674 1.648 5.02 4.128 6.395L6.2 20.1a.375.375 0 0 0 .544.415L11.1 17.97c.297.02.596.03.9.03 4.968 0 9-3.358 9-7.5S16.968 3 12 3z"
          fill="#3C1E1E"
        />
      </svg>
    </a>
  )
}
