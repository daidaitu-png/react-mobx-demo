import React from "react";
import { useParams } from "react-router";

const Home = () => {
	const params = useParams();
	return <div>Home-{params.id}</div>;
};

export default Home;
