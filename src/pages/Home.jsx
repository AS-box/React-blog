import { Link } from "react-router-dom"; 
export const Home = () => {
	return (
		<div>
			<ul>
				<li><Link to='article/1'>記事1</Link></li>
			</ul>
		</div>
	)
}