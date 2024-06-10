// client/src/components/TransactionList.js
import { useEffect, useState } from 'react';
import { deleteTransaction, getTransactions } from '../services/api';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        const { data } = await getTransactions();
        setTransactions(data);
    };

    const handleDelete = async (id) => {
        await deleteTransaction(id);
        fetchTransactions();
    };

    return (
        <div>
            <h2>Transaction List</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction._id}>
                        {transaction.description}: ${transaction.amount}
                        <button onClick={() => handleDelete(transaction._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
