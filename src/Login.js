import React from "react";
import { useNavigate } from "react-router";

export default function Login() {
	const navigate = useNavigate();
	const goAbout = () => {
		navigate("/about?id=1234&name=zhangsan", { replace: true });
	};
  const goHome = () => {
		navigate("/1234", { replace: true });
	};
	return (
		<div>
			Login
			<button onClick={goAbout}> to about</button>
      <button onClick={goHome}> to home</button>
		</div>
	);
}
