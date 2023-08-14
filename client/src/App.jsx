import "./App.css";
import Album from "./components/Album/Album";
import Budgeting from "./components/Budgeting/Budgeting";
import CardOrder from "./components/CardOrder/CardOrder";
import ConstructionTender from "./components/ConstructionTender/ConstructionTender";
import Test from "./components/Home/Test";
import Layout from "./components/Layout/Layout";
import PopUp from "./components/PopUp/PopUp";
import { Services } from "./components/Services/Services";
import SliderV2 from "./components/SliderV2/SliderV2";
import AboutUsPage from "./pages/AboutUsPage";
import CatalogPage from "./pages/CatalogPage";
import HomePage from "./pages/HomePage";
import PricePage from "./pages/PricePage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/catalog">
            <Route index element={<CatalogPage />} />
            <Route path=":id" element={<CardOrder />} />
          </Route>
          <Route path="/price" element={<PricePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pop-up" element={<PopUp />} />
          <Route path="/test" element={<Test />} />
          <Route path="/slide" element={<SliderV2 />} />
          <Route path="/construction" element={<ConstructionTender />} />
          <Route path="/budgeting" element={<Budgeting />} />
          <Route path="/album" element={<Album />} />
          <Route
            path="/sxema.png"
            element={
              <img className="png" src="./public/sxema.png" alt="sxema" />
            }
          />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
