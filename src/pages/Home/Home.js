import './Home.scss';

import { useState, useEffect } from 'react';

import InfoCard from '../../components/InfoCard/InfoCard';
import Navbar from '../../components/Navbar/Navbar';

import logos from '../../logos/logos';

import { getMovieById } from '../../services/MovieService';

function Home() {
	const [userId, setUserId] = useState(window.localStorage.getItem('userId'));
	const [movies, setMovies] = useState([]);

	async function handleMovies() {
		const movies = await getMovieById(userId);
    movies.forEach(movie => {
      movie.logo = logos[movie.platform];
      console.log(movie.platform);
    });
		setMovies(movies);
	}

	useEffect(() => {
		handleMovies();
	}, []);

  return (
    <div className="Home">
      <Navbar />
      <div className="movie-list">
        {movies.map((movie, index) => (
          <InfoCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
