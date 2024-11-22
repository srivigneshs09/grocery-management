const express = require('express');
const GroceryItem = require('../models/GroceryItem');
const router = express.Router();

// Create an item
router.post('/', async (req, res) => {
  try {
    const newItem = new GroceryItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all items
router.get('/', async (req, res) => {
  try {
    const items = await GroceryItem.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an item
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await GroceryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    await GroceryItem.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
