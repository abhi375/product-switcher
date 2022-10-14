import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import WorkDashboard from "./work-dashboard.png";
import ConnectDashboard from "./connect-dashboard.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [activeProduct, setActiveProduct] = useState("Work");

  const handleSelectProduct = (product) => {
    return setActiveProduct(product);
  };

  return (
    <main>
      <Header
        handleSelectProduct={handleSelectProduct}
        activeProduct={activeProduct}
      />

      <AnimatePresence>
        {activeProduct === "Work" ? (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={WorkDashboard}
            alt=""
            className="mt-14"
          />
        ) : (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={ConnectDashboard}
            alt=""
            className="mt-14"
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
