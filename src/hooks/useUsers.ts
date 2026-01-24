import users from "../data/users.json";
import type { IProfile } from "../interfaces/profile";


export function useUsers() {

	const getUserById = (id: number) => users.find(user => user.id === id) as IProfile;

	return {
		users: users as Array<IProfile>,
		getUserById,
	};
}