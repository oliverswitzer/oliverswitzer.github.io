import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./pages/Landing";
import AI from "./pages/AI";
import Creative from "./pages/Creative";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/creative" element={<Creative />} />
      </Routes>
    </BrowserRouter>
  );
}
