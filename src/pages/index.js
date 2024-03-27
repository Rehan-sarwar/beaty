import Hero from "@/components/views/Home/Hero";
import Navbar from "@/components/views/Home/Navbar";
import Reviews from "@/components/views/Home/Reviews";
import Services from "@/components/views/Home/Services";
import Now from  "@/components/views/Home/Now";
import Expert from "@/components/views/Home/Expert";
import Products from "@/components/views/Home/Products";
import  Treatment  from "@/components/views/Home/Treatment";
import FAQ from "@/components/views/Home/FAQ";
import Work from "@/components/views/Home/Work";
import Footer from "@/components/views/Home/Footer";
export default function Home() {
  return (
    <div>
     <Navbar />
      <Hero />
      <Reviews/>
      <Services/>
      <Now/>
      <Expert/>
      <Products/>
      <Treatment/> 
      <FAQ/>
      <Work/>
      <Footer/>
     
    </div>
  )
}
