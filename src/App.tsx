import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AI from "./pages/AI";
import Creative from "./pages/Creative";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/creative" element={<Creative />} />
      </Routes>
    </BrowserRouter>
  );
}
