// 组合子模块
// 封装统一导出的供业务使用的方法
import { createContext, useContext } from "react";
import { CounterStore } from "./counter.Store";
import { ListStore } from "./list.Store";
import LoginStore from "./login.Store";
import TaskStore from "./task.Store";
import UserStore from "./user.Store";
import ChannelStore from "./channel.Store"

import { configure } from "mobx"
configure({
  enforceActions: "never",
})

class RootStore {
	constructor() {
		this.counterStore = new CounterStore();
		this.listStore = new ListStore();
		this.taskStore = new TaskStore();
		this.loginStore = new LoginStore();
		this.userStore = new UserStore();
    this.channelStore = new ChannelStore()
	}
}

const rootStore = new RootStore();
const context = createContext(rootStore);
const useStore = () => useContext(context);

export { useStore };
