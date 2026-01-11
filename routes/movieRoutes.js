const express = require('express');
const router = express.Router();

router.get('/search', (req, res) => {
  res.json({ message: 'Search route works' });
});

router.get('/movies/:id', (req, res) => {
  res.json({ message: 'Movie details route works' });
});

module.exports = router;
