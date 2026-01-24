import comments from "../data/comments.json";
import type { IComment } from "../interfaces/comment";
import { useUsers } from "./useUsers";

export function useComments() {

	const { getUserById } = useUsers();

	const getCommentsByPostId = (postId: number) => {
		return comments.filter(comment => comment.postId === postId).map(comment => {
			return {
				...comment,
				commenter: getUserById(comment.commenterId)}
		});
	};

	return {
		comments: comments as Array<IComment>,
		getCommentsByPostId
	};
	
}