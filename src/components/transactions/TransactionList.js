import React from "react";
import { Table } from "react-bootstrap";

const TransacctionList = ({ title }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Account Name</th>
          <th>Current Balance</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TransacctionList;
