import React from "react";
import TableRow from "./TableRow";

const Thead = () => {
  const theadInnerHtml = {
    planet: "Planet",
    population: "Population",
    spaceshipLocation: "Spaceship location",
    peopleOnShip: "People on ship",
  };

  return (
    <thead>
      <TableRow isHeader={true} theadInnerHtml={theadInnerHtml} />
    </thead>
  );
};

export default Thead;
