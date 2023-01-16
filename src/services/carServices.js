import api from "./baseUrl";

export const getCars = async (setCars, data) => {
  try {
    const header = {
      headers: {
        accept: "application/json",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3MzEwMjIzM30.x11FIoC6ZzAlrLVi_D0R46Kvq4L7DEUkXVR5TQvXXZk",
      },
    };

    const { name, category, price, isRented } = data || {};

    if (typeof data === "undefined") {
      const result = await api.get(`/admin/v2/car?name=&category=&isRented=&minPrice=&maxPrice=`, header);
      setCars(result.data.cars);
    } else {
      const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };

      const priceSplit = price?.split("-");

      if (priceSplit) {
        const minPrice = Number(priceSplit[0]) || "";
        const maxPrice = Number(priceSplit[1]) || "";

        let newCategory = category;

        if (category === "medium") {
          newCategory = capitalizeFirstLetter(category);
        }

        const result = await api.get(
          `/admin/v2/car?name=${name}&category=${newCategory}&isRented=${isRented}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
          header
        );
        setCars(result.data.cars);
        console.log(
          `/admin/v2/car?name=${name}&category=${newCategory}&isRented=${isRented}&minPrice=${minPrice}&maxPrice=${maxPrice}`
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
};
