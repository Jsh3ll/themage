"use client"

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'


const MobileNav = () => {
    const pathName = usePathname();

    return (
        <div className='header'>
            <Link href="/" className='flex items-center gap-2 md:py-2'>
                <Image src="/assets/images/logo-text.svg" alt="text" width={180} height={28} />
            </Link>

            <nav className="flex gap-2">
                <SignedIn>
                    <UserButton afterSignOutUrl='/' />

                    <Sheet>
                        <SheetTrigger>
                            <Image src="/assets/icons/menu.svg" alt="menu" width={32} height={32} className='cursor-pointer' />
                        </SheetTrigger>
                        <SheetContent className='sheet-content sm:w-64'>
                            <>
                                <Image src="/assets/images/logo-text.svg" alt="logo" width={152} height={23} />

                                <ul className="header-nav_elements">
                                    {navLinks.map((link) => {
                                        const isActive = link.route === pathName

                                        return (
                                            <li key={link.route} className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}>
                                                <Link className='sidebar-link' href={link.route}>
                                                    <img src={link.icon} width={24} height={24} className={`${isActive && 'brightness-100'}`} />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </>
                        </SheetContent>
                    </Sheet>

                </SignedIn>

                <SignedOut>
            <Button asChild className='button bg-purple-gradient bg-cover'>
              <Link href="/login">
                Login
              </Link>
            </Button>
          </SignedOut>
            </nav>
        </div>
    )
}

export default MobileNav