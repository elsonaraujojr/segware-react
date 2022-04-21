import { createContext, useContext, useEffect, useState } from "react";
import { authAxios } from "../services/api";

interface Author {
  id: number;
  username: string;
}

interface Feed {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  loves: number;
  activeUserLikedIt: number;
  activeUserLovedIt: number;
  author: Author;
}

type FeedInput = Pick<Feed, "content">;

interface FeedsProviderProps {
  children: React.ReactNode;
}

interface FeedsContextData {
  feeds: Feed[];
  createFeed(feed: FeedInput): Promise<void>;
}

const FeedsContext = createContext<FeedsContextData>({} as FeedsContextData);

export function FeedsProvider({ children }: FeedsProviderProps) {
  const [feeds, setFeeds] = useState<Feed[]>([]);

  useEffect(() => {
    authAxios
      .get("feeds")
      .then((response) => setFeeds(response.data));
  }, []);


  async function createFeed(feed: FeedInput) {
    const response = await authAxios.post("/feeds", feed);

    const { feedSave } = response.data;
    setFeeds([...feeds, feedSave]);
  }

  return (
    <FeedsContext.Provider value={{ feeds, createFeed }}>
      {children}
    </FeedsContext.Provider>
  );
}

export function useFeeds() {
  const context = useContext(FeedsContext);

  return context;
}