import type { IProfile } from "./profile";

export interface IStory {
	id: number;
	imageUrl: string;
	posterId: number;
	poster?: IProfile;
};