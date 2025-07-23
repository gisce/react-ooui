import React from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import { stories } from "../stories";
import "./StoriesLayout.css";

const StoriesLayout: React.FC = () => {
  const { storyId } = useParams();

  return (
    <div className="stories-layout">
      <nav className="stories-nav">
        <div className="stories-nav-header">
          <h1>React OOUI Stories</h1>
        </div>
        <ul className="stories-nav-list">
          {stories.map((story) => (
            <li key={story.id} className="stories-nav-item">
              <Link
                to={`/story/${story.id}`}
                className={`stories-nav-link ${
                  storyId === story.id ? "active" : ""
                }`}
              >
                <span className="story-title">{story.title}</span>
                {story.description && (
                  <span className="story-description">{story.description}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="stories-main">
        <Outlet />
      </main>
    </div>
  );
};

export default StoriesLayout;
