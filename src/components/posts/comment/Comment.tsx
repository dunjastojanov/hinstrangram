import type { IComment } from "../../../interfaces/comment";
import "./Comment.css";

export function Comment({ comment }: { comment: IComment; }) {
	return (<>{comment.commenter &&
		<div className="comment">
			<img className="commenter-profile-image" src={comment.commenter.profileImageUrl} />
			<div className="comment-body">
				<div className="comment-text"><b>{comment.commenter.username}</b> {comment.comment}</div></div>
		</div>}
	</>);
}
