'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-amber-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 dark:text-amber-50 mb-4">
            About the Artist
          </h2>
          <p className="text-lg text-amber-900/70 dark:text-amber-100/70">
            A journey through color, canvas, and island inspiration
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Artist Image */}
          <div className="md:col-span-2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                alt="Artist at Work"
                className="w-full h-full object-cover"
                height={500}
                width={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
            </div>
          </div>

          {/* Artist Bio */}
          <div className="md:col-span-3">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-amber-950 dark:text-amber-50 mb-3">
                  Capturing Island Soul
                </h3>
                <p className="text-amber-900/80 dark:text-amber-100/80 leading-relaxed mb-4">
                  Based in beautiful Prince Edward Island, I'm a contemporary artist dedicated to capturing the raw beauty and vibrant energy of coastal landscapes and the natural world.
                </p>
                <p className="text-amber-900/80 dark:text-amber-100/80 leading-relaxed">
                  My work combines traditional painting techniques with modern artistic expression, exploring themes of nature, light, and the profound connection between humans and their environment.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-amber-100 text-amber-900 text-sm font-semibold dark:bg-amber-900/30 dark:text-amber-100">
                  Oil & Acrylic
                </span>
                <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-900 text-sm font-semibold dark:bg-orange-900/30 dark:text-orange-100">
                  Watercolor
                </span>
                <span className="px-4 py-2 rounded-full bg-red-100 text-red-900 text-sm font-semibold dark:bg-red-900/30 dark:text-red-100">
                  Mixed Media
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { number: "15+", label: "Years Experience" },
            { number: "200+", label: "Artworks Created" },
            { number: "50+", label: "Exhibitions" },
            { number: "1000+", label: "Happy Collectors" },
          ].map((stat, i) => (
            <Card key={i} className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-amber-900/70 dark:text-amber-100/70">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Artist Statement */}
        <Card className="bg-orange-50/50 dark:bg-orange-900/10 border-amber-300 dark:border-orange-800">
          <CardHeader>
            <CardTitle>Artist Statement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-amber-900/80 dark:text-amber-100/80 leading-relaxed italic">
              "Art is my conversation with the world. Through color, texture, and form, I explore the delicate balance between chaos and harmony that exists in nature. Prince Edward Island, with its ever-changing light and dramatic coastlines, continues to be my greatest teacher and inspiration."
            </p>
            <p className="text-amber-900/80 dark:text-amber-100/80 leading-relaxed italic">
              "I believe that art has the power to transform spaces, evoke emotions, and connect us to something greater than ourselves. Every piece I create is an invitation to pause, reflect, and see the world through fresh eyes."
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
