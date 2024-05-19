import { Routes, Route } from "react-router-dom";
import PublicLayout from "./pages/_public/PublicLayout";
import PrivateLayout from "./pages/_private/PrivateLayout";
import { Homepage, About, Explore } from "./pages/_public/views";
import { Social } from "./pages/_private/views";
import { ThemeProvider } from "@/components/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path="/social" element={<Social />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
