// lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// // 타입 정의 (TypeScript 사용 시)
// export type Database = {
//   public: {
//     Tables: {
//       news: {
//         Row: {
//           id: number
//           title: string
//           content: string
//           category: string
//           published_at: string
//           featured_image: string | null
//           is_published: boolean
//           created_at: string
//         }
//         Insert: {
//           title: string
//           content: string
//           category: string
//           published_at?: string
//           featured_image?: string | null
//           is_published?: boolean
//         }
//         Update: {
//           title?: string
//           content?: string
//           category?: string
//           published_at?: string
//           featured_image?: string | null
//           is_published?: boolean
//         }
//       }
//       // 다른 테이블들도 여기에 추가
//     }
//   }
// }