import React, { useState, useEffect } from 'react'
import servicesInstance from "../data-services/dataServices";

const TableRow = ({ isHeader, theadInnerHtml }) => {

    const [planetsData, setPlanetsData] = useState([]);
    const [shipData, setShipData] = useState({});

useEffect(()=>{
       const getData = async () => {
        const planetData = await servicesInstance.getPlanet();
        const shipData = await servicesInstance.getShip();
        setPlanetsData(planetData);
        setShipData(shipData);
       }
       getData();
},[])



    if (isHeader) {
      return (
        <tr>
         {Object.values(theadInnerHtml).map(content => (<td key={content}>{content}</td>))}
        </tr>
      );
    } else {
      return (
        <>
      {planetsData && planetsData.map((planet) => (
        <tr
          className={ shipData.planetId === planet._id ? `table table-dark` : ``}
          key={planet.name}
        >
          <td>{planet.name}</td>
          <td>{planet.population}</td>
          <td>
  
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