import { useParams } from 'react-router-dom';
export const ArticleItem = (props) => {
	const params = useParams()
	return (
		<p>あーてぃくる{ params.id}</p>
	);
} 