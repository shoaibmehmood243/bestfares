import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/blog/Sidebar";
import { Calendar, ChevronRight, User } from "lucide-react";

// Updated query to also fetch recent posts for Sidebar
const PAGE_DATA_QUERY = `{
  "post": *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    mainImage,
    body,
    publishedAt,
    excerpt,
    "categories": categories[]
  },
  "recentPosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...5] {
    _id,
    title,
    slug
  }
}`;

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const { post, recentPosts } = await client.fetch(PAGE_DATA_QUERY, { slug });

  if (!post) {
    return (
      <div className="pt-60 text-center min-h-screen bg-slate-50 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Post not found.</h1>
        <Link href="/blog" className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:shadow-xl transition-all inline-block">
          Return to Blog
        </Link>
      </div>
    );
  }

  const publishDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    : "Recently Published";

  return (
    <div className="bg-white min-h-screen pt-5 md:pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10">

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 xl:gap-20">
          {/* Main Article (75%) */}
          <article className="lg:col-span-4">
            <header className="mb-10 animate-fadeIn">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-800 leading-[1.2] mb-4">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm md:text-base border-t border-b border-gray-100 py-6 mb-10">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} className="text-primary/70" />
                  <span className="font-semibold uppercase tracking-widest">{publishDate}</span>
                </div>
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((cat, i) => (
                      <span key={i} className="bg-primary/5 text-primary px-4 py-1.5 rounded-full font-bold text-xs border border-primary/10">
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </header>

            {/* Feature Image */}
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl shadow-blue-900/5 group">
              {post.mainImage ? (
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                  <p className="text-gray-300 font-bold text-3xl">Best Fares</p>
                </div>
              )}
            </div>

            {/* Rich Text Content */}
            <div className="prose prose-lg md:prose-xl prose-blue max-w-none prose-headings:font-bold prose-headings:text-gray-800 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-medium prose-img:rounded-3xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-p:mb-2 prose-headings:mt-5 prose-headings:mb-5 prose-li:mb-4 prose-blockquote:my-5 prose-img:my-5">
              <PortableText value={post.body} />
            </div>

            {/* End of post navigation */}
            <div className="mt-20 flex justify-center">
              <Link href="/blog" className="group flex items-center gap-4 bg-gray-50 hover:bg-primary px-10 py-5 rounded-2xl text-gray-800 hover:text-white font-black transition-all shadow-sm hover:shadow-2xl active:scale-95">
                <span className="group-hover:-translate-x-2 transition-transform duration-300">&larr;</span>
                EXPLORE MORE STORIES
              </Link>
            </div>
          </article>

          {/* Sidebar (25% Sticky) */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="sticky top-40">
              <Sidebar recentPosts={recentPosts} />
            </div>
          </div>

          {/* Mobile Sidebar (Not sticky, just follows) */}
          <div className="lg:hidden mt-20 block">
            <Sidebar recentPosts={recentPosts} />
          </div>
        </div>
      </div>
    </div>
  );
}
