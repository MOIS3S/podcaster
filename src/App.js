import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPodcast from "./pages/DetailPodcast";
import DetailEpisode from "./pages/DetailEpisode";

function App() {

  return (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/podcast/:podcastId" element={<DetailPodcast/>} />
    <Route path="/podcast/:podcastId/episode/:episodeId" element={<DetailEpisode/>} />
  </Routes>
  );
}

export default App;
