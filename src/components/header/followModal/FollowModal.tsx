import { useEffect, useState } from "react";
import { useUsers } from "../../../hooks/useUsers";
import type { IProfile } from "../../../interfaces/profile";
import { Modal } from "../../modal/Modal";
import { CloseIcon } from "../../posts/closeIcon/CloseIcon";
import "./FollowModal.css";


export function FollowModal({ open, handleClose, userIds }: { open: boolean; handleClose: () => void; userIds?: number[]; }) {
	const [users, setUsers] = useState<IProfile[]>([]);

	const { getUserById } = useUsers();

	useEffect(() => {
		if (userIds) {
			setUsers(userIds.map(id => getUserById(id)));
		}
	}, [userIds]);

	return (<>
		{users &&
			<Modal open={open}>
				<div className="follow-modal">

					<div className="follow-modal-header"><CloseIcon handleClick={handleClose} /></div>

					<div className="follow-modal-body">
						{users.map(user => {
							return (
								<div className="follow-modal-user" key={user.id}>
									<img className="follow-modal-user-profile-image" src={user.profileImageUrl} />
									<div className="follow-modal-user-username">{user.username}</div>
								</div>
							);
						})}
					</div>
				</div>
			</Modal>}
	</>
	);
}
