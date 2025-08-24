"use client"

import Image from "next/image"
import React, { useState } from "react"
import { gameList } from "./mockdata"

export function SelectGame_slide() {
    const [showModal, setShowModal] = useState(false)

    const handleClickGame = () => {
        setShowModal(true)
    }

    return (
        <div className="relative bg-[#150400] min-h-[800px] w-full flex items-center justify-center p-10 md:p-6">
            {/* Khung nền đỏ */}
            <div className="bg-[#963633] rounded-lg p-10 w-full max-w-[1200px]">
                {/* Tiêu đề */}
                <div className="flex justify-center mb-6">
                    <div className="px-6 py-2 rounded-md text-white font-bold">
                        <Image
                            src="/assets/Images/slot.png"
                            alt="Logo"
                            width={150}
                            height={100}
                            className="h-auto w-auto"
                            priority
                        />
                    </div>
                </div>

                {/* Grid hiển thị game */}
                <div
                    className="md:mx-40 grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center 
                               max-h-[600px] overflow-y-scroll hide-scrollbar"
                >
                    {gameList.map((game, index) => (
                        <div
                            key={index}
                            className="rounded-2xl w-[130px] h-[130px] border border-white overflow-hidden flex items-center justify-center cursor-pointer"
                            onClick={handleClickGame}
                        >
                            <Image
                                src={game.logo}
                                alt={game.name}
                                width={130}
                                height={130}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal thông báo hết xu */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div
                        className="relative bg-[#2a0000]/80 rounded-2xl px-10 py-8 w-[500px] text-center shadow-lg border-2 border-yellow-400"
                        style={{
                            boxShadow:
                                "0 0 20px 5px rgba(255, 255, 0, 0.7), inset 0 0 15px rgba(255, 255, 0, 0.5)",
                        }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Bạn đã hết xu</h2>
                        <p className="text-lg text-gray-200 mb-8">
                            Vui lòng liên hệ admin để nạp thêm xu
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-gradient-to-b from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold px-8 py-2 rounded-full shadow-lg"
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
