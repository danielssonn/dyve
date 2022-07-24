import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Dashboard, DashboardLenderClosed, DashboardLenderOpen, DashboardBorrowerOpen, DashboardBorrowerClosed, Collections, CollectionGoblintown, Landing, Market, Gallery, MyNfts, Nft, NftNewListing, NftDashboard, NftDashboardReturn} from "./pages";
import { TopBar, SideBar } from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TransactionProvider } from "./context/TransactionContext";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <TransactionProvider>
      <React.StrictMode>
        <TopBar />
        <Routes>
          <Route path="/" element={<Market />} />
          <Route path="landing" element={<Landing />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/lender/closed" element={<DashboardLenderClosed />} />
          <Route path="dashboard/lender/open" element={<DashboardLenderOpen />} />
          <Route path="dashboard/:collection/:id" element={<NftDashboard />} />
          <Route path="dashboard/borrower/closed" element={<DashboardBorrowerClosed />} />
          <Route path="dashboard/borrower/open" element={<DashboardBorrowerOpen />} />
          <Route path="dashboard/:collection/:id/return" element={<NftDashboardReturn />} />
          <Route path="mynfts" element={<MyNfts />} />
          <Route path="mynfts/:collection/:id" element={<NftNewListing />} />
          <Route path="collections" element={<Collections />} />
          <Route path="/:collection" element={<Gallery />} />
          <Route path="goblintown" element={<CollectionGoblintown />} />
          <Route path="/:collection/:id" element={<Nft />} />
        </Routes>
      </React.StrictMode>
    </TransactionProvider>
  </BrowserRouter>,
  rootElement
);
