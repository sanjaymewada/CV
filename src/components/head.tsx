import { type Metadata } from 'next'

export function Head({ metadata }: { metadata: Metadata }) {
  const title = metadata.title?.toString() ?? 'Portfolio'
  const description = metadata.description?.toString() ?? 'A personal portfolio website'
  const siteUrl = 'https://cv.notharshhaa.site'
  const ogImage = `${siteUrl}/opengraph-image.png`

  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Basic Meta */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Emanuel Peire" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Harshhaa Vardhan Reddy" />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@emapeire" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta property="twitter:image:width" content="1200" />
      <meta property="twitter:image:height" content="630" />
      <meta property="twitter:image:alt" content="Emanuel Peire" />
      <meta property="twitter:image:type" content="image/png" />

      {/* Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Browser Theme */}
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
    </head>
  )
}
