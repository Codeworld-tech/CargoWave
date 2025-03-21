import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import Info from '../src/components/info'
import Banner from '../src/components/Banner'
import Cards from '../src/components/Cards'
import Back from '../src/components/Back'
import Brands from '../src/components/Brands'
import Footer from '../src/components/Footer'
import './App.css'

function App() {
  
  return (
    <>
     <Navbar/>
     <Hero/>
     <Info image ="https://static.vecteezy.com/system/resources/thumbnails/038/363/072/small_2x/ai-generated-side-view-of-commercial-airplane-isolated-on-transparent-background-passenger-plane-generative-ai-png.png"/>
     <Info direction ={true} image ="https://parspng.com/wp-content/uploads/2023/04/truckpng.parspng.com-7.png"/>
     <Info image="https://www.pngplay.com/wp-content/uploads/15/Container-Ship-Transparent-File.png"/>
     <Banner/>
     <div className='flex justify-center gap-10 flex-wrap'>
     <Cards image ="https://img.freepik.com/premium-photo/large-royal-cruise-liner-way-travel-spa-services_378481-587.jpg?uid=R178072155&ga=GA1.1.859484745.1727363618&semt=ais_keywords_boost"/>
     <Cards image ="https://img.freepik.com/premium-vector/airplane-travel-around-world_42053-404.jpg?uid=R178072155&ga=GA1.1.859484745.1727363618&semt=ais_keywords_boost"/>
     <Cards image="https://img.freepik.com/premium-photo/aidriven-selfdriving-truck-navigating-scenic-highways_1220676-58170.jpg?uid=R178072155&ga=GA1.1.859484745.1727363618&semt=ais_keywords_boost"/>
     </div>
     <Back/> 
     <Brands/>
     <Footer/>
    </>
  )
}

export default App
