import React, { useEffect, useState } from 'react';

interface Movie {
  id: number;
  name: string;
  director: string;
  // Add more fields as needed
}

const MovieListPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://hoblist.com/api/movieList';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(corsProxyUrl + apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category: 'movies',
            language: 'kannada',
            genre: 'all',
            sort: 'voting',
          }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch movie list');
        }
        const data = await response.json();
        console.log(data.result);
        setMovies(data.result);
      } catch (error) {
        console.error('Error fetching movie list:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-6">Movie List</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.name}</h2>
            <p>Director: {movie.director}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListPage;
