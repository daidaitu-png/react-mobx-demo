import React from "react";
import { useSearchParams } from "react-router-dom";

export default function About() {
	const [params] = useSearchParams();
	const id = params.get("id");
	const name = params.get("name");
	return (
		<div>
			About-{id}-{name}
		</div>
	);
}
