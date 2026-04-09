import { Search } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ recentPosts = [] }) {
  return (
    <aside className="space-y-12">
      {/* Search Widget */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
           <span className="w-8 h-1 bg-primary rounded-full"></span>
           Search
        </h3>
        <div className="relative group">
          <input
            type="text"
            placeholder="Search stories..."
            className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
          <button className="absolute right-2 top-2 p-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all shadow-lg active:scale-95">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4 mb-8">
            <div className="flex-grow h-px bg-gray-200"></div>
            <h3 className="text-sm font-black text-primary tracking-widest uppercase shrink-0">Recent Posts</h3>
            <div className="flex-grow h-px bg-gray-200"></div>
        </div>
        <div className="space-y-6">
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`} className="group block">
                <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h4>
                <div className="w-0 group-hover:w-12 h-1 bg-primary/30 mt-2 transition-all duration-500"></div>
              </Link>
            ))
          ) : (
            <p className="text-gray-400 italic">No recent updates.</p>
          )}
        </div>
      </div>

      {/* Ad/CTA Widget */}
      <div className="relative rounded-[2.5rem] overflow-hidden bg-primary p-10 text-white shadow-2xl group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
        <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 leading-tight">Plan Your Next Journey</h3>
            <p className="text-blue-100 mb-8 opacity-80">Get personalized flight and hotel deals delivered to your WhatsApp.</p>
            <a href="https://wa.me/923111421111" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-primary px-8 py-4 rounded-2xl font-black shadow-xl hover:shadow-white/10 transition-all active:scale-95">
                Chat with Agent
            </a>
        </div>
      </div>
    </aside>
  );
}
