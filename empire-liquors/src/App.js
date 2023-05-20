import Home from "./routes/Home/Home";
import { Routes, Route, Outlet } from "react-router-dom";

import Navigation from "./routes/Navigation/Navigation";
import Authentication from "./routes/Authentication/Authentication"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
