import { useState } from "react";

import { Header } from "../../components";
import Search from "./Search";
import CarList from "./CarList";

const Cars = () => {
  const [cars, setCars] = useState([]);

  return (
    <main>
      <Header />
      <Search setCars={setCars} />
      <CarList cars={cars} setCars={setCars} />
    </main>
  );
};
export default Cars;
