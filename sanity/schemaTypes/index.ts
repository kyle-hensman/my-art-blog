import { type SchemaTypeDefinition } from 'sanity'

import { heroType } from './heroType'
import { aboutType } from './aboutType'
import { galleryItemType } from './galleryItemType'
import { postType } from './postType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, aboutType, galleryItemType, postType],
}
