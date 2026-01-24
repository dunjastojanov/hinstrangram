export interface IPost {
	id: number;
	publisherId: number;
	imageUrl: string;
	description: string;
	likes: Array<number>;
	mentioned: Array<number>;
}