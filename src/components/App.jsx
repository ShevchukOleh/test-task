import Home from "pages/Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Feeds } from "pages/Feeds/Feeds";
import { FeedDetails } from "pages/FeedDetails/FeedDetails";
import { FeedProvider } from "./FeedContext/FeedContext";

function App() {
  return (
    <FeedProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="feeds" element={<Feeds/>} />
          <Route path="FeedDetails/:index" element={<FeedDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </FeedProvider>
  );
}

export default App;