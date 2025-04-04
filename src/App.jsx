import { Route, Routes } from "react-router-dom";
import AppRoute from "./appRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AppRoute />} />
        {/* <Route path="/forum/*" element={<ForumRoute />} /> */}
      </Routes>
    </>
  );
}

export default App;
