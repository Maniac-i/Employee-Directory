import React from 'react';

function TableRow(props) {
  return(

    props.employees.map((employee, index) => (
  <tr>
    <th>{index + 1}</th>
    <td>{employee.name.first}</td>
    <td>{employee.name.last}</td>
    <td>{employee.dob.age}</td>
    <td>{employee.phone}</td>
    <td>{employee.email}</td>
    <td>{employee.location.country}</td>
  </tr>
  ))
  );
  
}

export default TableRow;