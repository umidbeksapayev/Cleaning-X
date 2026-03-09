import Footer from "./components/footer/Footer"
import AboutPage from "./pages/AboutPage"
import Articles from "./pages/ArticlePage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import { ServicePage } from "./pages/ServicePage"

function App() {
  return (
    <>
      <section id="home">
        <HomePage />
      </section>

      <section id="about">
        <AboutPage />
      </section>

      <section id="service">
        <ServicePage />
      </section>

      <section id="article">
        <Articles />
      </section>

      <section id="contact">
        <ContactPage/>
      </section>
      <Footer/>
    </>
  )
}

export default App