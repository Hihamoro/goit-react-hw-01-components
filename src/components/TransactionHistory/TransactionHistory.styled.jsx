import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 750px;
  height: 1000px;
  border: 1px solid #757575;
`;
export const DataTable = styled.td`
  text-align: center;
`;
export const TableHead = styled.thead`
  background-color: #19d6d8;
  color: #ffffff;
  font-size: 30px;
`;
export const TableRow = styled.tr`
  color: #5b5b5b;
  font-size: 20px;
  background-color: #f3f6f4;
  &:nth-child(2n) {
    background-color: #ffecb3;
  }
`;