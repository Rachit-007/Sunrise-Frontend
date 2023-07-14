import React, { useState } from "react";

const useMiniCart = () => {
  const [openMiniCart, setOpenMiniCart] = useState(false);

  if (openMiniCart) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return { openMiniCart, setOpenMiniCart };
};

export default useMiniCart;
