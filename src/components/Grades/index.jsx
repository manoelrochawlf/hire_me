import React from "react";
import { GradesTable, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from "./styles.js";
import { gradesData } from "../../mocks/grades";

const Grades = () => {
    return (
      <GradesTable>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Módulo</TableHeaderCell>
            <TableHeaderCell>Nota</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gradesData.map((grade) => (
            <TableRow key={grade.module}>
              <TableCell>{grade.module}</TableCell>
              <TableCell>{grade.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </GradesTable>
    );
  };
  
  export default Grades;