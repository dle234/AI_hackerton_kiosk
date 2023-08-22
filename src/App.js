import React, { useState, useEffect, useRef } from "react";
import Camera from "./page/camera";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SelectPack from "./page/SelectPack";
import routes from "./routes";
import Produce1 from "./page/Produce1";
import "./index.css";
import Produce2 from "./page/Produce2";
import Produce3 from "./page/Produce3";
import Produce4 from "./page/Produce4";
import End from "./page/End";
import Loading from "./page/Loading";
import Produce22 from "./page/Produce22";
import Error from "./page/Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.camera} element={<Camera />} />
        <Route path={routes.selectPack} element={<SelectPack />} />
        <Route path={routes.produce1} element={<Produce1 />} />
        <Route path={routes.produce2} element={<Produce2 />} />
        <Route path={routes.produce22} element={<Produce22 />} />
        <Route path={routes.produce3} element={<Produce3 />} />
        <Route path={routes.produce4} element={<Produce4 />} />
        <Route path={routes.end} element={<End />} />
        <Route path={routes.loading} element={<Loading />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
