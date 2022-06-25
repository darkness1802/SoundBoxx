import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Request, { SEARCH } from "../api"
import Sidebar from "../component/Sidebar"
import Navbar from "../component/Navbar"

/** @type { page } descript: { None } */
export default function Category() {

    const { category } = useParams()
    const [source, setSource] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getCategoryData = async () => {
            setLoading(true)
            try {
                let { data } = await Request.Post(SEARCH, { keyword: category, quantity: 50 })
                setSource(data)
                setLoading(false)
            } catch(err) {
                setSource([])
            }
        }; getCategoryData()
    }, [category])

    return <div className="page">
        <Sidebar />
        <main className="w-full bg-gray-900 h-[100vh]">
            <Navbar />

            <div className="h-[80vh] overflow-y-scroll scrollbar scrollbar-thumb-gray-900 grid grid-cols-2 lg:grid-cols-4 gap-4 p-8">
                {loading && <div className="loading">
                    <img src="/images/loading2.svg " className="" alt="" />
                </div>}
                {source && source.map((item, index) => <div key={index}
                    className={`hover:scale-105 duration-300 rounded-lg w-full h-[180px]`}>
                    <img src={item.thumbnail} className="bg-center rounded-lg h-full w-full" alt="" />
                </div>)}
            </div>
        </main>
    </div>
}