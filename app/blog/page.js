import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, User } from "lucide-react";
import Sidebar from "@/components/blog/Sidebar";

const PAGE_DATA_QUERY = `{
  "posts": *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    "categories": categories[]
  },
  "recentPosts": *[_type == "post"] | order(publishedAt desc)[0...5] {
    _id,
    title,
    slug
  }
}`;

export default async function BlogPage() {
  const { posts, recentPosts } = await client.fetch(PAGE_DATA_QUERY);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[60vh] py-12 md:py-20 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/tours.jpg"
          alt="Blog Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-0"></div>
        <div className="relative z-10 text-center px-4 mt-20 md:mt-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Travel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Journal</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-lg">
            Inspiring stories, expert tips, and unforgettable experiences to fuel your wanderlust.
          </p>
        </div>
      </section>


      <div className="py-5 md:py-10 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 xl:gap-20">
            {/* Main Blog List (4/6) */}
            <div className="lg:col-span-4 space-y-16">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <article key={post._id} className="group">
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
                      {/* Left: Image Container */}
                      <Link href={`/blog/${post.slug.current}`} className="w-full md:w-2/5 shrink-0 overflow-hidden rounded-[2.5rem] transition-all duration-500">
                        <div className="relative aspect-[4/3] md:aspect-square">
                          {post.mainImage ? (
                            <Image
                              src={urlFor(post.mainImage).url()}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                            />
                          ) : (
                            <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                              <p className="text-primary/20 font-black text-2xl uppercase tracking-tighter">BestFares</p>
                            </div>
                          )}
                        </div>
                      </Link>

                      {/* Right: Content Container */}
                      <div className="flex-grow pt-2">
                        {/* Category */}
                        {post.categories && post.categories.length > 0 && (
                          <div className="flex flex-wrap gap-4 mb-4">
                            {post.categories.map((cat, i) => (
                              <span key={i} className="text-sm font-black underline text-primary uppercase tracking-[0.2em] hover:text-blue-600 transition-colors cursor-pointer">
                                {cat}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Title */}
                        <Link href={`/blog/${post.slug.current}`}>
                          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors leading-[1.25]">
                            {post.title}
                          </h2>
                        </Link>

                        {/* Meta */}
                        <div className="flex items-center gap-6 text-xs text-gray-400 mb-3 font-semibold uppercase tracking-widest">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={12} className="text-primary/50" />
                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Recently"}
                          </div>
                        </div>

                        {/* Excerpt */}
                        <p className="text-gray-500 text-lg line-clamp-3 mb-8 leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                          {post.excerpt}
                        </p>

                        <Link href={`/blog/${post.slug.current}`} className="inline-flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest border-b-2 border-primary/10 hover:border-primary pb-1 transition-all">
                          READ THE FULL STORY &rarr;
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center py-32 bg-gray-50 rounded-[4rem] border-2 border-dashed border-gray-200">
                  <p className="text-gray-400 font-bold text-2xl">Searching for new stories...</p>
                  <Link href="/" className="mt-8 inline-block text-primary font-black underline underline-offset-8">Return to Dashboard</Link>
                </div>
              )}
            </div>

            {/* Sidebar (2/6 Sticky) */}
            <div className="lg:col-span-2 space-y-12">
              <div className="sticky top-40">
                <Sidebar recentPosts={recentPosts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
