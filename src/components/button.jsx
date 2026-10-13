import { ClipLoader } from "react-spinners";


function Button({ isLoading = false, name, action, background = "", textColor = "", border = "", type = "button" }) {
    const className = [
        "hidden sm:inline-flex sm:text-[12px] md:text-sm items-center justify-center rounded-sm px-5 py-2 font-bold disabled:cursor-not-allowed disabled:opacity-60",
        background,
        textColor,
        border,
    ].filter(Boolean).join(" ");

    return (
        <button
            type={type}
            className={className}
            onClick={action}
            disabled={isLoading}
            aria-busy={isLoading}
        >
            {isLoading ? (
                <ClipLoader color="#ffffff" loading={isLoading} size={18} aria-label="Loading" />
            ) : name}
        </button>

    )
}
export default Button