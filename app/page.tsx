import Hero from "@/components/hero"
import Gallery from "@/components/gallery"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

/**
 * Renders the application's main page by composing the primary site sections.
 *
 * The component returns a root <main> element containing the Hero, Gallery, About, Contact, and Footer components in that order.
 *
 * @returns The root <main> JSX element containing the composed page sections.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
