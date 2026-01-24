import { useEffect, useState } from "react";
import "./Posts.css";
import type { IPost } from "../../interfaces/post";
import { useProfile } from "../../hooks/useProfile";
import { usePosts } from "../../hooks/usePosts";
import { PostGrid } from "./postGrid/PostGrid";

export function Posts() {
	const profile = useProfile();

	const {
		getPublishedPosts,
		getSavedPosts
	} = usePosts();

	const [publishedPosts, setPublishedPosts] = useState<IPost[]>([]);
	const [savedPosts, setSavedPosts] = useState<IPost[]>([]);
	const [selectedTab, setSelectedTab] = useState<"published" | "saved">("published");

	useEffect(() => {
		setPublishedPosts(getPublishedPosts(profile.id));
		setSavedPosts(getSavedPosts(profile.id));
	}, [profile.id])

	const handleTabChange = (tab: "published" | "saved") => {
		setSelectedTab(tab);
	}

	return (
		<div id="posts">
			<div id="posts-nav">
				<div className={`tab-button ${selectedTab === "published" && "selected"}`} onClick={() => handleTabChange("published")}><img src="/grid.svg"></img></div>
				<div className={`tab-button ${selectedTab === "saved" && "selected"}`} onClick={() => handleTabChange("saved")}><img src="/save.svg"></img></div>
			</div>

			{selectedTab === "published" && <div id="posts-published">
				<PostGrid posts={publishedPosts} />
			</div>}
			{selectedTab === "saved" && <div id="posts-saved">
				<PostGrid posts={savedPosts} />
			</div>}

		</div>
	);
}


