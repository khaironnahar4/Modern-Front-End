import Footer from "./Sections/Footer"
import Hero from "./Sections/Hero"
import Integration from "./Sections/Integration"
import Introduction from "./Sections/Introduction"
import Navbar from "./Sections/Navbar"


function App() {
  return (
    <div className="max-w-7xl lg:mx-auto mx-4">
      {/* navbar */}
      <div className="flex justify-center items-center">
      <Navbar />
      </div>
      {/* hero section */}
      <div className="z-0">
      <Hero />
      </div>

      {/* instruction section */}
      <Introduction />

      {/* project showcase */}

      {/* feature section */}

      {/* testimonial */}

      {/* integration section */}
      <Integration />

      {/* footer */}
      <Footer />

    </div>
  )
}

export default App