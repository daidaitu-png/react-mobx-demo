import { observer } from "mobx-react-lite";
import { useStore } from "./store";
import Todo from "./Todo";

function App() {
	const { counterStore, listStore } = useStore();
	return (
		<div className="App">
			{counterStore.count}
			<button onClick={counterStore.addCount}> + </button>
			<br />
			{listStore.list.join(" ")}
			<button onClick={listStore.addList}>add Angular</button>
			<Todo />
		</div>
	);
}

export default observer(App);
