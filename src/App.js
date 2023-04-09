import Advantages from "./Components/Advantages/Advantages";
import Awards from "./Components/Awards/Awards";
import Couponbox from "./Components/CouponBox/Couponbox";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Globalpresence from "./Components/GlobalPresence/Globalpresence";
import Navbar from "./Components/Navbar/Navbar";
import Numbers from "./Components/Numbers/Numbers";
import Searchbus from "./Components/SearchBus/Searchbus";
import Topservies from "./Components/TopServices/Topservies";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbus/>
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

export default App;
