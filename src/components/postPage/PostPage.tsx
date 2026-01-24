import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../../hooks/usePosts";
import { useUsers } from "../../hooks/useUsers";
import type { IPost } from "../../interfaces/post";
import type { IProfile } from "../../interfaces/profile";
import { CloseIcon } from "../posts/closeIcon/CloseIcon";
import { Comments } from "../posts/comments/Comments";
import { Likes } from "../posts/likes/Likes";
import { Mentioned } from "../posts/mentioned/Mentioned";
import "./PostPage.css";

export function PostPage() {
	const { id } = useParams();
	const { getPostById } = usePosts();
	const [post, setPost] = useState<IPost | undefined>(undefined);
	const { getUserById } = useUsers();
	const navigate = useNavigate();

	const [poster, setPoster] = useState<IProfile>();
	const [liked, setLiked] = useState(false);

	useEffect(() => {
		if (post) setPoster(getUserById(post.publisherId));
	}, [post])


	useEffect(() => {
		if (id) {
			setPost(getPostById(parseInt(id)));
		}
	}, [id])

	return (
		<div className="post-page">
			{post && <div className="post-page-content">
				<div className="post-page-header">
					<div className="post-page-poster">
						<img className="post-page-poster-profile-image" src={poster?.profileImageUrl} />
						<div>{poster?.username}</div>
					</div>
					<CloseIcon handleClick={() => navigate(-1)} />
				</div>

				<img className="post-page-image" src={"/alexander_the_great.png"} />
				<div className="post-page-like-container">
					{liked === true ?
						<img className="page-like-image" onClick={() => setLiked(false)} src="/heart-filled.svg" /> :
						<img className="page-like-image" onClick={() => setLiked(true)} src="/heart-outline.svg" />
					}
				</div>

				<Comments post={post} />

				<div className="post-page-footer">
					<Mentioned post={post} />
					<Likes post={post} />
				</div>
			</div>}
		</div>
	);
};
