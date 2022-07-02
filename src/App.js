import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import BookPreview from "./pages/BookPreview";
import LoginPage from "./pages/LoginPage";
import Profil from "./pages/Profil";
import Recommended from "./pages/Recommended";
import SellerOverviview from "./pages/SellerOverview";
import UserOverviview from "./pages/UserOverview";
import { ModalsContextProvider } from "./store/Modals";
import { UsersContextProvider } from "./store/Users";

function App() {
  return (
    <div>
      <UsersContextProvider>
        <ModalsContextProvider>
          <Navbar />
          <Routes>
            <Route exact path="" element={<LoginPage />} />
            <Route exact path="/userOverview" element={<UserOverviview />} />
            <Route
              exact
              path="/sellerOverview"
              element={<SellerOverviview />}
            />
            <Route exact path="preporuke" element={<Recommended />} />
            <Route exact path="/userOverview/:id" element={<BookPreview />} />
            <Route exact path="/profil" element={<Profil />} />
          </Routes>
        </ModalsContextProvider>
      </UsersContextProvider>
    </div>
  );
}

export default App;
