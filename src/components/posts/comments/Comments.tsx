import { useState, useEffect } from "react";
import { useComments } from "../../../hooks/useComments";
import type { IComment } from "../../../interfaces/comment";
import type { IPost } from "../../../interfaces/post";
import { Comment } from "../comment/Comment";
import "./Comments.css";

export function Comments({ post }: { post: IPost; }) {
	const { getCommentsByPostId } = useComments();

	const [comments, setComments] = useState<IComment[]>([]);

	useEffect(() => {
		setComments(getCommentsByPostId(post.id));
	}, [post.id]);


	return (<div className="comments">
		{comments.map(comment => <Comment key={comment.id} comment={comment} />)}
	</div>
	);

}
