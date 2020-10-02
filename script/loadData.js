import { getData } from "./getData.js";

const wishList = ["idd005", "idd100", "idd077", "idd033"];
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
  if (location.search) {
    const search = decodeURI(locatiion.search);
    const prop = search.split("=")[0].substring(1);
    const value = search.split("=")[1];

    if (prop === "s") {
      getData.search(value, (data) => {});
    } else if ((prop = "wishlist")) {
      getData.wishList(wishlist, (data) => {});
    } else if (prop === "cat" || prop === "subcat") {
      getData.category(prop, value, (data) => {});
    }
  }
  if (location.hash) {
    getData.item(location.hash.substring(1), (data) => {});
  }
  if (location.pathname.includes("cart")) {
    getData.cart(cartList, (data) => {});
  }
  getData.catalog((data) => {});
  getData.subCatalog((data) => {});
};
