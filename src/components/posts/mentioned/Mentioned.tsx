import { useUsers } from "../../../hooks/useUsers";
import type { IPost } from "../../../interfaces/post";
import "./Mentioned.css";

export function Mentioned({ post }: { post: IPost; }) {
	const { getUserById } = useUsers();

	return (<>{post.mentioned.length > 0 && <div className="mentioned">
		{post.mentioned.length === 1 ? "Korisnik " : "Korisnici "}
		<b>{post.mentioned.map(id => getUserById(id)?.username).join(", ")}</b>
		{post.mentioned.length === 1 ? " se nalazi na ovoj objavi" : " se nalaze na ovoj objavi"}
	</div>}</>);
}
