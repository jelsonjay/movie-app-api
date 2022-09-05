import { useState, useEffect } from 'react';
import Card from '../components/Card';
import './Movies.css';
const filmUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
	const [film, setFilm] = useState([]);

	const getFilm = async e => {
		const res = await fetch(e);
		const data = await res.json();

		setFilm(data.results);
		console.log(data.results);
	};

	useEffect(() => {
		const filmTop = `${filmUrl}top_rated?${apiKey}`;
		getFilm(filmTop);
	}, []);

	return (
		<div className='container'>
			<h1 className='title'>Best Films</h1>
			<div className='film-contant'>
				{film.length === 0 && <h2>Loading....</h2>}
				{film.length > 0 &&
					film.map(movie => <Card key={movie.id} movie={movie} />)}
			</div>
		</div>
	);
};

export default Home;
