import React from "react";
import { Link } from "react-router-dom";
import { stories } from "../stories";
import "./StoriesIndex.css";

const StoriesIndex: React.FC = () => {
  return (
    <div className="stories-index">
      <div className="stories-index-container">
        <h1>React OOUI Stories</h1>
        <div className="stories-grid">
          {stories.map((story) => (
            <Link
              key={story.id}
              to={`/story/${story.id}`}
              className="story-card"
            >
              <h2>{story.title}</h2>
              {story.description && <p>{story.description}</p>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesIndex;
