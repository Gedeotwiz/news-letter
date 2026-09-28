// import Stories from "../assets/stories.json";
// import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
// import { FaRegCommentAlt } from "react-icons/fa";
// import { FiDownload } from "react-icons/fi";

// function CardStory({ selectedCategory }) {
//   const filteredStories = selectedCategory === "All"
//     ? Stories.data
//     : Stories.data.filter((story) => story.category === selectedCategory)

//   if (filteredStories.length === 0) {
//     return (
//       <p className="col-span-full py-12 text-center text-gray-600">
//         No stories in this category yet.
//       </p>
//     )
//   }

//   return (
//     <div className="grid w-full grid-cols-1 gap-5 pt-6 sm:grid-cols-2 lg:grid-cols-3">
//       {filteredStories.map((story) => (
//         <article
//           key={story.title}
//           className="group flex h-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
//         >
//           <div className="relative overflow-hidden bg-gray-100">
//             <img
//               src={story.image}
//               alt={story.title}
//               className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
//             />
//             <span className="absolute left-3 top-3 rounded-sm bg-white/95 px-2.5 py-1 text-xs font-semibold text-blue-900 shadow-sm">
//               {story.category}
//             </span>
//           </div>
//           <div className="flex flex-1 flex-col p-4">
//             <h2 className="mb-2 text-lg font-bold leading-snug text-gray-900">
//               {story.title}
//             </h2>
//             <p className="text-sm leading-relaxed text-gray-600">
//               {story.description}
//             </p>
//             <ul className="mt-auto flex items-center gap-4 border-t border-gray-100 pt-4 text-sm text-gray-600" aria-label="Story activity">
//               <li className="flex items-center gap-1.5" title="Likes">
//                 <AiOutlineLike aria-hidden="true" />
//                 <span>23</span>
//               </li>
//               <li className="flex items-center gap-1.5" title="Dislikes">
//                 <AiOutlineDislike aria-hidden="true" />
//                 <span>3</span>
//               </li>
//               <li className="flex items-center gap-1.5" title="Comments">
//                 <FaRegCommentAlt aria-hidden="true" />
//                 <span>1k</span>
//               </li>
//               <li className="ml-auto" title="Download">
//                 <a
//                   href={story.image}
//                   download
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label={`Download image for ${story.title}`}
//                   className="inline-flex rounded p-1 hover:bg-gray-100 hover:text-blue-900"
//                 >
//                   <FiDownload aria-hidden="true" />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </article>
//       ))}
//     </div>
//   )
// }

// export default CardStory;


export default function CategoryCard({ story }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="p-3">
        <p className={`text-xs font-bold ${story.category === 'TECHNOLOGY'? 'text-blue-900' : story.category === 'RELIGION'? 'text-purple-800' : 'text-blue-800'}`}>
          {story.category} • {story.readTime}
        </p>
        <img src={story.image} alt="" className="w-full h-[130px] object-cover rounded-lg mt-2" />
        <h3 className="font-bold text-sm mt-3 leading-snug">{story.title}</h3>
        <p className="text-xs text-gray-600 mt-1 line-clamp-2">{story.excerpt}</p>
        <p className="text-[11px] text-gray-500 mt-2">{story.time}</p>
      </div>
    </div>
  )
}