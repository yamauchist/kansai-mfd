import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { ConcertHallPage } from "./pages/ConcertHallPage";
import { Contact } from "./pages/Contact";
import { ConcertHallDetail } from "./pages/ConcertHallDetail";
import { FacilityPage } from "./pages/FacilityPage";
import { FacilityDetail } from "./pages/FacilityDetail";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <div className="bg-gray-800">
          <header className="bg-gray-800 text-white p-4 flex items-center max-w-screen-lg mx-auto">
            <Link to="/">
              <h1 className="text-2xl font-bold text-white"> 関西音楽系施設データベース </h1>
            </Link>
            <Link className="ml-auto text-white hover:underline hover:text-gray-200" to="/concerthalls">
              コンサートホール一覧
            </Link>
            <Link className="ml-4 text-white hover:underline hover:text-gray-200" to="/facilities">
              練習場一覧
            </Link>
            <Link className="ml-4 text-white hover:underline hover:text-gray-200" to="/contact">
              お問い合わせ
            </Link>
          </header>
        </div>
      </div>

      <div className="flex flex-1 h-full min-h-0">
        <div className=" max-w-screen-lg mx-auto">
          <Outlet />
        </div>
      </div>
      <div className="bg-gray-800">
        <div className=" max-w-screen-lg mx-auto">
          <footer className="bg-gray-800 text-white p-4 flex items-center">© Kansai Music Facilities Database Project</footer>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="concerthalls">
            <Route index element={<ConcertHallPage />} />
            <Route path="detail/:id" element={<ConcertHallDetail />} />
          </Route>
          <Route path="facilities">
            <Route index element={<FacilityPage />} />
            <Route path="detail/:id" element={<FacilityDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
