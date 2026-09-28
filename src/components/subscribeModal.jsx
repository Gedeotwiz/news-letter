import { useState } from "react";
import { IoIosClose } from "react-icons/io";

function SubscribeModal({ isClosed }) {
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("Subscription is not connected yet.");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <section
                className="w-full max-w-md rounded-md bg-white p-6 shadow-xl sm:p-8"
                role="dialog"
                aria-modal="true"
                aria-labelledby="subscribe-title"
            >
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={isClosed}
                        aria-label="Close subscription form"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <IoIosClose size={30} />
                    </button>
                </div>
                <h2 id="subscribe-title" className="mb-2 text-2xl font-bold text-gray-900">
                    Subscribe to The Daily Brief
                </h2>
                <p className="mb-6 text-sm text-gray-600">
                    Get the latest stories delivered to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="subscribe-email" className="mb-1 block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            id="subscribe-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded bg-blue-900 px-4 py-2 font-medium text-white hover:bg-blue-800"
                    >
                        Subscribe
                    </button>
                    <p className="min-h-5 text-sm text-gray-600" role="status">
                        {message}
                    </p>
                </form>
            </section>
        </div>
    );
}

export default SubscribeModal;