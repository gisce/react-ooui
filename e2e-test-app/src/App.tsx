import { Routes, Route } from "react-router-dom";
import StoriesIndex from "./components/StoriesIndex";
import StoryPage from "./components/StoryPage";

function App() {
  return (
    <Routes>
      <Route index element={<StoriesIndex />} />
      <Route path="story/:storyId" element={<StoryPage />} />
    </Routes>
  );
}

export default App;
