import type { IPost } from "../../../interfaces/post";
import { Post } from "../post/Post";
import "./PostGrid.css"

export function PostGrid({ posts }: { posts: Array<IPost>; }) {
	return (
		<div id="posts-grid">
			{posts.map(post => <Post key={post.id} post={post} />)}
		</div>);
}
