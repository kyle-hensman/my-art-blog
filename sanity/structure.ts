import type { StructureBuilder } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Post')
        .id('post')
        .child(
          S.documentTypeList('post').title('Posts')
        ),
      S.listItem()
        .title('Gallery Item')
        .id('galleryItem')
        .child(
          S.documentTypeList('galleryItem').title('Gallery Items')
        ),
      S.listItem()
        .title('Hero')
        .id('hero')
        .child(
          S.document()
            .schemaType('hero')
            .documentId('hero')
        ),
      S.listItem()
        .title('About')
        .id('about')
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')
        ),
    ])