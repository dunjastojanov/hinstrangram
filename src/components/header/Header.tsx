import { useEffect, useState } from "react";
import { useProfile } from "../../hooks/useProfile";
import "./Header.css";
import { FollowModal } from "./followModal/FollowModal";
import { usePosts } from "../../hooks/usePosts";

export function Header() {
	const profile = useProfile();
	const { getPublishedPosts } = usePosts()

	const [openFollowers, setOpenFollowers] = useState<boolean>(false);
	const [openFollowing, setOpenFollowing] = useState<boolean>(false);
	const [postCount, setPostCount] = useState<number>(0);

	useEffect(() => {
		setPostCount(getPublishedPosts(profile.id).length);
	}, [])


	return (
		<>
			<div id="header">
				<div className="profile-image-container">
					<img className="profile-image" src={profile.profileImageUrl} alt="profile-image" />
				</div>
				<div className="profile-info-container">
					<div className="username">{profile.username}</div>
					<div className="follower-and-post-count">
						<div>
							<div className="count">{postCount}</div>
							<div className="label">Objava</div>
						</div>
						<div className="modal-button" onClick={() => setOpenFollowers(true)}>
							<div className="count">{profile.followers?.length}</div>
							<div className="label">Pratilaca</div>
						</div>
						<div className="modal-button" onClick={() => setOpenFollowing(true)}>
							<div className="count">{profile.following?.length}</div>
							<div className="label">Prati</div>
						</div>

					</div>
					<div className="description">
						{profile.description}
					</div>
				</div>
			</div>

			<FollowModal open={openFollowing} handleClose={() => setOpenFollowing(false)} userIds={profile.following} />
			<FollowModal open={openFollowers} handleClose={() => setOpenFollowers(false)} userIds={profile.followers} />
		</>
	);
}


