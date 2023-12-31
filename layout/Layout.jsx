import { ToastContainer } from "react-toastify";
import Head from "next/head";
import Modal from "react-modal";
import Sidebar from "@/components/Sidebar";
import useCategories from "@/hooks/useCategories";
import ModalProducto from "@/components/ModalProducto";
import Steps from "@/components/Steps";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

const Layout = ({ children, page }) => {
  const { modal, product } = useCategories();
  return (
    <>
      <Head>
        <title>Café - {page}</title>
        <meta name="description" content="Quiosco App" />
      </Head>
      <div id="__next" className="flex dark:bg-zinc-800">
        <aside className="w-[90px] md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className="w-[90%] md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10 mt-10">
            <Steps />
            {children}
          </div>
        </main>
      </div>
      {modal && (
        <Modal id="modalProduct" isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      )}
      <ToastContainer />
    </>
  );
};

export default Layout;
