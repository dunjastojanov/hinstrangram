import stories from "../data/stories.json";
import type { IStory } from "../interfaces/story";
import { useUsers } from "./useUsers";

export function useStories() {

	const { getUserById} = useUsers();

	function getStoryById(id: number) {
		const story = stories.find(story => story.id === id) as IStory;
		story.poster = getUserById(story.posterId);
		return story;
	}

	return {
		stories: stories as Array<IStory>,
		getStoryById
	}

}