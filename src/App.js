import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPodcast from "./pages/DetailPodcast";

function App() {

  return (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/podcast/:podcastId" element={<DetailPodcast/>} />
    <Route path="/podcast/:podcastId/episode/:episodeId" element={<h1>Detalle de un episodio</h1>} />
  </Routes>
  );
}

export default App;
