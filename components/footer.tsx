'use client'

import { socials } from "@/config/socials";
import { Button } from "./ui/button";

export default function Footer() {
  function handleNewsletter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert("Thank you for subscribing to our newsletter!");
  }

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
              {socials.map((social) => (
                <li key={social.name}>
                  <a href={social.href} target="_blank" className="text-amber-100 hover:text-amber-50 transition-colors">
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-amber-100 text-sm mb-3">Get updates on new works and exhibitions</p>
            <form className="flex" onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded bg-amber-900 text-amber-50 placeholder:text-amber-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <Button type="submit" className="ml-2" size="sm">
                Submit
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-amber-800 pt-8 text-center text-amber-100 text-sm">
          <p>&copy; {new Date().getFullYear()} Artist Studio. All rights reserved. | Proudly based in Prince Edward Island</p>
        </div>

        <div className="p-4 text-center text-amber-200 text-xs">
          <p>Website Developed by <a href="https://kylehensman.com" target="_blank" className="hover:text-amber-50 transition-colors">Kyle Hensman</a></p>
        </div>
      </div>
    </footer>
  )
}
