import { useParams } from 'react-router-dom';
export const ArticleItem = (props) => {
	const params = useParams()
	console.log(params)
	return (
		<p>あーてぃくる{ params.id}</p>
	);
} 