import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { FeedsProvider } from "./hooks/useFeeds";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <FeedsProvider>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </FeedsProvider>
  );
}

