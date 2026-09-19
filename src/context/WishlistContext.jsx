import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem(
      "devClothingWishlist"
    );

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });

  // Save wishlist whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "devClothingWishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  // Add product to wishlist
  const addToWishlist = (product) => {
    const alreadyExists = wishlist.some(
      (item) => item.id === product.id
    );

    if (!alreadyExists) {
      setWishlist([...wishlist, product]);
    }
  };

  // Remove product from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist(
      wishlist.filter(
        (item) => item.id !== productId
      )
    );
  };

  // Check if product is already in wishlist
  const isInWishlist = (productId) => {
    return wishlist.some(
      (item) => item.id === productId
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}