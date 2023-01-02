import { createContext, useContext, useState } from 'react';

const dayInMilliseconds = 86400000;

const AppData = createContext({
    context: {
      allPodcasts: {},
      allDetailPodcast: [],
      timeToGetData: 0,
    },
    setState: () => {}
});


export const AppDataProvider = ({ children }) => {
  const [state, setState] = useState({
    context: {
      allPodcasts: {},
      allDetailPodcast: [],
      timeToGetData: dayInMilliseconds,
    }
    });
  return (
    <AppData.Provider value={{ state, setState }}>
      {children}
    </AppData.Provider>
  );
}

export const useAppData = () => useContext(AppData);