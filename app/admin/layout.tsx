import Aside from "../components/aside"
import Nav from "../components/nav"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Nav />
      <div className="flex">
        <Aside />
        <div className="w-full">
          {children}
        </div>
      </div>

    </div>
  )
}