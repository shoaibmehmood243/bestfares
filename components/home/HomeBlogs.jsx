import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

export default async function HomeBlogs() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt
  }`);

  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Our <span className="text-primary italic">Travel Insights</span> & Blogs
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our blog for latest travel tips, visa updates, and destination guides
              with Ali Baba Travel Advisor, your trusted travel agency in Lahore.
            </p>
          </div>
          <Link
            href="/blog"
            className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 shrink-0"
          >
            MORE BLOGS
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group flex flex-col h-full bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100/50 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 font-bold">BestFares</span>
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                  {post.title}
                </h3>

                <div className="mt-auto flex items-center gap-4 text-sm text-gray-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
