import { useState } from "react";

import { Header, Search } from "../../components";
import CarList from "./CarList";
import "./Cars.css";

const Cars = ({ cars, setCars, isFiltered, setIsFiltered }) => {
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <main>
      <Header isFiltered={isFiltered} />
      <Search setCars={setCars} setIsFiltered={setIsFiltered} isFiltered={isFiltered} setSearchFocus={setSearchFocus} />
      <CarList cars={cars} setCars={setCars} />
      <div className={`${searchFocus ? "overlay" : "overlay-hide"}`}></div>
    </main>
  );
};
export default Cars;
