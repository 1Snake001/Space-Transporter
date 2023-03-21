import React from "react";
import Thead from "./Thead";
import Tbody from "./Tbody";

const Table = () => {
  return (
    <table className="table table-bordered">
      <Thead />
      <Tbody />
    </table>
  );
};

export default Table;
