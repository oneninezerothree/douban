import React from 'react';
import { connect } from 'dva';
import fetchJSONP from 'fetch-jsonp'
import './searchDetails.css';

class searchDetails extends React.Component {
constructor(){
super()
this.state={
	list:[],
	keyWord:''
}
}
componentDidMount(){
// console.log(this.props.location.state)
}

changList() {
	this.getList(`http://v.juhe.cn/movie/index?title=${this.refs.keyText.value}&key=b151b1f4a3573de9a3d17d4f0243479c&smode=0`)
}

render() {
return (
<div className="search">
	<header className="search-hd">
			<input type="text" ref="keyText" placeholder="电影" onKeyDown={(e)=>{
				console.log(e.keyCode)
				if(e.keyCode===13){
					this.changList()
			}}}/>
			<button className="button-search" id="button-search" onClick={(this.changList).bind(this)}>搜索</button>
	</header>
	<ul className="movielist">
		{this.state.list.map((item,index)=>{
			return(
				<li className="movielist-li" key={index}>
						<div className="imgBox">
							<img className="movieImg" src={item.poster} alt=""/>
						</div>
						<div className="movieText">
							<h3 className="movietitle">{item.title}</h3>
							<p className="movieSource">
								<span className="country">{item.country}</span>
								<span className="language">{item.language}</span>
							</p>
							<p className="describe"><span>主演:</span>{item.actors}</p>
							<span className="year"><i>上映年份: </i>{item.year}</span>
						</div>
				</li>
			)
		})}
	</ul>
</div>
)
}

 getList(url){
	var _this = this
	 fetchJSONP(url).then(function(response) {
	     return response.json()
	   }).then(function(json) {
	 			 console.log(_this)
				console.log(json.result); // 在此处进行接收数据之后的操作
				_this.setState({
	 		   	list: json.result,
	 		   })
	   }).catch(function(ex) {
	     console.log('parsing failed', ex) // 此处是数据请求失败后的处理
	   })
 }
componentDidMount() {
		let keyWord = this.props.match.params.keyword
		this.getList(`http://v.juhe.cn/movie/index?title=${keyWord}&key=b151b1f4a3573de9a3d17d4f0243479c&smode=0`)
	   
}

}

searchDetails.propTypes = {
	
};

export default connect((state) => {
return state
})(searchDetails);
