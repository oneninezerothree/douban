import React from 'react';
import { connect } from 'dva';
import './search.css';
class search extends React.Component {
constructor(){
super()
this.state={
	keyword:''
}
}

  hanldeDown(event) {
        // console.log("keyDown", event.charCode, event.keyCode, event.key,event)
		if(event.keyCode === 13){
			this.props.history.push({ pathname: `/searchDetails/${this.state.keyword}` });
		}
    }
	getKeyWord(val) {
		// console.log(val.target.value)
		this.setState({
		    keyword: val.target.value
		})
	}

render() {
return (
<header className="TalionNav is-active">
	<div className="TalionNav-secondary"><a href="" className="close-nav">关闭</a>
			<div className="searchInput"><input name="query" type="text" onChange={value => this.getKeyWord(value)}  onKeyDown={(e)=>{this.hanldeDown(e)}}/></div>
		<ul>
			<li>
				<div>
					<strong style={{color:"rgb(35, 132, 232)"}}>电影</strong><span>影院热映</span>
					<strong style={{color:"rgb(230, 70, 126)"}}>同城</strong><span>周末活动</span>
					<strong style={{color:"rgb(159, 120, 96)"}}>阅读</strong><span>电子书</span>
					<strong  style={{color:"rgb(225, 100, 77)"}}>广播</strong><span>友邻动态</span>
				</div>
			</li>
			<li>
				<div>
					<strong style={{color:"rgb(122, 106, 219)"}}>电视</strong><span>正在热播</span>
					<strong style={{color:"rgb(42, 184, 204)"}}>小组</strong><span>志趣相投</span>
					<strong style={{color:"rgb(87, 116, 197)"}}>游戏</strong><span>虚拟世界</span>
					<strong  style={{color:"rgb(64, 207, 169)"}}>FM</strong><span>红心歌单</span>
				</div>
			</li>
			<li>
				<div>
					<strong style={{color:"rgb(159, 120, 96)"}}>图书</strong><span>畅销排行</span>
					<strong  style={{color:"rgb(244, 143, 46)"}}>音乐</strong><span>新碟榜</span>
					<strong style={{color:"rgb(89, 108, 221)"}}>应用</strong><span>玩手机</span>
					<strong style={{color:"rgb(66, 189, 86)"}}>豆品</strong><span>生活美学</span>
				</div>
			</li>
		</ul>
		<div className="navBottom">
			<div className="nav-item">
				<a className="toLogin" href="">登录豆瓣</a>
			</div>
			<div className="nav-item">
				<a className="toPC" href="">使用桌面版</a>
				<a href="" className="toApp">使用豆瓣App</a>
			</div>
		</div>
	</div>
</header>

)
}

}

search.propTypes = {
};

export default connect((state) => {
return state
})(search);
