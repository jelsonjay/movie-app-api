import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import './Movies.css';

const serachUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
	const [searchParams] = useSearchParams();
	const [films, setFilms] = useState([]);
	const query = searchParams.get('q');

	const getSearchedFilms = async e => {
		const res = await fetch(e);
		const data = await res.json();

		setFilms(data.results);
	};

	useEffect(() => {
		const searchQueryUrl = `${serachUrl}?${apiKey}&query=${query}`;
		getSearchedFilms(searchQueryUrl);
	}, [query]);

	return (
		<div className='container'>
			<Navbar />
			<h2 className='title'>
				Results to: <span className='query-title'>{query}</span>
			</h2>
			<div className='film-contant'>
				{films.length === 0 && <h2>Loading....</h2>}
				{films.length > 0 &&
					films.map(movie => <Card key={movie.id} movie={movie} />)}
			</div>
		</div>
	);
};

export default Search;
