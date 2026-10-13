import { ArrowRight, ArrowUpRight, Clock3, Newspaper, Star, Tags } from "lucide-react"
import { Link } from "react-router-dom"
import newsData from "../assets/news.json"

export function Dashboard() {
    const featuredStory = newsData.find((story) => story.featured)
    const recentStories = newsData.filter((story) => !story.featured).slice(0, 3)
    const categoryCount = new Set(newsData.map((story) => story.category)).size

    const stats = [
        { label: "Total stories", value: newsData.length, icon: Newspaper },
        { label: "Featured stories", value: newsData.filter((story) => story.featured).length, icon: Star },
        { label: "Categories", value: categoryCount, icon: Tags },
    ]

    return (
        <div className="mx-auto w-full max-w-6xl space-y-8">
            <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <p className="text-sm font-semibold text-indigo-600">OVERVIEW</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
                    <p className="mt-2 text-sm text-slate-500">Your newsroom at a glance.</p>
                </div>
                <Link
                    to="/admin/products"
                    className="inline-flex w-fit items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                >
                    Manage stories
                    <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
            </header>

            <section aria-label="Story statistics" className="grid gap-4 sm:grid-cols-3">
                {stats.map(({ label, value, icon: Icon }) => (
                    <article key={label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <Icon size={20} aria-hidden="true" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">{label}</p>
                            <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
                        </div>
                    </article>
                ))}
            </section>

            {featuredStory && (
                <section aria-labelledby="featured-heading">
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Editor&apos;s pick</p>
                            <h2 id="featured-heading" className="mt-1 text-xl font-bold text-slate-900">Featured story</h2>
                        </div>
                    </div>
                    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:flex">
                        <img
                            src={featuredStory.image}
                            alt=""
                            className="h-56 w-full object-cover md:h-auto md:w-2/5"
                        />
                        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-indigo-600">
                                <span>{featuredStory.category}</span>
                                <span className="text-slate-300" aria-hidden="true">•</span>
                                <span className="inline-flex items-center gap-1 text-slate-500">
                                    <Clock3 size={13} aria-hidden="true" />
                                    {featuredStory.readTime}
                                </span>
                            </div>
                            <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
                                {featuredStory.title}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-slate-600">{featuredStory.excerpt}</p>
                            <p className="mt-5 text-xs text-slate-500">
                                By {featuredStory.author} <span aria-hidden="true">·</span> {featuredStory.time}
                            </p>
                        </div>
                    </article>
                </section>
            )}

            <section aria-labelledby="recent-heading">
                <div className="mb-4 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Your newsroom</p>
                        <h2 id="recent-heading" className="mt-1 text-xl font-bold text-slate-900">Recent stories</h2>
                    </div>
                    <Link
                        to="/admin/products"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                        View all <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    {recentStories.map((story, index) => (
                        <article
                            key={story.id}
                            className={`flex items-center gap-4 p-4 sm:p-5 ${index > 0 ? "border-t border-slate-100" : ""}`}
                        >
                            <img src={story.image} alt="" className="h-16 w-20 shrink-0 rounded-lg object-cover sm:h-20 sm:w-28" />
                            <div className="min-w-0 flex-1">
                                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{story.category}</p>
                                <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-5 text-slate-900 sm:text-base">
                                    {story.title}
                                </h3>
                                <p className="mt-1 text-xs text-slate-500">{story.time}</p>
                            </div>
                            <ArrowUpRight className="hidden shrink-0 text-slate-400 sm:block" size={18} aria-hidden="true" />
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}
