'use client'

import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import Image from "next/image"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Button } from "./ui/button"

interface GalleryItem {
  id: string
  title: string
  category: string
  description: string
  image: string | any
}

const query = `*[_type == "galleryItem"]{
  id,
  title,
  category,
  description,
  slug,
  publishedAt,
  image{
    asset->{
      url
    }
  }
}`

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
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    /**
     * Fetches gallery items from the Sanity backend and stores them in component state.
     *
     * Normalizes each item's `image` field to a URL string (empty string if missing) before updating `galleryItems`; any fetch error is logged to the console.
     */
    async function fetchGalleryItems() {
      try {
        const data = await client.fetch<GalleryItem[]>(query);
        const itemsWithUrls = data.map((item) => ({
          ...item,
          image: item.image?.asset?.url || '',
        }));
        setGalleryItems(itemsWithUrls);
      } catch (error) {
        console.error("Error fetching gallery items:", error);
      }
    }

    fetchGalleryItems().then(() => setLoading(false));
  }, [])

  /**
   * Selects the gallery item at the given index and opens the viewer modal.
   *
   * @param index - Zero-based index of the gallery item to activate
   */
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
          {loading ? (
            <>
              <Card
                role="button"
                tabIndex={0}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group hover:cursor-pointer"
              >
                <div className="relative overflow-hidden h-64">
                  <div className="w-[500px] h-[500px] bg-gray-300 animate-pulse" />
                </div>

                <CardHeader>
                  <div className="w-full h-4 bg-gray-300 animate-pulse mb-2" />
                  <div className="w-full h-4 bg-gray-300 animate-pulse mb-2" />
                  <div className="w-full h-4 bg-gray-300 animate-pulse" />
                </CardHeader>
              </Card>
              <Card
                role="button"
                tabIndex={0}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group hover:cursor-pointer"
              >
                <div className="relative overflow-hidden h-64">
                  <div className="w-[500px] h-[500px] bg-gray-300 animate-pulse" />
                </div>

                <CardHeader>
                  <div className="w-full h-4 bg-gray-300 animate-pulse mb-2" />
                  <div className="w-full h-4 bg-gray-300 animate-pulse mb-2" />
                  <div className="w-full h-4 bg-gray-300 animate-pulse" />
                </CardHeader>
              </Card>
              <Card
                role="button"
                tabIndex={0}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group hover:cursor-pointer"
              >
                <div className="relative overflow-hidden h-64">
                  <div className="w-[500px] h-[500px] bg-gray-300 animate-pulse" />
                </div>

                <CardHeader>
                  <div className="w-full h-4 bg-gray-300 animate-pulse mb-2" />
                  <div className="w-full h-4 bg-gray-300 animate-pulse mb-2" />
                  <div className="w-full h-4 bg-gray-300 animate-pulse" />
                </CardHeader>
              </Card>
            </>
          ) : galleryItems.map((item, index) => (
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
                  src={item.image as string}
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
                  src={activeItem.image as string}
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
