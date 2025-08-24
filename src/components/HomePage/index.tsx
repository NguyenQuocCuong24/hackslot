'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SelectGame_slide } from './SelectGame_Slide'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <div className="min-h-screen ">
            <header className="w-full bg-red-600 text-white relative">
                <div className="mx-auto flex items-center justify-between px-4 py-3 md:px-10 md:py-4">
                    {/* Left PC: Logo + Select */}
                    <div className="hidden md:flex items-center gap-4">
                        <Image
                            src="/assets/Images/logo.png"
                            alt="Logo"
                            width={150}
                            height={50}
                            className="h-auto w-auto"
                            priority
                        />
                        {/* Select Language */}
                        <select className="ml-2 rounded-sm border bg-white border-gray-300 px-2 py-1 text-black text-sm">
                            <option value="en">Select Language</option>
                            <option value="vi">Tiếng Việt</option>
                            <option value="jp">日本語</option>
                        </select>
                    </div>

                    {/* Right PC: User info */}
                    <nav className="hidden md:flex items-center text-lg font-medium text-white">
                        <span>ngocdiep0507</span>
                        <span className="pl-3 ml-3 border-l border-yellow-400">Xu 0</span>
                        <button className="pl-3 ml-3 border-l border-yellow-400 hover:underline">
                            Nạp xu
                        </button>
                        <button className="pl-3 ml-3 border-l border-yellow-400 hover:underline">
                            Hỗ trợ
                        </button>
                        <button className="pl-3 ml-3 border-l border-yellow-400 hover:underline">
                            Đăng xuất
                        </button>
                    </nav>

                    {/* Mobile: Menu + Logo + Language */}
                    <div className="flex w-full items-center justify-between md:hidden">
                        {/* Nút menu bên trái */}
                        <button onClick={() => setOpen(true)}>
                            <Menu size={28} />
                        </button>

                        {/* Logo + Dropdown xếp dọc */}
                        <div className="flex flex-col items-center">
                            <Image
                                src="/assets/Images/logo.png"
                                alt="Logo"
                                width={120}
                                height={40}
                                className="h-auto w-auto"
                                priority
                            />

                            {/* Dropdown Language dưới logo */}
                            <select className="mt-2 rounded-sm border bg-white border-gray-300 px-2 py-1 text-black text-sm">
                                <option value="en">Select Language</option>
                                <option value="vi">Tiếng Việt</option>
                                <option value="jp">日本語</option>
                            </select>
                        </div>

                        <div className="w-[28px]" />
                    </div>

                </div>

                {/* Mobile Sidebar */}
                <div
                    className={`fixed top-0 left-0 h-full w-80 bg-red-400 text-white 
              z-50 transform transition-transform duration-300 
              ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                    {/* Nội dung menu */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-green-400">
                        <Image
                            src="/assets/Images/logo.png"
                            alt="Logo"
                            width={150}
                            height={50}
                            className="h-auto w-auto "
                            priority
                        />

                    </div>
                    <nav className="flex flex-col px-4 py-4 space-y-4 text-base">
                        <span>ngocdiep0507</span>
                        <span>Xu 0</span>
                        <button className="hover:underline text-left">Nạp xu</button>
                        <button className="hover:underline text-left">Hỗ trợ</button>
                        <button className="hover:underline text-left">Đăng xuất</button>
                    </nav>
                </div>

                {/* Overlay */}
                <div
                    className={`fixed inset-0 z-40
              ${open ? 'opacity-100 visible z-40' : 'opacity-0 invisible'}`}
                    onClick={() => setOpen(false)}
                />

            </header>
            <SelectGame_slide/>
        </div>
    )
}
