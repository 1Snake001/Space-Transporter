import React from 'react'

const TableRow = ({ isHeader, theadInnerHtml }) => {
console.log(theadInnerHtml);

    if (isHeader) {
      return (
        <tr >
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