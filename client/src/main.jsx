import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Dashboard, Collections, Landing, Market, Gallery, MyNfts, Nft} from "./pages";
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
          <Route path="dashboard/:collection/:id" element={<Nft />} />
          <Route path="mynfts" element={<MyNfts />} />
          <Route path="mynfts/:collection/:id" element={<Nft />} />
          <Route path="collections" element={<Collections />} />
          <Route path="/:collection" element={<Gallery />} />
          <Route path="/:collection/:id" element={<Nft />} />
        </Routes>
      </React.StrictMode>
    </TransactionProvider>
  </BrowserRouter>,
  rootElement
);
