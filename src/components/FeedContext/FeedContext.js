import { createContext, useContext, useState } from 'react';

const FeedContext = createContext();

export const useFeedContext = () => {
  const context = useContext(FeedContext);
  if (!context) {
    throw new Error('useFeedContext must be used within a FeedProvider');
  }
  return context;
};

export const FeedProvider = ({ children }) => {
  const [selectedFeedTitle, setSelectedFeedTitle] = useState("Reddit");

  const setFeedTitle = (title) => {
    setSelectedFeedTitle(title);
  };

  return (
    <FeedContext.Provider value={{ selectedFeedTitle, setFeedTitle }}>
      {children}
    </FeedContext.Provider>
  );
};