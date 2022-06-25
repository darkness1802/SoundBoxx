import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useSpeechToText from 'react-hook-speech-to-text'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { FaUserAlt, FaMicrophone, FaSearch } from "react-icons/fa"

/** @type { comp } descript: { None } */
export default function Navbar() {

    const nav = useNavigate()
    const [searchValue, setSearchValue] = useState("")

    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    })

    const handleStopSTT = async () => {
        //setSearchValue(results[results.length-1]?.transcript)
        stopSpeechToText()
        if (results[results.length-1]?.transcript) nav(`/search=${results[results.length-1]?.transcript}`)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (searchValue.length >= 1) nav((`/search=${searchValue}`))
    }

    return <div className="navbar w-full h-[55px] flex items-center justify-evenly">
        <div className="arrows hidden lg:flex items-center text-white gap-4">
            <AiOutlineLeft className="text-2xl" />
            <AiOutlineRight className="text-2xl" />
        </div>
        <form onSubmit={handleSubmit} className="relative flex items-center justify-center search">
            <div className="absolute right-0 flex p-4 gap-1">
                <FaMicrophone onClick={isRecording ? handleStopSTT : startSpeechToText} className={`${isRecording ? "text-red-500" : "text-white"} cursor-pointer`} />
                <FaSearch onClick={handleSubmit} className="cursor-pointer text-white" />
            </div>
            <input onChange={({ target }) => setSearchValue(target.value)} type="text" placeholder={error ? "Không hỗ trợ tìm kiếm bằng giọng nói" : "Tìm kiếm"} className="text-white bg-gray-700 w-[350px] h-[35px] px-4 pr-14 rounded-lg" />
        </form>
        <div className="tab hidden lg:flex items-center gap-2">
            <div className="tab-item bg-slate-500 rounded-full w-[45px] h-[45px]"></div>
            <div className="tab-item bg-slate-500 rounded-full w-[45px] h-[45px]"></div>
            <div className="tab-item bg-slate-500 rounded-full w-[45px] h-[45px]"></div>
            <div className="tab-item bg-slate-500 rounded-full w-[45px] h-[45px]"></div>
        </div>
    </div>
}