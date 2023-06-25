import Advantages from "../Advantages/Advantages";
import Awards from "../Awards/Awards";
import Couponbox from "../CouponBox/Couponbox";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Globalpresence from "../GlobalPresence/Globalpresence";
import Navbar from "../Navbar/Navbar";
import Numbers from "../Numbers/Numbers";
import SearchBus from "../SearchBus/Searchbus";
import Topservies from "../TopServices/Topservies";

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBus/>
      <Couponbox/>
      <Features/>
      <Advantages/>
      <Awards/>
      <Globalpresence/>
      <Numbers/>
      <Topservies/>
      <Footer/>
    </div>
  );
}

export default Home;
