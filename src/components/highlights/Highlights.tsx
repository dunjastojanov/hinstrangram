import { useHighlights } from "../../hooks/useHighlights";
import "./Highlights.css";
import { Highlight } from "./highlight/Highlight";
export function Highlights() {

	const { highlights } = useHighlights();

	return (
		<div id="highlights">
			{
				highlights.map(highlight =>
					<Highlight key={highlight.id} highlight={highlight} />
				)
			}
		</div>
	);
}

