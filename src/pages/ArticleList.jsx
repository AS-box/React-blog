import { ArticleItem } from '../components/ArticleItem';
import SampleImage from '../img/sample.png'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'


export const ArticleList = () => {
	return (
		<>
			<h2>記事一覧</h2>
			<Link to="/article/1">見出し1</Link>
			<Link to="/article/2">見出し2</Link>
			<Routes>
				<Route path="/article/:id" element={ <ArticleItem /> } />
			</Routes>
		</>
	);
}