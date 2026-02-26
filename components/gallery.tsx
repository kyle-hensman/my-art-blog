'use client'

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { useState } from "react"

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
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
  },
  {
    id: 2,
    title: "Island Dreams",
    category: "Abstract",
    description: "Mixed media exploration of island consciousness and natural rhythms",
    image: "https://images.unsplash.com/photo-1578321272176-d58e2d44f8a9",
  },
  {
    id: 3,
    title: "Dune Grasses",
    category: "Nature Study",
    description: "Watercolor and ink capturing the delicate textures of coastal vegetation",
    image: "https://images.unsplash.com/photo-1578821870619-69d3e631a387",
  },
  {
    id: 4,
    title: "Autumn Harbor",
    category: "Seascape",
    description: "Acrylic painting of fishing boats at golden hour reflection",
    image: "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb",
  },
  {
    id: 5,
    title: "Northern Lights",
    category: "Celestial",
    description: "Ethereal representation of dancing aurora over pristine waters",
    image: "https://images.unsplash.com/photo-1549887534-7eefe4e3d8ba",
  },
  {
    id: 6,
    title: "Sand & Stone",
    category: "Texture",
    description: "Sculptural approach to coastal elements and geological formations",
    image: "https://images.unsplash.com/photo-1549887534-f81b80e8e0fb",
  },
]

/**
 * Renders a featured gallery section with a responsive grid of cards and a modal viewer.
 *
 * Displays gallery items as clickable cards; clicking a card opens a dialog that shows the selected item's image and details and provides controls to navigate through items cyclically.
 *
 * @returns The gallery React element containing the cards grid and a modal dialog for viewing and navigating items.
 */
export default function Gallery() {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  function openItem(index: number) {
    setActiveIndex(index)
    setOpen(true)
  }

  function previousItem() {
    if (activeIndex === null) return
    setActiveIndex((activeIndex - 1) % galleryItems.length)
  }

  function nextItem() {
    if (activeIndex === null) return
    setActiveIndex((activeIndex + 1) % galleryItems.length)
  }

  const activeItem =
    activeIndex !== null ? galleryItems[activeIndex] : null

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 dark:text-amber-50 mb-4">
            Featured Gallery
          </h2>
          <p className="text-lg text-amber-900/70 dark:text-amber-100/70 max-w-2xl mx-auto">
            A curated collection of recent works celebrating the landscapes and spirit of Prince Edward Island
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => openItem(index)}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group hover:cursor-pointer"
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  openItem(index)
                }
              }}
            >
              <div className="relative overflow-hidden h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  width={500}
                  height={500}
                />
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-100">
                    {item.category}
                  </span>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* ONE Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          {activeItem && (
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{activeItem.title}</DialogTitle>
                <DialogDescription>
                  {activeItem.description}
                </DialogDescription>
              </DialogHeader>

              <div className="relative h-96 w-full overflow-hidden rounded-xl">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <DialogFooter>
                <div className="flex justify-between w-full">
                  <Button variant={'secondary'} onClick={previousItem} disabled={activeIndex == 0}>
                    Previous ←
                  </Button>
                  <Button onClick={nextItem}>
                    Next →
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>

      </div>
    </section>
  )
}
