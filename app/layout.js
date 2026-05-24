import "./globals.css"

export const metadata = {
  title: "balxzzy | digital architect",
  description: "balzz (iqbal), juga dikenal sebagai balxzzy sh atau balxz. seorang pemula yang fokus pada pengembangan web, scraping, web api, ai, bot whatsapp, bot telegram, serta framework react, next, vite, dan astro. terus belajar dan berkembang di dunia teknologi sejak 2023",
  themeColor: '#fff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}