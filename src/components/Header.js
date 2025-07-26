"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Menu, Heart } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    {
      title: "홈",
      href: "/",
      description: "따뜻한 시작을 함께해요."
    },
    {
      title: "솔루션",
      href: "/solution",
      description: "우리의 상담 서비스를 알아보세요."
    },
    {
      title: "전문가팀",
      href: "/team",
      description: "뭐든지 해내는 우리 팀을 만나보세요."
    },
    {
      title: "소식",
      href: "/news",
      description: "셸비가 전해 온 따끈따끈한 정보를 받아보세요."
    }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* 로고 섹션 */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-lg">
            <Heart className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="font-bold text-xl text-gray-800">
            셸비
          </span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link href={item.href} className={`${navigationMenuTriggerStyle()} text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors`}>
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* 모바일 메뉴 버튼 */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-700">
              <Menu className="h-5 w-5" />
              <span className="sr-only">메뉴 열기</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-white">
            <SheetHeader className="text-left">
              <SheetTitle className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-orange-400 to-pink-400 rounded-md">
                  <Heart className="w-3 h-3 text-white fill-white" />
                </div>
                <span className="text-gray-800">셸비</span>
              </SheetTitle>
              <SheetDescription className="text-gray-600">
                느린학습자와 가족을 위한 따뜻한 상담 서비스
              </SheetDescription>
            </SheetHeader>
            
            <div className="mt-8 flex flex-col space-y-6">
              {/* 모바일 네비게이션만 유지 */}
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="flex flex-col space-y-1 p-3 rounded-lg hover:bg-orange-50 transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-medium text-gray-800 group-hover:text-orange-600">
                      {item.title}
                    </span>
                    <span className="text-sm text-gray-500 group-hover:text-orange-500">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}