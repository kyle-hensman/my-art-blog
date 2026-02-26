'use client'

/**
 * Render the themed hero section showcasing Prince Edward Island artwork and primary calls to action.
 *
 * @returns The JSX element containing the hero section with decorative background elements, a badge, headline, descriptive text, and two call-to-action links ("View Gallery" and "Get in Touch").
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-24 md:py-32">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-block">
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-amber-300 bg-amber-50 text-amber-900 text-sm font-medium dark:border-amber-400 dark:bg-amber-900/20 dark:text-amber-100">
            🎨 Celebrating PEI Art & Culture
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-amber-950 dark:text-amber-50 mb-6 leading-tight">
          Artistry in Motion
        </h1>
        
        <p className="text-xl md:text-2xl text-amber-900/70 dark:text-amber-100/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover vibrant paintings that capture the essence of Prince Edward Island's natural beauty and artistic spirit
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#gallery" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl">
            View Gallery
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-amber-400 text-amber-900 font-semibold hover:bg-amber-50 transition-colors dark:border-amber-500 dark:text-amber-100 dark:hover:bg-amber-900/20">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
