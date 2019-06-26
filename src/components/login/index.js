import React from 'react';
import { connect } from 'dva';
import './login.css';
import axios from 'axios';

class login extends React.Component {
	constructor(){
		super()
		this.state={
		username:null,
		psw:null,
	}
	this.login = this.login.bind(this);
	}
	
render() {
return (
<div id="account">
	<div  className="account-body">
		<h1 className="account-body-title login-label-phone">
			<a className="cancel icon login-cancel"></a>
			<span className="account-body-text">登录</span>
			<span className="account-body-tips">登录注册表示同意 <a  href="https://accounts.douban.com/passport/agreement">豆瓣使用协议、隐私政策</a></span>
		</h1>
		<div className="account-form">
			<fieldset>
				<div className="account-form-group-fields account-form-account" id="tmpl_login_phone">
					<div className="account-form-field account-form-field-first">
						<input type="text" onChange={value => this.getUsername(value)}  name="username" maxLength="13" className="account-form-input" placeholder="请输入您的账号" tabIndex="1" />
					</div>
					<div className="account-form-field">
						<input type="password" name="code"  className="account-form-input account-form-input-code" placeholder="请输入您的密码"
						 tabIndex="2" onChange={value => this.getPsw(value)} />
					</div>
				</div>
				<div className="account-form-field-submit">
					<button className="btn-active" onClick={this.login}>登录</button>
				</div>
				<div className="account-form-ft">
					<div className="account-form-switch ">
						<a className="login-label-account " onClick={()=>{
							this.props.history.push({ pathname: "register"}) 

						}}>去注册</a>
					</div>
				</div>
				<div className="account-form-3rd">
					<div className="account-form-3rd-hd">第三方登录</div>
					<div className="account-form-3rd-bd">
						<a className="link-3rd-wb link-3rd-wb-on" target="_top" title="用微博登录">Weibo</a>
						<a className="link-3rd-wx link-3rd-wx-on" target="_top" title="用微信登录">Wechat</a>
					</div>
				</div>
			</fieldset>
		</div>
	</div>

</div>
)
}
	getUsername(val) {
          this.setState({
              username: val.target.value
          })
      }
	  getPsw(val) {
	        this.setState({
	            psw: val.target.value
	        })
	    }
		login(){
			if(this.state.username&&this.state.psw){
				axios
					.get(`https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5 &phone=${this.state.username}&passwd=${this.state.psw}`)
					.then(response => {
						console.log(response.data.msg);
						if (response.data.msg === '成功!') {
							console.log(response.data.data.name);
							this.props.history.push( '/',null)
						} else {
							alert(response.data.msg);
						}
					})
					.catch(error => {
						console.log(error);
					});
			}else{
				alert('账号或密码不能为空!');
			}
		}
	
}

login.propTypes = {
};

export default connect((state) => {
return state
})(login);
