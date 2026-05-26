export const metadata = {
  title: 'Zero2Work',
  description: 'Get hired. Past the bots. Into the right hands.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
