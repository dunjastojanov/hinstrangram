export interface IProfile {
	id: number;
	username: string;
	profileImageUrl: string;
	description?: string;
	followers?: Array<number>;
	following?: Array<number>;
}