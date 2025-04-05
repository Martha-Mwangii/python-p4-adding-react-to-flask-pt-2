import { useEffect, useState } from "react";
import './App.css';

function App() {
  // State to store movies data
  const [movies, setMovies] = useState([]);

  // Fetch data from Flask API when the component mounts
  useEffect(() => {
    fetch("/movies") // This will automatically use the proxy from package.json
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        setMovies(data); // Update state with the movies data
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies</h1>
        {/* Display movies */}
        {movies.length === 0 ? (
          <p>Loading movies...</p> // Show loading message if movies are not fetched yet
        ) : (
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>{movie.name}</li> // Adjust 'name' depending on your movie object structure
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;

