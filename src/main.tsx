import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

import { store } from "./store/index.ts";
import App from "./App";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

// Sticker Store components
import StickerStoreApp from "./pages/sticker_store/stickerStoreApp";
import StickerStoreNotFound from "./pages/sticker_store/components/stickerStoreNotFound";
import StickerStoreMainLayout from "./pages/sticker_store/layouts/stickerStoreMainLayout";
import ProductDetails from "./pages/sticker_store/components/productDetails";
import CartTable from "./pages/sticker_store/components/cartTable";

// Article Handler components
import ArticleHandlerMainLayout from "./pages/article_handler/layouts/ArticleHandlerMainLayout";
import ArticleHandlerApp from "./pages/article_handler/ArticleHandlerApp";
import CreateBlogForm from "./pages/article_handler/components/CreateBlogForm";
import SingleBlogPage from "./pages/article_handler/components/SingleBlogPage";
import EditBlogForm from "./pages/article_handler/components/EditBlogForm";
import UsersList from "./pages/article_handler/components/UsersList";
import UserPage from "./pages/article_handler/components/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "store",
    element: <StickerStoreApp />,
    errorElement: <StickerStoreNotFound />,
  },
  {
    path: "store/products/:productID",
    element: (
      <StickerStoreMainLayout>
        <ProductDetails />
      </StickerStoreMainLayout>
    ),
  },
  {
    path: "store/cart",
    element: (
      <StickerStoreMainLayout>
        <CartTable />
      </StickerStoreMainLayout>
    ),
  },
  {
    path: "article-handler",
    element: <ArticleHandlerMainLayout />,
    errorElement: (
      <h3 className="text-center">چیزی پیدا نکردیم متاسفانه 🤗 ...</h3>
    ),
    children: [
      {
        index: true,
        element: <ArticleHandlerApp />,
      },
      {
        path: "blogs/create-blog",
        element: <CreateBlogForm />,
      },

      {
        path: "blogs/:blogId",
        element: <SingleBlogPage />,
      },
      {
        path: "editBlog/:blogId",
        element: <EditBlogForm />,
      },
      {
        path: "users",
        element: <UsersList />,
      },
      {
        path: "users/:userId",
        element: <UserPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
      <ToastContainer />
    </Provider>
  </StrictMode>
);
