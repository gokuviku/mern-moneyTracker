// client/src/components/AddTransaction.js
import { useState } from 'react';
import { addTransaction } from '../services/api';
import './AddTransaction.css';

const AddTransaction = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTransaction({ description, amount: parseFloat(amount) });
        setDescription('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default AddTransaction;
