
import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./Layout";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const NotFound = lazy(() => import("./pages/NotFound"));


export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Carregando página...</p>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}