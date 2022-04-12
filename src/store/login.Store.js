const { http, getToken, setToken, removeToken } = require("@/utils");
const { makeAutoObservable } = require("mobx");

class LoginStore {
	// 取token
	token = getToken() || "";
	constructor() {
		makeAutoObservable(this);
	}
	getToken = async ({ mobile, code }) => {
		// 调用登录api
		const res = await http.post("http://geek.itheima.net/v1_0/authorizations", {
			mobile,
			code,
		});
		// 存入token
		this.token = res.data.token;
		console.log(res.data);
		// 存入localStorage
		setToken(this.token);
	};

	loginOut = () => {
		this.token = "";
		removeToken();
	};
}

export default LoginStore;
