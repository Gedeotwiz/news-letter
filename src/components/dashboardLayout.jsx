import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";

export function DashboardLayout() {

        return (
            <div className="min-h-screen bg-slate-50 md:flex">
                <Sidebar/>
                <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-10">
                    <Outlet/>
                </main>
            </div>
        )
}