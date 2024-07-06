import React, { useState, useEffect } from "react";
import "../styles/Blog.css";

import LargeBlock from "../components/LargeBlock";
import SmallBlock from "../components/SmallBlock";
//create large blog and small blog components
//pass title, subtitle, date, icon aand description through props
//conditionally render grids, one for small screen and one for large screens

export default function Blog() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Assuming 768px as breakpoint for desktop

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      subtitle: "Subtitle 1",
      title: "Blog Post 1",
      description: "Description of Blog Post 1",
      date: "2024-07-06",
    },
    {
      id: 2,
      subtitle: "Subtitle 2",
      title: "Blog Post 2",
      description: "Description of Blog Post 2",
      date: "2024-07-05",
    },
  ];
  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <div className="blog-grid">
        {blogPosts.map((post) =>
          isDesktop ? (
            <React.Fragment key={post.id}>
              <LargeBlock
                subtitle={post.subtitle}
                title={post.title}
                description={post.description}
                date={post.date}
              />
              <SmallBlock
                subtitle={post.subtitle}
                title={post.title}
                description={post.description}
                date={post.date}
              />
              <SmallBlock
                subtitle={post.subtitle}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            </React.Fragment>
          ) : (
            <SmallBlock
              key={post.id}
              subtitle={post.subtitle}
              title={post.title}
              description={post.description}
              date={post.date}
            />
          )
        )}
      </div>
    </div>
  );
}
