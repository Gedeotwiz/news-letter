import { Bookmark, Share2 } from 'lucide-react'

export default function TopStory({ story }) {
  return (
    <div className="bg-white rounded-xl p-4">
      <p className="text-[#0A4DA1] font-bold text-sm mb-3">• TOP STORY</p>
      <div className="flex flex-col md:flex-row gap-6">
        <img src={story.image} alt="" className="w-full md:w-[320px] h-[180px] object-cover rounded-lg" />
        <div className="flex-1">
          <p className="text-xs font-semibold text-gray-600">{story.category} • {story.readTime}</p>
          <h1 className="text-xl md:text-2xl font-bold mt-2 leading-tight">{story.title}</h1>
          <p className="text-gray-600 text-sm mt-2">{story.excerpt}</p>
          <div className="flex justify-between items-center mt-3">
            <p className="text-xs text-gray-500">By {story.author} • {story.time}</p>
            <div className="flex gap-2">
              <Bookmark size={16} className="cursor-pointer" />
              <Share2 size={16} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}