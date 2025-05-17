import Link from 'next/link';
import { latestBlogs, tools, socials } from '../data/footer';

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--background)] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pt-12 border-t border-[var(--border-color)]">
          {/* Latest Blogs Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[var(--foreground)]">Latest Blogs</h3>
            <ul className="space-y-4">
              {latestBlogs.map((blog) => (
                <li key={blog.url}>
                  <Link 
                    href={blog.url}
                    className="text-[var(--foreground)] opacity-80 hover:text-[var(--accent)] transition-colors block"
                  >
                    <span className="block text-base">{blog.title}</span>
                    <span className="text-sm opacity-60">{new Date(blog.date).toLocaleDateString()}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[var(--foreground)]">Tools</h3>
            <ul className="space-y-4">
              {tools.map((tool) => (
                <li key={tool.url}>
                  <Link 
                    href={tool.url}
                    className="text-[var(--foreground)] opacity-80 hover:text-[var(--accent)] transition-colors block"
                  >
                    <span className="block text-base">{tool.name}</span>
                    <span className="text-sm opacity-60">{tool.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[var(--foreground)]">Connect</h3>
            <ul className="space-y-4">
              {socials.map((social) => (
                <li key={social.url}>
                  <Link 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--foreground)] opacity-80 hover:text-[var(--accent)] transition-colors flex items-center gap-3"
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="text-base">{social.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col items-center justify-center space-y-4 pt-12 border-t border-[var(--border-color)]">
          <p className="text-base text-[var(--foreground)] opacity-80">
            Made with ❤️ by{' '}
            <Link 
              href="https://ralpholazo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--accent-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              ralpholazo
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 