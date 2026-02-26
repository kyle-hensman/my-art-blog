import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
    }),
  ],
})