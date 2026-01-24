import type { IProfile } from "./profile";

export interface IComment {
	id: number;
	postId: number;
	comment: string;
	commenterId: number;
	commenter?: IProfile;
}