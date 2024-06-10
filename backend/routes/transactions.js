// backend/routes/transactions.js
const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// @route GET /api/transactions
// @desc Get all transactions
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route POST /api/transactions
// @desc Add a new transaction
router.post('/', async (req, res) => {
    const { description, amount } = req.body;

    try {
        const newTransaction = new Transaction({
            description,
            amount,
        });

        await newTransaction.save();
        res.json(newTransaction);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route DELETE /api/transactions/:id
// @desc Delete a transaction
router.delete('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        await transaction.remove();
        res.json({ message: 'Transaction removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
