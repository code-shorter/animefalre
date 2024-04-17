const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/fetch-data0303', async (req, res) => {
  try {
    const response = await fetch('https://animeflare.us.to/');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

module.exports = router;
