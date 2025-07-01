import { useState } from "react";
import ReactPaginate from "react-paginate";
import ProductListing from "../productListing";


interface Product {
  id: string;
  name: string;
  price: number;
}

interface PaginateItemsProps {
  productsPerPage: number;
  products: Product[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface PageClickEvent {
  selected: number;
}

const PaginateItems = ({
  productsPerPage,
  products,
  isLoading,
  isSuccess,
  isError,
}: PaginateItemsProps) => {
  const [itemOffset, setItemOffset] = useState<number>(0);

  const endOffset = itemOffset + productsPerPage;

  const currentProducts: Product[] = products.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageClick = (e: PageClickEvent) => {
    const newOffset = e.selected * productsPerPage;

    document.documentElement.scrollTop = 0;

    setItemOffset(newOffset);
  };

  return (
    <>
      <ProductListing
        currentProducts={currentProducts}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
      />
      <ReactPaginate
        className=""
        containerClassName="flex justify-center curser-pointer items-center mt-8 mb-4"
        pageClassName="block border cursor-pointer border-solid text-black border-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-2"
        pageLinkClassName="flex items-center justify-center w-full h-full"
        activeClassName="bg-palette-primary text-palette-light hover:bg-palette-dark"
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="صفحه قبلی"
        nextLabel="صفحه بعدی"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default PaginateItems;