import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Search from './pages/Search';
import Movie from './pages/Movie';
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<App />} />
				<Route path='/' element={<App />} />
				<Route path='movie/:id' element={<Movie />} />
				<Route path='search' element={<Search />} />
				<Route path='*' element={<h1>404 Page not found</h1>} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
