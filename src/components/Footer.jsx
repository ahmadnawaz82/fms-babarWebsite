const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-purple-500 mb-3">GameZone</h1>
          <p className="text-sm">
            Your ultimate destination for gaming battles, updates, and community events.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">About</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Games</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <ul className="flex space-x-4 text-xl">
            <li><a href="#" className="hover:text-purple-400 transition"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#" className="hover:text-purple-400 transition"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#" className="hover:text-purple-400 transition"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#" className="hover:text-purple-400 transition"><i className="fab fa-discord"></i></a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Subscribe</h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm bg-gray-800 text-white border border-gray-600 rounded"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm py-2 rounded transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} GameZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
