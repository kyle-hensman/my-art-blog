import {defineType, defineField} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Content',
  type: 'document',

  fields: [
    defineField({
      name: 'heading',
      title: 'Heading Text',
      type: 'string',
    }),

    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'string',
    }),

    defineField({
      name: 'badgeText',
      title: 'Badge Text',
      type: 'string',
    }),

    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})