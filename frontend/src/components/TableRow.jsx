import React, { useState, useEffect } from "react";
import servicesInstance from "../data-services/dataServices";

const TableRow = ({ isHeader, theadInnerHtml }) => {
    const [shipData, setShipData] = useState({});
    const [planetsData, setPlanetsData] = useState([]);
    const [planetId, setPlanetId] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const planetData = await servicesInstance.getPlanet();
      const shipData = await servicesInstance.getShip();
      setPlanetsData(planetData);
      setShipData(shipData);
    };
    getData();
  }, [planetId]);

const moveShipHandler = async (planetId) => {
const updateShipId = await servicesInstance.moveShip(planetId);
setPlanetId(planetId);
};

console.log(planetId);
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
                    <button type="button" className="btn btn-success btn-sm">
                      « toPlanet
                    </button>
                    <button type="button" className="btn btn-success btn-sm">
                      toShip »
                    </button>{" "}
                  </>
                ) : (
                  <button type="button" onClick={() => moveShipHandler(planet._id)} className="btn btn-primary btn-sm">
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
