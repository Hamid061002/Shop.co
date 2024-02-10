import Banner from "../../components/banner/Banner"
import Header from "../../components/header/Header"
import NewArrivals from "../../components/new arrivals/NewArrivals"

function Home() {
   return (
      <div>
         <div className="pb-[134px]">
            <Header />
         </div>
         <Banner />
         <NewArrivals />
      </div>
   )
}

export default Home