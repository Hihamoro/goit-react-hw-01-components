import PropTypes from 'prop-types';
import { TransactionTable, DataTable, TableRow, TableHead } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
    return (
        <TransactionTable>
            <TableHead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TableHead>

            <tbody>
                {items.map(item => (
                    <TableRow key={item.id}>
                        <DataTable>{item.type}</DataTable>
                        <DataTable>{item.amount}</DataTable>
                        <DataTable>{item.currency}</DataTable>
                    </TableRow>
                ))}
            </tbody>
        </TransactionTable>
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
    ),
};