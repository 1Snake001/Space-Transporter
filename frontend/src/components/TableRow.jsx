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

console.log(planetsData);
console.log(shipData);

    if (isHeader) {
      return (
        <tr>
         {Object.values(theadInnerHtml).map(content => (<td key={content}>{content}</td>))}
        </tr>
      );
    } else {
      return (
       <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
          <td>Cell 4</td>
        </tr>
      );
    }
  };

  export default TableRow;