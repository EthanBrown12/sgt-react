import React from 'react';

function Grade(props) {

  return (

    <tr>
      <th scope="col">{ props.name}</th>
      <th scope="col">{props.course}</th>
      <th scope="col">{props.grade}</th>
    </tr>

  );
}

export default Grade;
