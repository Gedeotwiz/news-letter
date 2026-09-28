import CardStory from "../components/cardStory"
import TopStory from "../components/topStory"
import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import CategoryCard from "../components/cardStory"
import newsData from '../assets/news.json'


function Home () {
    const { selectedCategory } = useOutletContext()
    
    useEffect(()=>{
      setTimeout(()=>{
         document.title = "Hello"
      },1000)
    },[])

    const top = newsData.find(n => n.featured)
  const others = newsData.filter(n =>!n.featured)


    return (
        <div className="bg-gray-300 pt-5">

        <div className="max-w-6xl mx-auto p-4">
        {top && <TopStory story={top} />}

        <h2 className="font-bold mt-8 mb-4">More Top Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {others.map(s => <CategoryCard key={s.id} story={s} />)}
        </div>

        
      </div>
        </div>
    )
}
export default Home