export const metadata = {
  title: 'Admin Dashboard | Jalallpur High School (H.S)',
  description: 'Sanity Powered Admin Dashboard for Jalalpur High school (H.S)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
