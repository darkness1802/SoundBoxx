import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Request, { SEARCH, STREAM } from "../api"
import Navbar from "../component/Navbar"
import Sidebar from "../component/Sidebar"

/** @type { page } descript: { None } */
export default function Search({queue, setQueue, setCurrentPlaying}) {
    const { keyword } = useParams()
    const [source, setSource] = useState([])
    const [loading, setLoading] = useState(false)
    console.log(keyword)

    useEffect(() => {
        const getCategoryData = async () => {
            setLoading(true)
            try {
                let { data } = await Request.Post(SEARCH, { keyword: String(keyword), quantity: 30 })
                setSource(data)
                setLoading(false)
            } catch (err) {
                console.log("Error 22")
                setSource([])
                setLoading(false)
            }
        }; getCategoryData()
    }, [keyword])

    const play = async (source) => {
        try {
            let { data } = await Request.Get(STREAM + `?id=${source.videoId}`)
            //$currentPlaying(data.)
            // nếu chưa có phần tử trong hàng đợi thì phát và thêm
            setCurrentPlaying({
                id: source.videoId,
                image: source.image,
                author: source.author.name,
                src: data,
                title: source.title
            })

            setQueue(prev => [...prev, {id: source.videoId,
                image: source.image,
                author: source.author.name,
                src: data,
                title: source.title}])
            
        } catch (err) {

        }
    }

    return <div className="page flex flex-col lg:flex-row">
        <Sidebar />
        <main className="w-full bg-gray-900 h-[100vh]">
            <Navbar />

            <div className="h-[80vh] overflow-y-scroll scrollbar scrollbar-thumb-gray-900 grid grid-cols-2 lg:grid-cols-4 gap-4 p-8">
                {loading && <div className="loading">
                    <img src="/images/loading2.svg " className="" alt="" />
                </div>}
                {source && source.map((item, index) => <Search.Item key={index} data={item} play={play}/>)}
            </div>
        </main>
    </div>
}

Search.Item = function __Item__({ data, play }) {
    return <div onClick={() => play(data)}
        className={`cursor-pointer hover:scale-105 duration-300 rounded-lg w-full h-[180px]`}>
        <img src={data.image} className="bg-center rounded-lg h-full w-full" alt="" />
    </div>
}