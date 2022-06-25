import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import AudioPlayer from "./component/AudioPlayer"
import Home from "./pages/Home.page"
import User from "./pages/User.page"
import Test from "./pages/Test.page"
import Search from "./pages/Search.page"
import Category from "./pages/Category.page"

function App() {

  const [queue, setQueue] = useState([])
  const [currentPlaying, setCurrentPlaying] = useState({})

  return <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/test" element={<Test />} />
        <Route path="/search=:keyword" element={<Search queue={queue} setQueue={setQueue} setCurrentPlaying={setCurrentPlaying}/>} />
        <Route path="/category=:category" element={<Category />} />
      </Routes>
      <AudioPlayer currentPlaying={currentPlaying} queue={queue} setQueue={setQueue} setCurrentPlaying={setCurrentPlaying} />
    </div>
  </BrowserRouter>
}

export default App;
