import React from "react";
import Footer from "./Footer";

const Container = ({ children }) => {
  return (
    <div className="mobile-body no_scroll pt-2">
      {children}

      <Footer />
    </div>
  );
};

export default Container;
