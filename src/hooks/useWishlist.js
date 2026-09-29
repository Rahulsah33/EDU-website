import { useContext } from "react";
import { WishlistContext } from "../context/wishlistContext.js";

export function useWishlist() {
  return useContext(WishlistContext);
}
