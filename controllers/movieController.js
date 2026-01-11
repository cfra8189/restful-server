const axios = require('axios');

const searchMovies = async (req, res) => {
  try {
    const { title } = req.query;

    if (!title) {
      return res.status(400).json({ error: 'Title query parameter is required' });
    }

    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        s: title,
        apikey: process.env.OMDB_API_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
};

const getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        i: id,
        apikey: process.env.OMDB_API_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movie details' });
  }
};

module.exports = { searchMovies, getMovieDetails };
