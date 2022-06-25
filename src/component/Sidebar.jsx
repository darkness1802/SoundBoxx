import { BiNews } from "react-icons/bi"
import { Link } from "react-router-dom"
import { FiRadio, FiUser, FiMusic } from "react-icons/fi"
import { GiChemicalDrop } from "react-icons/gi"
import { MdOutlineExplore, MdAutoStories, MdOutlineStackedLineChart, MdSubscriptions } from "react-icons/md"

/** @type { comps } descript: { none } */
export default function Sidebar(){
    return <div className="lg:top-0 w-full lg:w-[230px] h-[60px] lg:h-[100vh] bg-gray-800 p-3 lg:p-6">
        <div className="logo hidden lg:flex my-2 items-center ml-3 gap-2 text-white">
            <FiRadio className="text-2xl font-bold"/>
            <Link to="/" className="text-2xl font-bold text-white">SoundBox</Link>
        </div>

        <ul className="menu my-2 flex flex-row lg:flex-col justify-center">
            <Sidebar.Item icon={<FiUser className="text-2xl"/>} text={"Cá nhân"} />
            <Sidebar.Item icon={<MdOutlineExplore className="text-2xl"/>} text={"Thử nghiệm"} path={"/"}/>
            
            <Link to="/" className="lg:hidden text-2xl text-white font-bold px-6">Soundbox</Link>

            <Sidebar.Item icon={<MdOutlineStackedLineChart className="text-2xl"/>} text={"Xếp hạng"} />
            <Sidebar.Item icon={<MdSubscriptions className="text-2xl"/>} text={"Theo dõi"} />
        </ul>

        <ul className="menu my-6 hidden lg:flex lg:flex-col ">
            <Sidebar.Item icon={<BiNews className="text-2xl"/>} text={"Tin tức"} />
            <Sidebar.Item icon={<FiMusic className="text-2xl"/>} text={"Âm nhạc"} />
            <Sidebar.Item icon={<MdAutoStories className="text-2xl"/>} text={"Truyện đọc"} />
            <Sidebar.Item icon={<GiChemicalDrop className="text-2xl"/>} text={"Khoa học"} />
        </ul>
    </div>
}

Sidebar.Item = function _Item_({ icon, text, path }) {
    return <li>
        <a href={path || "/"} className="flex items-center p-2 text-base rounded-lg dark:text-white hover:bg-red-200 dark:hover:bg-red-700">
            {icon}
            <span className="hidden lg:flex flex-1 ml-3 whitespace-nowrap">{text}</span>
        </a>
    </li>
}