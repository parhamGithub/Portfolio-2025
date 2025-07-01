import StickerStoreImage from "../assets/Sticker_Store/home.jpeg";
import ArticleHandlerImage from "../assets/Article_Handler/home-laptop.jpeg";
import MixYadakImage from "../assets/Mix_Yadak/home-dark.png";

import { type ProjectData } from "../components";


const stickerStoreData: ProjectData = {
  title: "Sticker Store",
  image: StickerStoreImage,
  description:
    "Developed a React web app with product display and shopping bag features. Managed application state and data fetching using Redux Toolkit. Implemented responsive UI with MUI for seamless cross-device experience.",
  gitLink: "https://github.com/parhamGithub/storeByRedux",
  techs: [
    "React",
    "Redux",
    "fetchQuery",
    "Tailwind",
    "react-router-dom-Dom",
    "useEffect",
    "useDispatch",
    "useSelector",
    "reactPaginate",
  ],
  alt: "Sticker Store app homepage mockup showing product listings",
  url: "/store",
};

const articleHandlerData: ProjectData = {
  title: "Article Handler",
  image: ArticleHandlerImage,
  description:
    "Built a React application for managing authors and articles. Handled application state (for articles, writers, and reactions for each article) effectively using Redux. Ensured responsive design for optimal viewing on various devices.",
  gitLink: "https://github.com/parhamGithub/Article-handler",
  techs: [
    "React",
    "Redux",
    "fetchQuery",
    "useMemo",
    "useParams",
    "react-router-dom-Dom",
  ],
  alt: "Screenshot of the Article Handler application on a laptop screen",
  url: "/article-handler",
};

const mixYadakData: Omit<ProjectData, "url"> = {
  title: "Mix Yadak",
  image: MixYadakImage,
  description:
    "A cross-platform app for a car parts store (using Flutter). Implemented dynamic category and product listings from the database. Designed and integrated Light and Dark modes and conditional features (e.g., discounts). Dynamic prices based on the user's account (whether the user is a Wholesale buyer or not). Can’t show the source code because the project is for my friend’s business.",
  gitLink: "#",
  techs: ["Dart", "Flutter", "Riverpod (State Management)"],
  alt: "Screenshot of the Mix Yadak mobile application on a smartphone mockup",
  imageExtraClasses: "max-h-100 md:max-h-150 lg:max-h-[40rem]",
};

export { stickerStoreData, articleHandlerData, mixYadakData };