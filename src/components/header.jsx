import logo from "../assets/logo.png";
import {
  FaHome,
  FaLaptopCode,
  FaBible,
  FaFlag,
  FaSeedling,
  FaChartLine,
} from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import { MdSportsBasketball } from "react-icons/md";
import { useState } from "react";
import LoginForm from "./loginForm";
import SubscribeModal from "./subscribeModal";
import Button from "./button";


function Header({ selectedCategory, onCategoryChange }) {
  const toDay = new Date()
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false)
  const items = [
    { label: "All", icon: <FaHome /> },
    { label: "Technology", icon: <FaLaptopCode /> },
    { label: "Religion", icon: <FaBible /> },
    { label: "Politics", icon: <FaFlag /> },
    { label: "Environment", icon: <FaSeedling /> },
    { label: "Business", icon: <FaChartLine /> },
    { label: "Entertainment", icon: <FaMusic /> },
    { label: "Sports", icon: <MdSportsBasketball /> },
  ]

  return (
    <>


      <div className="py-5 sm:px-5 md:px-20 flex bg-white  justify-between items-center border-b-2 border-gray">
        <div className="flex items-center">
          <img className="w-20 h-14" src={logo} alt="" />
          <div>
            <h1 className="text-blue-900 font-bold sm:text-[12px]">THE DAILY BRIEF</h1>
            <p className="text-gray-400 text-[15px]">{toDay.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })}</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <Button name="Log In" action={() => setIsLoginOpen(true)} border="border border-blue-900" textColor="text-blue-900" />
          <Button name="Subscribe" action={() => setIsSubscribeOpen(true)} background="bg-blue-900" textColor="text-white" />
        </div>


      </div>

      <nav className="overflow-x-auto border-b border-gray-200 bg-white px-6 py-3 sm:px-12 lg:px-24" aria-label="Story categories">
        <div className="flex flex-wrap sm:grid md:grid-cols-8 gap-2 sm:gap-4 md:gap-8 lg:gap-16">
          {items.map((item) => {
            return (
              <button
                key={item.label}
                type="button"
                aria-pressed={selectedCategory === item.label}
                onClick={() => onCategoryChange(item.label)}
                className={`flex items-center gap-2 border-b-2 px-1 py-3 text-sm font-medium transition-colors ${selectedCategory === item.label
                    ? "border-blue-900 text-blue-900"
                    : "border-transparent text-gray-700 hover:border-gray-300 hover:text-blue-900"
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>

      {isLoginOpen && <LoginForm isClosed={() => setIsLoginOpen(false)} />}
      {isSubscribeOpen && <SubscribeModal isClosed={() => setIsSubscribeOpen(false)} />}


    </>
  )

}
export default Header

