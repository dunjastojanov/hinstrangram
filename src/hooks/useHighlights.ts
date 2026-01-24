import highlights from "../data/highlights.json";
import type { IHighlight } from "../interfaces/highlight";
import { useStories } from "./useStories";

export function useHighlights() {
	const { getStoryById } = useStories();

	return {
		highlights: (highlights as Array<IHighlight>).map(highlight => ({
			...highlight,
			cover: getStoryById(highlight.coverId),
			stories: highlight.storyIds.map(getStoryById)
		})) as Array<IHighlight>
	}
}