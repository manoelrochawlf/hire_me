import styled from "styled-components";

export const GradesTable = styled.table`
  width: 25rem;
  border-collapse: collapse;
  border-radius: 832px;
  font-size: 1.2rem;
  @media (max-width: 1000px) {
    width: 27rem;
  }
  @media (max-width: 540px) {
    width: 15rem;
  }
`;

export const TableHead = styled.thead`
  background-color: #e88f10;
  color: #fff;
`;

export const TableBody = styled.tbody`
  background-color: #f5f5f5;
`;

export const TableRow = styled.tr`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  &:nth-child(even) {
    background-color: #e9e9e9;
  }
`;

export const TableHeaderCell = styled.th`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 0.75rem;
  text-align: left;
  @media (max-width: 1000px) {
    padding: 0.3rem;
    font-size: 1rem;
  }
`;

export const TableCell = styled.td`
  color: #e88f10;
  padding: 0.75rem;
  @media (max-width: 1000px) {
    padding: 0.3rem;
    font-size: 1rem;
  }
`;