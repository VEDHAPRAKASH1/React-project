import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export const AddToWishlist = (bookId) => {
    const {userId} = useContext(UserContext);

    console.log(userId,bookId);
}