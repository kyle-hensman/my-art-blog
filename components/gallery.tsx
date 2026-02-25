'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface GalleryItem {
  id: number
  title: string
  category: string
  description: string
  image: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Red Cliffs Sunset",
    category: "Landscape",
    description: "Oil on canvas capturing the dramatic evening light over PEI's iconic red cliffs",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop",
  },
  {
    id: 2,
    title: "Island Dreams",
    category: "Abstract",
    description: "Mixed media exploration of island consciousness and natural rhythms",
    image: "https://images.unsplash.com/photo-1578321272176-d58e2d44f8a9?w=500&h=500&fit=crop",
  },
  {
    id: 3,
    title: "Dune Grasses",
    category: "Nature Study",
    description: "Watercolor and ink capturing the delicate textures of coastal vegetation",
    image: "https://images.unsplash.com/photo-1578821870619-69d3e631a387?w=500&h=500&fit=crop",
  },
  {
    id: 4,
    title: "Autumn Harbor",
    category: "Seascape",
    description: "Acrylic painting of fishing boats at golden hour reflection",
    image: "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=500&fit=crop",
  },
  {
    id: 5,
    title: "Northern Lights",
    category: "Celestial",
    description: "Ethereal representation of dancing aurora over pristine waters",
    image: "https://images.unsplash.com/photo-1549887534-7eefe4e3d8ba?w=500&h=500&fit=crop",
  },
  {
    id: 6,
    title: "Sand & Stone",
    category: "Texture",
    description: "Sculptural approach to coastal elements and geological formations",
    image: "https://images.unsplash.com/photo-1549887534-f81b80e8e0fb?w=500&h=500&fit=crop",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 dark:text-amber-50 mb-4">
            Featured Gallery
          </h2>
          <p className="text-lg text-amber-900/70 dark:text-amber-100/70 max-w-2xl mx-auto">
            A curated collection of recent works celebrating the landscapes and spirit of Prince Edward Island
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
              <div className="relative overflow-hidden bg-gradient-to-br from-amber-200 to-orange-200 h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-100">
                    {item.category}
                  </span>
                </div>
                <CardDescription className="text-base">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
