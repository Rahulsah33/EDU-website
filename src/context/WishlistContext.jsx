import { useEffect, useState } from "react";
import { WishlistContext } from "./wishlistContext.js";

const STORAGE_KEY = "r-academy-wishlist";

function readWishlist() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(readWishlist);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  function toggleWishlist(courseId) {
    setWishlist((current) =>
      current.includes(courseId)
        ? current.filter((id) => id !== courseId)
        : [...current, courseId],
    );
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        isWishlisted: (courseId) => wishlist.includes(courseId),
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
