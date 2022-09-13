import PropTypes from 'prop-types';
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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { TransactionHistory };
