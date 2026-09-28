import { useState } from "react"

function Register() {
    const [message, setMessage] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setMessage("Registration is not connected yet.")
    }

    return (
        <main className="min-h-[70vh] bg-gray-100 px-4 py-10 sm:py-14">
            <section className="mx-auto w-full max-w-lg rounded-md border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h1 className="mb-2 text-2xl font-bold text-gray-900">Create your account</h1>
                <p className="mb-6 text-sm text-gray-600">Enter your details to get started.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="full-name" className="mb-1 block text-sm font-medium text-gray-700">
                            Full name
                        </label>
                        <input
                            id="full-name"
                            name="fullName"
                            type="text"
                            autoComplete="name"
                            required
                            className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800"
                        />
                    </div>
                    <div>
                        <label htmlFor="register-email" className="mb-1 block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="register-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800"
                        />
                    </div>
                    <div>
                        <label htmlFor="register-phone" className="mb-1 block text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <input
                            id="register-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            required
                            className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800"
                        />
                    </div>
                    <div>
                        <label htmlFor="register-password" className="mb-1 block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="register-password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            minLength={8}
                            required
                            className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800"
                        />
                        <p className="mt-1 text-xs text-gray-500">Use at least 8 characters.</p>
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded bg-blue-900 px-4 py-2.5 font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
                    >
                        Create account
                    </button>
                    <p className="min-h-5 text-center text-sm text-gray-600" role="status">
                        {message}
                    </p>
                </form>
            </section>
        </main>
    )
}

export default Register