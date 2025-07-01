import Navbar from "../components/navbar";

const StickerStoreMainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-s">
      <Navbar />
      <main className="bg-white">{children}</main>
    </div>
  );
};

export default StickerStoreMainLayout;
