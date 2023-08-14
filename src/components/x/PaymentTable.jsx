import React from "react";
import "./PaymentTable.css";

const PaymentTable = ({ headers, data }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {rowData.map((cellData, cellIndex) => (
              <td key={cellIndex}>{cellData}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaymentTable;
