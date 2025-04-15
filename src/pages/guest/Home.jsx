import "two-up-element";
import MenuGuest from "../../components/menu/MenuGuest";
import History from "./History";
import "./Home.css";
import OurServices from "./OurServices";
import WhoWeAre from "./WhoWeAre";

function Home() {
  return (
    <>
      <MenuGuest />
      <main>
        <section id="seccionNumeroUno">
          <div>
            <h1>QUICK WASH</h1>
          </div>
        </section>

        <WhoWeAre />
        <OurServices />
        <History />

        <section id="seccionNumeroCinco">
          <div>
            <h2 className="text-4xl text-white font-medium">Contáctanos</h2>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
