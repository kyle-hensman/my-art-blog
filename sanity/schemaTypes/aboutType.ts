import {defineType, defineField} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About Artist Content',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Artist Name',
      type: 'string',
    }),
    defineField({
      name: 'details',
      title: 'Details Text',
      type: 'string',
    }),
    defineField({
      name: 'yearsExperience',
      title: 'Years of Experience',
      type: 'number',
    }),
    defineField({
      name: 'artworksCreated',
      title: 'Number of Artworks Created',
      type: 'number',
    }),
    defineField({
      name: 'exhibitions',
      title: 'Number of Exhibitions',
      type: 'number',
    }),
    defineField({
      name: 'happyCollectors',
      title: 'Number of Happy Collectors',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Artist Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'artistStatement',
      title: 'Artist Statement',
      type: 'string',
    }),
    defineField({
      name: 'mediums',
      title: 'Art Mediums',
      type: 'array',
      of: [
        { type: 'string' }
      ]
    })
  ],
})