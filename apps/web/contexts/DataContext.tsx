import axios from 'axios';
import {
  ArticleType,
  EditorType,
  ReviewType,
} from '@female-daily/shared/types';
import { createContext, ReactNode, useContext, useState } from 'react';

interface DataContextType {
  editorsChoice: EditorType[];
  latestArticles: ArticleType[];
  latestReview: ReviewType[];
  fetchData: () => Promise<void>;
}

const DataContext = createContext<DataContextType>(null!);

function DataProvider({ children }: { children: ReactNode }) {
  const [editorsChoice, setEditorsChoice] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);
  const [latestReview, setLatestReview] = useState([]);

  async function fetchData() {
    const { data } = await axios.get(
      'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp'
    );
    setEditorsChoice(data[`editor's choice`]);
    setLatestArticles(data[`latest articles`]);
    setLatestReview(data[`latest review`]);
  }

  return (
    <DataContext.Provider
      value={{
        editorsChoice,
        latestArticles,
        latestReview,
        fetchData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useDataContext() {
  return useContext(DataContext);
}

export { DataProvider, useDataContext };
