import { TableEl } from './TransactionHistory.styled';

export const TransactionItems = ({
  transactions: { type, amount, currency },
}) => (
  <>
    <TableEl>{type}</TableEl>
    <TableEl>{amount}</TableEl>
    <TableEl>{currency}</TableEl>
  </>
);
