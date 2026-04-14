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
import { Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    {
      title: "셸메이트",
      href: "/solution",
      description: "🧑🏻‍💻 우리의 상담 서비스를 알아보세요."
    },
    {
      title: "셸비팀",
      href: "/team",
      description: "🎉 뭐든지 해내는 우리 팀을 만나보세요."
    }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* 로고 섹션 */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div>
            <Image 
            src="/shellby.png"
            alt="셸비 로고"
            width={64}
            height={48}
            className="rounded-md"
            ></Image>
          </div>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className={`gap-8`}>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link href={item.href} className={` font-extrabold hover:text-teal-600 hover:bg-teal-50 transition-colors`}>
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
            <Button variant="ghost" size="icon" className="text-gray-700" aria-expanded={isOpen} aria-controls="mobile-menu" aria-label="메뉴 열기">
              <Menu className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">메뉴 열기</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-white" id="mobile-menu">
            <SheetHeader className="text-left">
              <SheetTitle className="flex items-center space-x-2">
                <div>
                    <Image 
                    src="/shellby.png"
                    alt="셸비 로고"
                    width={36}
                    height={36}
                    className="rounded-md"
                    ></Image>
                </div>
                <span className="text-gray-800">셸비</span>
              </SheetTitle>
              <SheetDescription className="text-gray-600">
                느린학습자와 가족을 위한 비대면 상담 서비스
              </SheetDescription>
            </SheetHeader>
            
            <div className="mt-8 flex flex-col space-y-6">
              {/* 모바일 네비게이션만 유지 */}
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="flex flex-col space-y-1 p-3 rounded-lg hover:bg-teal-50 transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-medium text-gray-800 group-hover:text-teal-600">
                      {item.title}
                    </span>
                    <span className="text-sm text-gray-500 group-hover:text-teal-500">
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