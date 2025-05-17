import Link from 'next/link';
import { latestBlogs, tools, socials } from '../data/footer';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'twitter':
        return <FaTwitter className="h-5 w-5" aria-hidden="true" />;
      case 'github':
        return <FaGithub className="h-5 w-5" aria-hidden="true" />;
      case 'linkedin':
        return <FaLinkedin className="h-5 w-5" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full bg-[var(--background)] py-8 md:py-16">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-12 pt-8 md:pt-12 border-t border-[var(--border-color)]">
          {/* Latest Blogs Section */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)]">Latest Blogs</h3>
            <ul className="space-y-3 md:space-y-4">
              {latestBlogs.map((blog) => (
                <li key={blog.url}>
                  <Link 
                    href={blog.url}
                    target='_blank'
                    className="text-[var(--foreground)] opacity-80 hover:text-[var(--accent)] transition-colors block"
                  >
                    <span className="block text-sm md:text-base">{blog.title}</span>
                    <span className="text-xs md:text-sm opacity-60">{new Date(blog.date).toLocaleDateString()}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Section */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)]">Tools</h3>
            <ul className="space-y-3 md:space-y-4">
              {tools.map((tool) => (
                <li key={tool.url}>
                  <Link 
                    href={tool.url}
                    target='_blank'
                    className="text-[var(--foreground)] opacity-80 hover:text-[var(--accent)] transition-colors block"
                  >
                    <span className="block text-sm md:text-base">{tool.name}</span>
                    <span className="text-xs md:text-sm opacity-60">{tool.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)]">Connect</h3>
            <ul className="flex flex-wrap gap-4 md:gap-6">
              {socials.map((social) => (
                <li key={social.url}>
                  <Link 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--foreground)] opacity-80 hover:text-[var(--accent)] transition-colors flex items-center gap-2 p-2 md:p-3 rounded-full hover:bg-[var(--card-background)]"
                    aria-label={social.name}
                  >
                    {getSocialIcon(social.icon)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col items-center justify-center space-y-4 pt-8 md:pt-12 border-t border-[var(--border-color)]">
          <p className="text-sm md:text-base text-[var(--foreground)] opacity-80 text-center">
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