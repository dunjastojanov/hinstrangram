import { useUsers } from "../../../hooks/useUsers";
import type { IPost } from "../../../interfaces/post";
import "./Likes.css";

export function Likes({ post }: { post: IPost; }) {
	const { users } = useUsers();

	const likes = users.filter(user => post.likes.includes(user.id)).slice(0, 2);
	const numberOfOtherLikes = post.likes.length > 3 ? post.likes.length - 2 : 0;

	return (
		<div className="likes">
			Sviđa se {likes.length === 1 ? "korisniku " : "korisnicima "}
			<b>{likes.map(user => user.username).join(", ")}</b>
			{numberOfOtherLikes > 0 && ` i još ${numberOfOtherLikes} ${numberOfOtherLikes === 1 ? "korisniku" : "korisnika"}`}
		</div>
	);
}
