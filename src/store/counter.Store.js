import { makeAutoObservable } from "mobx";

// first mobx demo
class CounterStore {
	// 1.定义数据
	count = 0;
	constructor() {
		// 2.把数据弄成响应式
		makeAutoObservable(this);
	}
	// 3.定义action函数（修改数据）
	addCount = () => {
		this.count++;
	};
}


export { CounterStore };
