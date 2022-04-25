import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

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
  children: ReactNode;
}

interface FeedsContextData {
  feeds: Feed[];
  createFeed(feed: FeedInput): Promise<void>;
  getFeeds(): Promise<void>;
}

const FeedsContext = createContext<FeedsContextData>({} as FeedsContextData);

export function FeedsProvider({ children }: FeedsProviderProps) {
  const [feeds, setFeeds] = useState<Feed[]>([]);

  useEffect(() => {
    api.get("feeds").then((response) => setFeeds(response.data));
  }, []);

  async function createFeed(feed: FeedInput) {
    const status = await api.post("/feed", feed)
      .then((response) => response.status);
    console.log(status);
    

    if (status === 201) {
      toast.success("Salvo com sucesso!");
      getFeeds();
    }
  }
  
  async function getFeeds() {
    await api.get("feeds").then((response) => setFeeds(response.data));
  }

  return (
    <FeedsContext.Provider value={{ getFeeds, feeds, createFeed }}>
      {children}
    </FeedsContext.Provider>
  );
}

export function useFeeds() {
  const context = useContext(FeedsContext);

  return context;
}
