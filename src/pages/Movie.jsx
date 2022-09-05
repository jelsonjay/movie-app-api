import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
	BsGraphUp,
	BsWallet2,
	BsHourglassSplit,
	BsFillFileEarmarkTextFill
} from 'react-icons/bs';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

import '../MovieDetails.css';

const filmsUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);

	const getFilm = async url => {
		const res = await fetch(url);
		const data = await res.json();

		setMovie(data);
	};

	const formatCurrency = currencySymbol => {
		return currencySymbol.toLocaleString('en', {
			style: 'currency',
			currency: 'GBP'
		});
	};

	useEffect(() => {
		const filmUrl = `${filmsUrl}${id}?${apiKey}`;
		getFilm(filmUrl);
	}, []);

	return (
		<>
			<Navbar />
			<div className='page-details'>
				{movie && (
					<>
						<Card movie={movie} showBtn={false} />
						<p className='tagline'>{movie.taline}</p>
						<div className='info'>
							<h3>
								<BsHourglassSplit /> Duration:
							</h3>
							<p>{movie.runtime} minutes</p>
						</div>
						<div className='info'>
							<h3>
								<BsWallet2 /> Budget:
							</h3>
							<p>{formatCurrency(movie.budget)}</p>
						</div>
						<div className='info'>
							<h3>
								<BsGraphUp /> Revenue:
							</h3>
							<p>{formatCurrency(movie.revenue)}</p>
						</div>
						<div className='info-desc'>
							<h3>
								<BsFillFileEarmarkTextFill /> Description:
							</h3>
							<p>{movie.overview}</p>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Movie;
