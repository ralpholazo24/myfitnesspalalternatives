import Link from 'next/link';
import { latestBlogs, tools, socials } from '../data/footer';

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-auto bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pt-8 border-t border-[var(--border-color)]">
          {/* Latest Blogs Section */}
          <div>
            <h3 className="text-lg font-mono font-bold text-[var(--foreground)] mb-4">Latest Blogs</h3>
            <ul className="space-y-3">
              {latestBlogs.map((blog) => (
                <li key={blog.url}>
                  <Link 
                    href={blog.url}
                    className="text-[var(--foreground)] opacity-80 hover:text-[var(--accent)] transition-colors block"
                  >
                    <span className="block text-sm font-mono">{blog.title}</span>
                    <span className="text-xs opacity-60">{new Date(blog.date).toLocaleDateString()}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Section */}
          <div>
            <h3 className="text-lg font-mono font-bold text-[var(--foreground)] mb-4">Tools</h3>
            <ul className="space-y-3">
              {tools.map((tool) => (
                <li key={tool.url}>
                  <Link 
                    href={tool.url}
                    className="text-[var(--foreground)] opacity-80 hover:text-[var(--accent)] transition-colors block"
                  >
                    <span className="block text-sm font-mono">{tool.name}</span>
                    <span className="text-xs opacity-60">{tool.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-lg font-mono font-bold text-[var(--foreground)] mb-4">Connect</h3>
            <ul className="space-y-3">
              {socials.map((social) => (
                <li key={social.url}>
                  <Link 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--foreground)] opacity-80 hover:text-[var(--accent)] transition-colors flex items-center gap-2"
                  >
                    <span className="text-lg">{social.icon}</span>
                    <span className="text-sm font-mono">{social.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col items-center justify-center space-y-2 pt-8 border-t border-[var(--border-color)]">
          <p className="text-sm text-[var(--foreground)] opacity-80 font-mono">
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