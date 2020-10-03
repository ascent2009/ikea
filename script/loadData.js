import { getData } from "./getData.js";

export const loadData = () => {
  if (location.pathname.includes("cart")) {
    getData.cart(cartList, (data) => {});
  }
  //   getData.catalog((data) => {});
  //   getData.subCatalog((data) => {});
};
