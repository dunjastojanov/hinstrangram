import type { IStory } from "./story";

export interface IHighlight {
	id: number;
	title: string;
	coverId: number;
	cover?: IStory; 
	storyIds: Array<number>;
	stories?: Array<IStory>;
}