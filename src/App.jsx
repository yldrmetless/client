import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FfeServices from "./pages/FffeServices";
import Blog from "./pages/Blog";
import Hospitality from "./pages/Hospitality";
import Office from "./pages/Office";
import FurnitureProduct from "./pages/FurnitureProduct";
import ExteriorFacade from "./pages/ExteriorFacade";
import Residental from "./pages/Residental";
import Menderes from "./post/residental/Menderes";
import Kartal from "./post/residental/Kartal";
import Mesa from "./post/residental/Mesa";
import SahilevleriIzm from "./post/residental/SahilevleriIzm";
import Sg from "./post/residental/Sg";
import Sasali from "./post/residental/Sasali";
import Kekliktepe from "./post/residental/Kekliktepe";
import FolkartIncity from "./post/residental/FolkartIncity";
import Bulgaria from "./post/residental/Bulgaria";
import Antalya from "./post/residental/Antalya";
import Cesme from "./post/residental/Cesme";
import Mikonos from "./post/residental/Mikonos";
import Vega from "./post/residental/Vega";
import MeneskoyA from "./post/residental/MeneskoyA";
import MeneskoyB from "./post/residental/MeneskoyB";
import LebiDerya from "./post/residental/LebiDerya";
import Maintal from "./post/hospitality/Maintal";
import Balikci from "./post/hospitality/Balikci";
import France from "./post/hospitality/France";
import Eruz from "./post/hospitality/Eruz";
import Mana from "./post/hospitality/Mana";
import Cuzdan from "./post/office/Cuzdan";
import Iron from "./post/office/Iron";
import Izka from "./post/office/Izka";
import Aidios from "./post/furniture/Aidios";
import Blade from "./post/furniture/Blade";
import Clavis from "./post/furniture/Clavis";
import ConceptHotel from "./post/ffe/ConceptHotel";
import Konsept from "./post/ffe/Konsept";
import Moodbard from "./post/ffe/Moodbard";
import Austin from "./post/exterior/Austin";

export default function App() {
  return (
    <div className="max-w-full w-full">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/residental" element={<Residental />} />
          <Route path="/projects/hospitality" element={<Hospitality />} />
          <Route path="/projects/ffe-services" element={<FfeServices />} />
          <Route path="/projects/office" element={<Office />} />
          <Route
            path="/projects/furnitureproduct"
            element={<FurnitureProduct />}
          />
          <Route path="/projects/exteriorfacade" element={<ExteriorFacade />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/projects/residental/hd-private-house-menderes"
            element={<Menderes />}
          />
          <Route
            path="/projects/residental/luxury-bedroom-kartal-yuvasi-bodrum"
            element={<Kartal />}
          />
          <Route
            path="/projects/residental/mesa-bodrum-demirbuku"
            element={<Mesa />}
          />
          <Route
            path="/projects/residental/private-villa-sahilevleri-izmir"
            element={<SahilevleriIzm />}
          />
          <Route
            path="/projects/residental/sg-private-villa-istanbul"
            element={<Sg />}
          />
          <Route
            path="/projects/residental/to-private-villa-sasali-izmir"
            element={<Sasali />}
          />
          <Route
            path="/projects/residental/vadi-kekliktepe-urla-izmir"
            element={<Kekliktepe />}
          />
          <Route
            path="/projects/residental/individual-apartment-folkart-incity"
            element={<FolkartIncity />}
          />
          <Route
            path="/projects/residental/individual-house-bulgaria"
            element={<Bulgaria />}
          />
          <Route
            path="/projects/residental/individual-house-antalya"
            element={<Antalya />}
          />
          <Route
            path="/projects/residental/individual-house-cesme-izmir"
            element={<Cesme />}
          />
          <Route
            path="/projects/residental/individual-villa-mikonos-style"
            element={<Mikonos />}
          />
          <Route
            path="/projects/residental/living-room-folkart-vega-izmir"
            element={<Vega />}
          />
          <Route
            path="/projects/residental/private-villa-a-blok-meneskoy-izmir"
            element={<MeneskoyA />}
          />
          <Route
            path="/projects/residental/private-villa-b-blok-meneskoy-izmir"
            element={<MeneskoyB />}
          />
          <Route
            path="/projects/residental/private-villa-leb-i-derya-bodrum"
            element={<LebiDerya />}
          />

          <Route
            path="/projects/hospitality/arkadash-doner-restaurant-maintal-germany"
            element={<Maintal />}
          />
          <Route
            path="/projects/hospitality/balikci-hasan-alsancak-izmir"
            element={<Balikci />}
          />
          <Route
            path="/projects/hospitality/concept-restaurant-france"
            element={<France />}
          />
          <Route
            path="/projects/hospitality/eruz-lobby-urla"
            element={<Eruz />}
          />
          <Route
            path="/projects/hospitality/mana-restaurant-frankfurt-germany"
            element={<Mana />}
          />

          <Route
            path="/projects/office/cuzdan-atasehir-istanbul"
            element={<Cuzdan />}
          />
          <Route
            path="/projects/office/iron-and-steel-factory-aliaga-izmir"
            element={<Iron />}
          />
          <Route path="/projects/office/izka-office-izmir" element={<Izka />} />

          <Route
            path="/projects/furnitureproduct/aidios-table-console"
            element={<Aidios />}
          />
          <Route
            path="/projects/furnitureproduct/blade-console"
            element={<Blade />}
          />
          <Route
            path="/projects/furnitureproduct/clavis-tv-wall"
            element={<Clavis />}
          />

          <Route
            path="/projects/ffe-services/concept-hotel"
            element={<ConceptHotel />}
          />
          <Route
            path="/projects/ffe-services/konsept-ev"
            element={<Konsept />}
          />
          <Route
            path="/projects/ffe-services/moodbard"
            element={<Moodbard />}
          />

          <Route
            path="/projects/exteriorfacade/contemporary-villa-austin"
            element={<Austin />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
