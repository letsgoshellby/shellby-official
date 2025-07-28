/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ucrntpfaxuipdbavojol.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      // 다른 이미지 호스트도 필요하다면 추가
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
    // 또는 간단하게 domains 사용 (보안성은 낮음)
    // domains: ['ucrntpfaxuipdbavojol.supabase.co'],
  },
}

export default nextConfig