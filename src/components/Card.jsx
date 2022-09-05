import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const imgUrl = import.meta.env.VITE_IMG;

const Card = ({ movie, showBtn = true }) => {
	return (
		<div className='card'>
			<img src={imgUrl + movie.poster_path} alt={movie.title} />
			<h2>{movie.title}</h2>
			<p>
				<FaStar /> {movie.vote_average}
			</p>

			{showBtn && <Link to={`/movie/${movie.id}`}>Read More</Link>}
		</div>
	);
};

export default Card;
