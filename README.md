# Movie Finder API

## Description

A RESTful API server that acts as an intermediary between a movie review website and the OMDb (Open Movie Database) API. Built with Express.js and Node.js, this backend service provides clean, organized endpoints for searching movies and retrieving detailed movie information. Features proper separation of concerns with a routes and controllers architecture, secure API key management, and comprehensive error handling.

## Table of Contents

- [Technologies Used](#technologiesused)
- [Features](#features)
- [Future Features](#nextsteps)
- [Installation & Setup](#installation)
- [API Endpoints](#endpoints)
- [About the Author](#author)

## <a name="technologiesused"></a>Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Axios** - HTTP client for API requests
- **dotenv** - Environment variable management
- **OMDb API** - External movie database service

## <a name="features"></a> Features

**RESTful API Architecture** - Clean, predictable URL structure following REST principles  
**Movie Search** - Search for movies by title with query parameters  
**Movie Details** - Retrieve comprehensive information about specific movies  
**Secure Configuration** - API keys stored safely in environment variables  
**Error Handling** - Comprehensive try-catch blocks and validation  
**Input Validation** - Required parameter checking with clear error messages  
**Modular Structure** - Separated routes and controllers for maintainability  
**JSON Responses** - Consistent data format for easy client integration

## <a name="nextsteps"></a>Future Features

- **Caching System** - Store frequently requested movie data to reduce API calls
- **Rate Limiting** - Protect the server from excessive requests
- **User Favorites** - Allow users to save and manage favorite movies
- **Advanced Search** - Filter by year, genre, rating, and more
- **Pagination** - Handle large search results efficiently
- **Database Integration** - Store user data and movie reviews
- **Authentication** - JWT-based user authentication system
- **Movie Reviews** - Allow users to submit and view movie reviews
- **Recommendations** - Suggest movies based on user preferences

## <a name="installation"></a>Installation & Setup

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to project directory:

   ```bash
   cd restful-server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory:

   ```
   OMDB_API_KEY=your_api_key_here
   ```

5. Start the server:

   ```bash
   npm start
   ```

6. Server will run on `http://localhost:3001`

## <a name="endpoints"></a>API Endpoints

### Search Movies

**GET** `/api/search?title={movie_title}`

Search for movies by title.

**Parameters:**
- `title` (required) - The movie title to search for

**Example:**
```
http://localhost:3001/api/search?title=batman
```

**Response:**
```json
{
  "Search": [
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Poster": "..."
    }
  ]
}
```

### Get Movie Details

**GET** `/api/movies/:id`

Get detailed information about a specific movie.

**Parameters:**
- `id` (required) - The IMDb ID of the movie

**Example:**
```
http://localhost:3001/api/movies/tt0372784
```

**Response:**
```json
{
  "Title": "Batman Begins",
  "Year": "2005",
  "Rated": "PG-13",
  "Runtime": "140 min",
  "Genre": "Action, Crime, Drama",
  "Director": "Christopher Nolan",
  "Plot": "...",
  "imdbRating": "8.2"
}
```

## <a name="author"></a>About The Author

**[Clarence Franklin](https://github.com/cfra8189)** - Full Stack Developer

## Project Structure

```
restful-server/
├── controllers/
│   └── movieController.js    # Business logic and API integration
├── routes/
│   └── movieRoutes.js        # Route definitions
├── .env                       # Environment variables (not in repo)
├── .gitignore                 # Git ignore rules
├── package.json               # Project dependencies
└── server.js                  # Main application entry point
```

## Development Notes

This project follows:
- RESTful API design principles
- MVC-like architecture with separated concerns
- Stateless server design
- Secure environment variable management
- Input validation and error handling best practices

## Works Cited

- [Express.js Documentation](https://expressjs.com/)
- [Axios Documentation](https://axios-http.com/)
- [OMDb API Documentation](http://www.omdbapi.com/)
- [REST API Design Best Practices](https://restfulapi.net/)
- [MDN Web Docs - HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
