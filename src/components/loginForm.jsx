import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


function LoginForm({ isClosed }) {
    const [loading, setLoading] = useState(false);

    const handleSubmit =  (event) => {
        event.preventDefault();

        if (loading) return;

        setLoading(true);
        setTimeout(()=>{
            toast.success("Login successful!", {
            position: "top-right",
            autoClose: 3000,
            theme: "light",
        });
        setLoading(false);
        },3000)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <ToastContainer />
            <div
                className="w-full max-w-md rounded-md bg-white p-6 shadow-xl sm:p-10"
                role="dialog"
                aria-modal="true"
                aria-labelledby="login-title"
            >
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={isClosed}
                        aria-label="Close login form"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <IoIosClose size={30} />
                    </button>
                </div>
                <h1 id="login-title" className="my-5 text-center text-3xl font-bold">Login</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="login-email" className="mb-1 block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="login-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800"
                        />
                    </div>
                    <div>
                        <label htmlFor="login-password" className="mb-1 block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="login-password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded bg-blue-900 px-4 py-2 font-medium text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "Loading..." : "Log In"}
                    </button>
                </form>

                <p className="mt-3 text-center text-sm text-gray-700">
                    Don&apos;t have an account?{" "}
                    <Link className="font-medium text-blue-800 hover:underline" to="/register">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default LoginForm