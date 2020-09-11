import React from 'react';
import Grade from './grade';

function GradeTable(props) {

  const grade = props.grade;
  const allGrades = grade.map(grades => {

    return (
      <Grade
        key={grades.id}
        name = {grades.name}
        course={ grades.course }
        grade={ grades.grade }
      />
    );
  });

  return (
    <div>
      <table className="table table-bordered">
        <thead className="thead-</thead>dark">
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {allGrades}
        </tbody>
      </table>
    </div>
  );
}

export default GradeTable;
