import { Link } from "react-router-dom"

export const Home = (props) => {
	return (
		<ul>
			{Object.values(props.data).map((post) => {
				return <li key={post.id}>
					<Link to={`article/${post.id}`} state={{post:post}}>{post.title}</Link>
							</li>
			})}
		</ul>
	)
}