import { useState } from "react";
import type { IHighlight } from "../../../interfaces/highlight";
import { Modal } from "../../modal/Modal";
import "./Highlight.css";
import { CloseIcon } from "../../posts/closeIcon/CloseIcon";


export function Highlight({ highlight }: { highlight: IHighlight; }) {
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	return (<>
		<div className="highlight" onClick={() => setOpen(true)}>
			<img className="highlight-cover" src={highlight.cover?.imageUrl} alt="" />
			<div className="highlight-title">{highlight.title}</div>
		</div>

		<Modal open={open}>
			<div className="hightlight-modal">

				{highlight.stories?.map(story => {
					return (<>{index === highlight.stories?.indexOf(story) && <div className="story" key={story.id}>
						<div className="story-header">
							<div className="story-navigation">
								{highlight.stories?.map((story, i) =>
									<div className={`story-navigation-item ${i === index && "active"}`} onClick={() => setIndex(i)} key={story.id}></div>)
								}
							</div>
							<div className="story-poster-container">
								<div className="story-poster">
									<img className="story-poster-profile-image" src={story.poster?.profileImageUrl} />
									<div>{story.poster?.username}</div>
								</div>
								<CloseIcon handleClick={() => setOpen(false)} />
							</div>

						</div>

						<div>
							<img className="story-image" src={story.imageUrl} />
						</div>

						{highlight.stories && <div className="story-footer">
							{index > 0 && <div onClick={() => setIndex(index - 1)}><img src="/previous.svg" /></div>}
							{index < highlight.stories?.length - 1 && <div onClick={() => setIndex(index + 1)}><img src="/next.svg" /></div>}
						</div>}
					</div>}</>)
				})}
			</div>
		</Modal>
	</>);
}
