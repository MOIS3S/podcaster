import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/podcast/:podcastId" element={<h1>Detalle de un podcast</h1>} />
      <Route path="/podcast/:podcastId/episode/:episodeId" element={<h1>Detalle de un episodio</h1>} />
    </Routes>
    <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
  );
}

export default App;
