import "two-up-element";


// import MenuGuest from "../../components/menu/MenuGuest";



import History from "./History";

import LoginAdmin from "../../components/auth/LoginAdmin";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import OurServices from "./OurServices";
import WhoWeAre from "./WhoWeAre";

function Home() {
  return (
    <>
      
      <main>
        <section id="seccionNumeroUno">
          <div>
            <h1>QUICK WASH</h1>
          </div>
        </section>

        <WhoWeAre />
        <OurServices />
        <History />
        <LoginAdmin />

        <section id="seccionNumeroCinco">
          <div>
            <h2 className="text-4xl text-white font-medium">Contáctanos</h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
