import { useState, useEffect } from "react";
import "./Post.css";
import { useUsers } from "../../../hooks/useUsers";
import type { IPost } from "../../../interfaces/post";
import type { IProfile } from "../../../interfaces/profile";
import { Modal } from "../../modal/Modal";
import { CloseIcon } from "../closeIcon/CloseIcon";
import { Comments } from "../comments/Comments";
import { Likes } from "../likes/Likes";
import { Mentioned } from "../mentioned/Mentioned";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";


export function Post({ post }: { post: IPost; }) {
	const { getUserById } = useUsers();
	const navigate = useNavigate();
	const isMobile = useMediaQuery({ maxWidth: 600 });

	const [open, setOpen] = useState(false);
	const [poster, setPoster] = useState<IProfile>();
	const [liked, setLiked] = useState(false);

	useEffect(() => {
		setPoster(getUserById(post.publisherId));
	}, [post.publisherId]);

	const handleOpen = () => {
		if (!isMobile) {
			setOpen(true);
		} else {
			navigate(`/post/${post.id}`);
		}
	}

	return (<>
		<div onClick={handleOpen} className="post">
			<img className="post-image" src={post.imageUrl} />
		</div>

		<Modal open={open}>
			<div className="post-modal">
				<img className="post-modal-image" src={post.imageUrl} />
				<div className="post-modal-content">
					<div className="post-modal-header">
						<div className="post-modal-poster">
							<img className="post-modal-poster-profile-image" src={poster?.profileImageUrl} />
							<div>{poster?.username}</div>
						</div>
						<CloseIcon handleClick={() => setOpen(false)} />
					</div>

					<Comments post={post} />

					<div className="post-footer">
						<div>
							{liked === true ?
								<img className="like-image" onClick={() => setLiked(false)} src="/heart-filled.svg" /> :
								<img className="like-image" onClick={() => setLiked(true)} src="/heart-outline.svg" />
							}
						</div>

						<Mentioned post={post} />
						<Likes post={post} />
					</div>

				</div>
			</div>
		</Modal>
	</>);
}


