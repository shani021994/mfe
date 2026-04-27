import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StylesProvider } from '@material-ui/core/styles';

import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

export default () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </StylesProvider>
  );
};