import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";
import uuid from "react-uuid";
import "./index.css";

function Task() {
	const { taskStore } = useStore();
	const handleCheckedChange = (e, value) => {
		console.log(e.target.checked, value);
		taskStore.singleCheck(e.target.checked, value);
	};
	// 全选e
	const handleCheckAllChange = (e) => {
		taskStore.allCheck(e.target.checked);
	};

	// 删除
	const delTask = (id) => {
		taskStore.delTask(id);
	};

	// 新增
	const [taskValue, setTaskValue] = useState("");
	const addTask = (e) => {
		if (e.keyCode === 13) {
			taskStore.addTask({
				id: uuid(),
				name: taskValue,
				isDone: false,
			});
		}
    setTaskValue('')
	};
	return (
		<section className="todoapp">
			<header className="header">
				<h1>todos</h1>
				{/* 新增输入框 */}
				<input
					type="text"
					className="new-todo"
					autoFocus
					value={taskValue}
					onChange={(e) => setTaskValue(e.target.value)}
					onKeyUp={addTask}
					autoComplete="off"
					placeholder="what needs to be done?"
				/>
			</header>
			<section className="main">
				{/* 全选 */}
				<input
					type="checkbox"
					id="toggle-all"
					className="toggle-all"
					checked={taskStore.isAll}
					onChange={handleCheckAllChange}
				/>
				<label htmlFor="toggle-all"></label>
				<ul className="todo-list">
					{taskStore.list.map((item) => (
						<li
							className={item.isDone ? "todo completed" : "todo"}
							key={item.id}
						>
							<div className="view">
								<input
									type="checkbox"
									className="toggle"
									checked={item.isDone}
									onChange={(e) => handleCheckedChange(e, item.id)}
								/>
								<label>{item.name}</label>
								<button className="destrory" onClick={() => delTask(item.id)}>
									x
								</button>
							</div>
						</li>
					))}
				</ul>
			</section>
      <footer className="footer">
        <span className="todo-count">
          任务总数：{taskStore.list.length} 已完成{taskStore.isFinishedLength}
        </span>
      </footer>
		</section>
	);
}

export default observer(Task);
