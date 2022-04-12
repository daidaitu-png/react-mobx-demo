import { Button, Card, Checkbox, Form, Input, message } from "antd";
import logo from "@/assets/logo.png";
import React from "react";
import "./index.scss";
import { useStore } from "@/store";
import { useNavigate } from "react-router";

export default function Login() {
	const { loginStore } = useStore();
	const navigate = useNavigate();

	const onFinish = async (values) => {
		console.log(values);
		try {
			await loginStore.getToken({
				mobile: values.username,
				code: values.password,
			});
			// 跳转首页
			navigate("/", { replace: true });
			// 提示用户
			message.success("登录成功");
		} catch (error) {
			message.error(error.response?.data?.message || "登录成功");
		}
	};
	const onFinishFailed = () => {};
	return (
		<div className="login">
			<Card className="login-container">
				<img className="login-logo" src={logo} alt="" />
				<Form
					// 子项中用到的触发事件 Form中需要声明一下
					validateTrigger={["onBlur", "onChange"]}
					initialValues={{
						remember: true,
            username: '13811111111',
            password: '246810'
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: "请输入手机号",
							},
							{
								pattern: /^1[3-9]\d{9}$/,
								message: "请输入正确的手机号",
								validateTrigger: "onBlur",
							},
						]}
					>
						<Input size="large" placeholder="请输入手机号" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{ required: true, message: "请输入密码" },
							{
								len: 6,
								message: "密码长度必须大于6",
								validateTrigger: "onBlur",
							},
						]}
					>
						<Input size="large" placeholder="请输入验证码" autoComplete="off" />
					</Form.Item>
					<Form.Item name="remember" valuePropName="checked">
						<Checkbox className="login-checkbox-label">
							我已阅读并同意用户协议和隐私条款
						</Checkbox>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" size="large" block>
							登录
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
}
