import LayoutDefault from "@components/Layouts/LayoutDefault";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <LayoutDefault>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </LayoutDefault>
  );
}

export default MyApp;
