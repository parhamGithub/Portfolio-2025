import { Helmet } from "react-helmet-async";

import StickerStoreMainLayout from "./layouts/stickerStoreMainLayout";
import Header from "./components/header";
import PaginateItems from "./components/common/paginateItems";
import { useGetProductsQuery } from "../../slices/productApi";


interface Product {
  id: string;
  name: string;
  price: number;
}

const StickerStoreApp = () => {
  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
  } = useGetProductsQuery({});

  return (
    <StickerStoreMainLayout>
      <Helmet>
        <html lang="fa" dir="rtl" />
        <title>فروشگاه استیکر برنامه نویسی</title>
      </Helmet>

      <div className="mx-auto max-w-6xl">
        <Header />
        <PaginateItems
          productsPerPage={6}
          products={products as Product[]}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
        />
      </div>
    </StickerStoreMainLayout>
  );
};

export default StickerStoreApp;