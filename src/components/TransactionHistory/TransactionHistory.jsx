import { TransactionItems } from './TransactionItems';
import { Table, Caption } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Table>
    <thead>
      <tr>
        <Caption>Type</Caption>
        <Caption>Amount</Caption>
        <Caption>Currency</Caption>
      </tr>
    </thead>

    <tbody>
      {items.map(items => (
        <tr key={items.id}>
          <TransactionItems transactions={items} />
        </tr>
      ))}
    </tbody>
  </Table>
);
