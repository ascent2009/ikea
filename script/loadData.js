import { getData } from "./getData.js";

// const wishList = ["idd005", "idd100", "idd077", "idd033"];
const cartList = [
  {
    id: "idd015",
    count: 3,
  },
  {
    id: "idd045",
    count: 1,
  },
  {
    id: "idd095",
    count: 2,
  },
];

export const loadData = () => {
  if (location.hash) {
    getData.item(location.hash.substring(1), (data) => {});
  }
  if (location.pathname.includes("cart")) {
    getData.cart(cartList, (data) => {});
  }
  //   getData.catalog((data) => {});
  //   getData.subCatalog((data) => {});
};
