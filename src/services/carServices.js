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
    let result;

    if (typeof data === "undefined") {
      result = await api.get(`/admin/v2/car`, header);
    } else {
      const priceSplit = price?.split("-");

      if (priceSplit) {
        const minPrice = parseInt(priceSplit[0]) || "";
        const maxPrice = parseInt(priceSplit[1]) || "";

        result = await api.get(
          `/admin/v2/car?name=${name}&category=${category}&isRented=${isRented}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
          header
        );
      }
    }

    setCars(result.data.cars);
    console.log("Result = ", result?.data?.cars);

    return result?.data?.cars;
  } catch (error) {
    console.log(error);
  }
};
