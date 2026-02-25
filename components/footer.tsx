export default function Footer() {
  return (
    <footer className="bg-amber-950 dark:bg-slate-950 text-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Artist Studio</h3>
            <p className="text-amber-100 text-sm leading-relaxed">
              Celebrating the natural beauty and vibrant spirit of Prince Edward Island through contemporary art.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#gallery" className="text-amber-100 hover:text-amber-50 transition-colors">Gallery</a></li>
              <li><a href="#about" className="text-amber-100 hover:text-amber-50 transition-colors">About</a></li>
              <li><a href="#contact" className="text-amber-100 hover:text-amber-50 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Social</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-amber-100 hover:text-amber-50 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-amber-100 hover:text-amber-50 transition-colors">Facebook</a></li>
              <li><a href="#" className="text-amber-100 hover:text-amber-50 transition-colors">Pinterest</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-amber-100 text-sm mb-3">Get updates on new works and exhibitions</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded bg-amber-900 text-amber-50 placeholder:text-amber-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>
        
        <div className="border-t border-amber-800 pt-8 text-center text-amber-100 text-sm">
          <p>&copy; 2024 Artist Studio. All rights reserved. | Proudly based in Prince Edward Island</p>
        </div>
      </div>
    </footer>
  )
}
