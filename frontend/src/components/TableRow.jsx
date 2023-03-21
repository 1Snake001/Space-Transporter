import React, { useState, useEffect } from "react";
import servicesInstance from "../data-services/dataServices";

const TableRow = ({ isHeader, theadInnerHtml }) => {
  const [planetsData, setPlanetsData] = useState([]);
  const [shipData, setShipData] = useState({});
  const [planetId, setPlanetId] = useState(0);
  const [population, setPopulation] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const planetData = await servicesInstance.getPlanet();
      const shipData = await servicesInstance.getShip();
      setPlanetsData(planetData);
      setShipData(shipData);
    };
    getData();
  }, [planetId, population]);

  const moveShipHandler = async (planetId) => {
    await servicesInstance.moveShip(planetId);
    setPlanetId(planetId);
  };

  const moveToShipHandler = async () => {
    const respData = await servicesInstance.toShip(planetId);
    setPopulation(respData.planet.population);
  };

  const moveToPlanetHandler = async () => {
    const respData = await servicesInstance.toPlanet(planetId);
    setPopulation(respData.planet.population);
  };

  if (isHeader) {
    return (
      <tr>
        {Object.values(theadInnerHtml).map((content) => (
          <td key={content}>{content}</td>
        ))}
      </tr>
    );
  } else {
    return (
      <>
        {planetsData &&
          planetsData.map((planet) => (
            <tr
              className={
                shipData.planetId === planet._id ? `table table-dark` : ``
              }
              key={planet.name}
            >
              <td>{planet.name}</td>
              <td>{planet.population}</td>
              <td>
                {shipData.planetId === planet._id ? (
                  <>
                    <button
                      type="button"
                      onClick={() => moveToPlanetHandler()}
                      className="btn btn-success btn-sm"
                    >
                      « toPlanet
                    </button>
                    <button
                      type="button"
                      onClick={() => moveToShipHandler()}
                      className="btn btn-success btn-sm"
                    >
                      toShip »
                    </button>{" "}
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => moveShipHandler(planet._id)}
                    className="btn btn-primary btn-sm"
                  >
                    Move here
                  </button>
                )}
              </td>
              <td>
                {shipData.planetId === planet._id ? shipData.passengers : " - "}
              </td>
            </tr>
          ))}
      </>
    );
  }
};

export default TableRow;
