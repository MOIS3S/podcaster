import { createContext, useContext, useState } from 'react';

const AppData = createContext({
  allPodcasts: {},
  setAllPodcasts: () => {}
});


export const AppDataProvider = ({ children }) => {
  const [allPodcasts, setAllPodcasts] = useState(undefined);
  return (
    <AppData.Provider value={{ allPodcasts, setAllPodcasts }}>
      {children}
    </AppData.Provider>
  );
}

export const useAppData = () => useContext(AppData);