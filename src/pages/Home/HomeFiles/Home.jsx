import Banner from '../HomeComponents/Banner'
import Brands from '../HomeComponents/Brands'
import CustomerReviews from '../HomeComponents/CustomerReviews'
import HowItWorks from '../HomeComponents/HowItWorks'
import OurServices from '../HomeComponents/OurServices'

const reviewsPromise = fetch('/CustomerReviews.json').then((res) => res.json())

function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#ffe9ec,#e8f3ff,#f4fff0,#fff6e5)] backdrop-blur-xl bg-opacity-60">
      <div className="backdrop-blur-2xl bg-white/20">
        <Banner></Banner>
        <HowItWorks></HowItWorks>
        <OurServices></OurServices>
        <Brands></Brands>
        <CustomerReviews reviewsPromise={reviewsPromise}></CustomerReviews>
      </div>
    </div>
  )
}

export default Home
