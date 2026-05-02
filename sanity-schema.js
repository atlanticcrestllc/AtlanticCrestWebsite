/**
 * Atlantic Crest LLC — Sanity CMS Schema
 *
 * SETUP INSTRUCTIONS
 * ──────────────────
 * 1. In your Sanity project, copy this file into schemaTypes/atlanticCrest.js
 * 2. Open schemaTypes/index.js and add the four types exported below:
 *
 *      import { galleryPhoto, gallery, venuePartner, experiencePage } from './atlanticCrest'
 *      export const schemaTypes = [galleryPhoto, gallery, venuePartner, experiencePage]
 *
 * 3. Install the Sanity image URL builder in this React project:
 *      npm install @sanity/image-url @sanity/client
 *
 * GROQ QUERIES (use these in the React frontend to fetch content)
 * ───────────────────────────────────────────────────────────────
 * Gallery page + Home teaser:
 *   *[_type == "gallery"][0] { photos[] { label, category, image } }
 *
 * Venues & Partners (Experience page):
 *   *[_type == "experiencePage"][0] { partners[] { name, logo } }
 *
 * SINGLETON NOTE
 * ──────────────
 * "gallery" and "experiencePage" are intended as single documents (one of each).
 * To enforce this in Sanity Studio v3, add the following to your sanity.config.js:
 *
 *   import { structureTool } from 'sanity/structure'
 *
 *   plugins: [
 *     structureTool({
 *       structure: (S) =>
 *         S.list().title('Content').items([
 *           S.documentTypeListItem('gallery').title('Gallery'),
 *           S.documentTypeListItem('experiencePage').title('Experience Page'),
 *         ]),
 *     }),
 *   ],
 *   document: {
 *     newDocumentOptions: (prev, { creationContext }) => {
 *       if (['gallery', 'experiencePage'].includes(creationContext.schemaType)) return []
 *       return prev
 *     },
 *     actions: (prev, { schemaType }) => {
 *       if (['gallery', 'experiencePage'].includes(schemaType))
 *         return prev.filter(({ action }) => action !== 'duplicate')
 *       return prev
 *     },
 *   },
 */

import { defineType, defineField, defineArrayMember } from 'sanity'

// ─── Object: a single gallery photo ────────────────────────────────────────
// Used as items inside the gallery document's photos array.
// The frontend generates full-size and thumbnail URLs from the same image
// asset using @sanity/image-url — no separate thumb upload needed.

export const galleryPhoto = defineType({
  name: 'galleryPhoto',
  title: 'Gallery Photo',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      description: 'Short display name shown on hover (e.g. "Live Performance", "Wedding Reception")',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      description: 'Used by the gallery filter tabs',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'DJ & Events',            value: 'DJ & Events' },
          { title: 'Venues',                 value: 'Venues' },
          { title: 'Marketing & Promotions', value: 'Marketing & Promotions' },
          { title: 'International',          value: 'International' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'category', media: 'image' },
  },
})

// ─── Document: Gallery (singleton) ─────────────────────────────────────────
// Holds the master ordered list of all gallery photos.
// • Gallery page   → uses all photos, filtered by category
// • Home page      → uses the first 6 photos as the teaser grid

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'photos',
      title: 'Photos',
      description:
        'Add, reorder, and remove photos here. The Gallery page shows all of them with category filtering. The Home page teaser shows the first 6.',
      type: 'array',
      of: [defineArrayMember({ type: 'galleryPhoto' })],
      options: { layout: 'grid' },
    }),
  ],
  preview: {
    select: { media: 'photos.0.image' },
    prepare() {
      return { title: 'Gallery' }
    },
  },
})

// ─── Object: a single venue or partner ─────────────────────────────────────
// Used as items inside the experiencePage document's partners array.
// Upload a logo (preferably PNG with transparent background or SVG exported
// as PNG). The frontend renders it at max-height 40px with opacity effects.

export const venuePartner = defineType({
  name: 'venuePartner',
  title: 'Venue / Partner',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: 'Venue or brand name (used as the image alt text)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      description: 'Recommended: PNG with transparent background, at least 300px wide',
      type: 'image',
      options: { hotspot: false },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
})

// ─── Document: Experience Page (singleton) ──────────────────────────────────
// Holds the Venues & Partners grid on the /experience page.

export const experiencePage = defineType({
  name: 'experiencePage',
  title: 'Experience Page',
  type: 'document',
  fields: [
    defineField({
      name: 'partners',
      title: 'Venues & Partners',
      description: 'Add, reorder, and remove venue and brand partner logos.',
      type: 'array',
      of: [defineArrayMember({ type: 'venuePartner' })],
      options: { layout: 'grid' },
    }),
  ],
  preview: {
    select: { media: 'partners.0.logo' },
    prepare() {
      return { title: 'Experience Page' }
    },
  },
})
