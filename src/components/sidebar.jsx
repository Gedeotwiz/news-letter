import { NavLink } from "react-router-dom"
import { LayoutDashboard, Package, ShoppingBag, UserRound, Settings } from "lucide-react"


 export function Sidebar(){

    const menuItems=[
        {icon:LayoutDashboard,title:"Dashboard",path:"/admin/dashboard",end:true},
        {icon:Package,title:"Orders",path:"/admin/orders"},
        {icon:ShoppingBag,title:"Products",path:"/admin/products"},
        {icon:UserRound,title:"Profile",path:"/admin/profile"},
        {icon:Settings,title:"Settings",path:"/admin/settings"}
    ]
    return(
        <aside className="border-b border-slate-200 bg-white px-4 py-4 md:min-h-screen md:w-64 md:shrink-0 md:border-b-0 md:border-r md:px-5 md:py-7">
            <div className="mb-5 flex items-center gap-3 px-2 md:mb-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
                    NL
                </div>
                <div>
                    <p className="font-bold text-slate-900">Newsletter</p>
                    <p className="text-xs text-slate-500">Admin workspace</p>
                </div>
            </div>
            <p className="mb-2 hidden px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 md:block">
                Workspace
            </p>
            <nav aria-label="Admin navigation">
                <ul className="grid grid-cols-2 gap-1 md:grid-cols-1">
                  {menuItems.map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        end={item.end}
                        className={({isActive})=>`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                            isActive
                                ? "bg-indigo-50 text-indigo-700"
                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <item.icon size={18} aria-hidden="true" />
                        <span>{item.title}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
            </nav>
        </aside>
    )
 }