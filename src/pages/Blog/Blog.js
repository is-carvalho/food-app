import React, { useEffect } from "react";
import "../../styles/BlogStyle.css";

const Blog = () => {
  useEffect(() => {
    document.body.classList.add("blog-page");
    return () => {
      document.body.classList.remove("blog-page");
    };
  }, []);

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <p>
        Confira novidades, receitas e curiosidades do universo dos hambúrgueres
        em breve!
      </p>
    </div>
  );
};

export default Blog;
