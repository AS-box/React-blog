import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
export const Article = (props) => {
	const params = useParams()
	const location = useLocation();
	const { post } = location.state;
	return (
		<>
			<h2>{post.title}</h2>
			<p>{post.time}</p>
			<p>{post.text}</p>
			
		</>
	);
} 