import api from "./baseUrl";

export const getCars = async (name, category, minPrice, maxPrice, isRented) => {
  try {
    const header = {
      headers: {
        accept: "application/json",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3MzEwMjIzM30.x11FIoC6ZzAlrLVi_D0R46Kvq4L7DEUkXVR5TQvXXZk",
      },
    };
    const result = await api.get(
      `/admin/v2/car?name=${name}&category=${category}&isRented=${isRented}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      header
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
