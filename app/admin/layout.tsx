import Footer from "../components/footer"
import Sidebar from "../components/sideBar"
import Navbar from "../components/navBar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="md:container md:mx-auto">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full flex justify-center mt-4">
          {children}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <Footer />
      </div>

    </div>
  )
}