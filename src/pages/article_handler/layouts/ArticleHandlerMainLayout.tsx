import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const ArticleHandlerMainLayout = () => {
  useEffect(() => {
    const styleSheetIds: string[] = [
      "article-handler-styles",
      "article-handler-primitiveui",
    ];
    const head: HTMLHeadElement = document.head;

    const originalDir: string = document.documentElement.dir;
    document.documentElement.dir = "rtl";

    const stylesLink: HTMLLinkElement = document.createElement("link");
    stylesLink.id = styleSheetIds[0];
    stylesLink.rel = "stylesheet";
    stylesLink.href = "/css/styles.css";
    head.appendChild(stylesLink);

    const primitiveUiLink: HTMLLinkElement = document.createElement("link");
    primitiveUiLink.id = styleSheetIds[1];
    primitiveUiLink.rel = "stylesheet";
    primitiveUiLink.href = "/css/primitiveui.css";
    head.appendChild(primitiveUiLink);

    return () => {
      styleSheetIds.forEach((id) => {
        const linkElement: HTMLElement | null = document.getElementById(id);
        if (linkElement) {
          head.removeChild(linkElement);
        }
      });
      document.documentElement.dir = originalDir;
    };
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default ArticleHandlerMainLayout;