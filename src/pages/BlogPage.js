import { useEffect } from "react";
import { BlogsFirstPage } from "../articles/blogs/blogsFirstPage";
import { BlogsSecondPage } from "../articles/blogs/blogsSecondPage";
import { BlogsThirdPage } from "../articles/blogs/blogsThirdPage";
import { BlogsFourthPage } from "../articles/blogs/blogsFourthPage";
import { useLocation } from "react-router-dom";
import { BlogsFifthPage } from "../articles/blogs/blogsFifthPage";
import { BlogsSixthPage } from "../articles/blogs/blogsSixthPage";

export function BlogPage() {

  const currentPath = useLocation().pathname;
  useEffect(() => { window.scrollTo(0, 0); }, [currentPath]);
  let currentComponent;

  switch (currentPath) {
    case '/blog-page/first-page':
      currentComponent = <BlogsFirstPage />;
      break;
    case '/blog-page/second-page':
      currentComponent = <BlogsSecondPage />;
      break;
    case '/blog-page/third-page':
      currentComponent = <BlogsThirdPage />;
      break;
    case '/blog-page/fourth-page':
      currentComponent = <BlogsFourthPage />;
      break;
    case '/blog-page/fifth-page':
      currentComponent = <BlogsFifthPage />;
      break;
    case '/blog-page/sixth-page':
      currentComponent = <BlogsSixthPage />;
      break;
    default:
      currentComponent = (
        <div>
          <BlogsFirstPage />
          <BlogsSecondPage />
          <BlogsThirdPage />
          <BlogsFourthPage />
          <BlogsFifthPage />
          <BlogsSixthPage />
        </div>
      );
  }

  return (
    <>
      {currentComponent}
    </>
  );
}