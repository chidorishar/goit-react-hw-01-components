import {
  Table,
  TableHead,
  TableHeadRow,
  TableHeadCaption,
  TableBody,
  TableBodyRow,
  TableData,
} from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <TableHeadRow>
          <TableHeadCaption>Type</TableHeadCaption>
          <TableHeadCaption>Amount</TableHeadCaption>
          <TableHeadCaption>Currency</TableHeadCaption>
        </TableHeadRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableBodyRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableBodyRow>
        ))}
      </TableBody>
    </Table>
  );
}

export { TransactionHistory };
