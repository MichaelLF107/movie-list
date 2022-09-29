import './Home.scss';

import { useState, useEffect } from 'react';

import InfoCard from '../../components/InfoCard/InfoCard';
import Navbar from '../../components/Navbar/Navbar';

import logos from '../../logos/logos';

import { getMovieById, getMoviesWithFilters } from '../../services/MovieService';

import { FormControlLabel, Switch, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

function Home() {
	const userId = parseInt(window.localStorage.getItem('userId'));
	const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(false);
  const [platform, setPlatform] = useState('');

	async function handleMovies() {
		const movies = await getMovieById(userId);
    movies.forEach(movie => {
      movie.logo = logos[movie.platform];
    });
		setMovies(movies);
	}

  async function handleMoviesWithFilters() {
    const movies = await getMoviesWithFilters(userId, watched, platform);
    movies.forEach(movie => {
      movie.logo = logos[movie.platform];
    });
    setMovies(movies);
  }

  async function handleClearFilters() {
    setPlatform('');
    const movies = await getMovieById(userId);
    movies.forEach(movie => {
      movie.logo = logos[movie.platform];
    });
    setMovies(movies);
  }

  function handleSearch() {
    setWatched(!watched);
  }

  function handleChangePlatform(e) {
    setPlatform(e.target.value);
  }

  function handleUserNotLogged() {
    if (!userId) {
      window.location.href = '/';
    }
  }

	useEffect(() => {
    handleUserNotLogged();
		handleMovies();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

  return (
    <div className="Home">
      <Navbar />
      <div className="filter">
        <div className="filter-switch">
          <FormControlLabel control={<Switch
            color="secondary"
            size='large'
            onChange={handleSearch}
          />} label="Series Assistidas" />
        </div>
        <div className="filter-select">
          <FormControl style={{width: "12vw"}}>
            <InputLabel id="platform-select-label">Site</InputLabel>
            <Select
              labelId="platform-select-label"
              id="platform-select"
              value={platform}
              label="Site"
              onChange={handleChangePlatform}
            >
              <MenuItem value={"amazon"}>Amazon Prime</MenuItem>
              <MenuItem value={"disney"}>Disney +</MenuItem>
              <MenuItem value={"hbo"}>HBO Max</MenuItem>
              <MenuItem value={"hulu"}>Hulu</MenuItem>
              <MenuItem value={"netflix"}>Netflix</MenuItem>
              <MenuItem value={"paramount"}>Paramount +</MenuItem>
              <MenuItem value={"crunchyroll"}>Crunchyroll</MenuItem>
              <MenuItem value={"star"}>Star +</MenuItem>
              <MenuItem value={"torrent"}>Torrent</MenuItem>
              <MenuItem value={"pi"}>Pi FanSub</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="filter-buttons">
          <div className="filter-button" onClick={handleMoviesWithFilters}>
            <SearchOutlinedIcon />
            Pesquisar
          </div>
          <div className="filter-button" onClick={handleClearFilters}>
            <BackspaceOutlinedIcon />
            Limpar Filtros
          </div>
        </div>
      </div>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <InfoCard movie={movie} key={index} />
        ))}
        {movies.length === 0 && <h1>Não achei nenhuma Serie 🤔</h1>}
      </div>
    </div>
  );
}

export default Home;
