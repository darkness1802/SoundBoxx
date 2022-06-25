import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaUserAlt, FaMicrophone, FaSearch } from "react-icons/fa"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import Sidebar from "../component/Sidebar"
import { ImNewspaper } from "react-icons/im"
import { BsFileMusic } from "react-icons/bs"
import { IoBookOutline } from "react-icons/io5"
import { GiBlackBook } from "react-icons/gi"
import Navbar from "../component/Navbar"

/** @type { page } descript: { None } */
export default function Home() {

    const nav = useNavigate()

    return <div className="page">
        <Sidebar />
        <main className="w-full bg-gray-900 h-[100vh]">

            <Navbar />

            <div className="h-[85vh] pb-20 overflow-y-scroll scrollbar scrollbar-thumb-gray-900">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center justify-center p-8 lg:p-16">
                    <div onClick={() => nav(`/category=tin tức`)} className="home-card bg-gradient-to-b from-red-500 to-amber-500">
                        <ImNewspaper className="text-white text-[32px]" />
                        <h1 className="text-[32px] font-bold text-white">Tin tức</h1>
                    </div>
                    <div onClick={() => nav(`/category=âm nhạc`)} className="home-card bg-gradient-to-b from-amber-500 to-green-500">
                        <BsFileMusic className="text-white text-[32px]" />
                        <h1 className="text-[32px] font-bold text-white">Âm nhạc</h1>
                    </div>
                    <div onClick={() => nav(`/category=sách nói`)} className="home-card bg-gradient-to-b from-green-500 to-sky-500">
                        <IoBookOutline className="text-white text-[32px]" />
                        <h1 className="text-[32px] font-bold text-white">Sách nói</h1>
                    </div>
                    <div onClick={() => nav(`/category=truyện`)} className="home-card bg-gradient-to-b from-sky-500 to-violet-500">
                        <GiBlackBook className="text-white text-[32px]" />
                        <h1 className="text-[32px] font-bold text-white">Truyện</h1>
                    </div>
                </div>

                <div className="flex w-full justify-center items-center px-8 lg:px-16">
                    <h1 className="flex flex-col lg:flex-row w-full gap-0 lg:gap-2 rounded-xl font-bold justify-center items-center bg-slate-100 w-full text-center text-2xl h-[100px]">Xem Netflix và nhiều hơn thế nữa miễn phí <a href="https://bomhubvn.web.app" className="text-red-500">tại đây</a></h1>
                </div>
            </div>
        </main>
    </div>
}
