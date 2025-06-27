import React from "react";
import { useParams } from "react-router-dom";
import { stories } from "../stories";
import "./StoryPage.css";
import { ThemeWrapper } from "../ThemeWrapper";

const StoryPage: React.FC = () => {
  const { storyId } = useParams();
  const story = stories.find((s) => s.id === storyId);

  if (!story) {
    return (
      <div className="story-error">
        <h2>Story not found</h2>
        <p>The story with ID "{storyId}" could not be found.</p>
      </div>
    );
  }

  const StoryComponent = story.component;

  return (
    <ThemeWrapper>
      <StoryComponent {...(story.args || {})} />
    </ThemeWrapper>
  );
};

export default StoryPage;
