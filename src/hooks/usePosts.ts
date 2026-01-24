import posts from "../data/posts.json";
import type { IPost } from "../interfaces/post";

export function usePosts() {
	const getPublishedPosts = (userId: number) => posts.filter(post => post.publisherId === userId) as Array<IPost>;

	const getSavedPosts = (userId: number) => posts.filter(post => post.publisherId !== userId) as Array<IPost>;

	const getPostById = (id: number) => posts.find(post => post.id === id) as IPost;

	return {
		posts: posts as Array<IPost>,
		getPublishedPosts,
		getSavedPosts,
		getPostById
	};
	
}