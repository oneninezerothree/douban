/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-redeclare */
import React, { Component } from 'react';
import Header from '../../components/header/Header.js';
import more from './more.scss';
import fetchJSONP from 'fetch-jsonp';

export default class More extends Component {

    constructor(props){
        super(props);
        this.state={
            list:[],
            load:false,
            page:0
        }
    }

    requestData = () => {
        var biaoti = this.props.match.params.title;
        if(this.props.match.params.title === '豆瓣电影Top250'){
            var api = "https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&start="+this.state.page+"&count=9"
            fetchJSONP(api)
                .then(response=>response.json())
                .then(data=>{
                    if(this.state.page > 0){
                        this.state.list.subjects = [...this.state.list.subjects,...data.subjects] || [];
                    }else{
                        this.setState({
                            load:true,
                            list:data
                        })
                    }
                })
        }else if(this.props.match.params.title === '即将上映的电影'){
            var api = "https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b&start="+this.state.page+"&count=9"
            fetchJSONP(api)
                .then(response=>response.json())
                .then(data=>{
                    if(this.state.page > 0){
                        this.state.list.subjects = [...this.state.list.subjects,...data.subjects] || [];
                    }else{
                        this.setState({
                            load:true,
                            list:data
                        })
                    }
                })
        }else{
           var api = "https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city="+biaoti+"&start="+this.state.page+"&count=9"
            fetchJSONP(api)
                .then(response=>response.json())
                .then(data=>{    
                    if(this.state.page > 0){
                        this.state.list.subjects = [...this.state.list.subjects,...data.subjects] || [];
                    }else{
                        this.setState({
                            load:true,
                            list:data
                        })
                    }
                    
                }) 
            }
        
    }

    componentDidMount(){
        // console.log(this.props.match.params.title);
        this.requestData()
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        this.setState({load:false})
    }

    handleScroll = (e) => {
        // console.log(e.srcElement.scrollingElement.scrollHeight,e.srcElement.scrollingElement.scrollTop,e.srcElement.scrollingElement.clientHeight)
        if(e.srcElement.scrollingElement.scrollTop+e.srcElement.scrollingElement.clientHeight+1 >= e.srcElement.scrollingElement.scrollHeight){
            this.setState({page:this.state.page+1});
            this.requestData()
        }
      }

    xingxing(num){
        var xx = [];
        for(var i=0;i<num;i++){
            xx.push(<span className={more.ratingstarsmallfull} key={i}></span>)
        }
        for(var j=0;j<5-num;j++){
            xx.push(<span className={more.ratingstarsmallgray} key={j+65}></span>)
        }       
        return xx;
    }

    render() {
        if(this.state.load){
            return (
                <div>
                    <Header />
                    <div id={more.moreapp}>
                        <h1>{this.state.list.title}</h1>
                        <section id={more.list} className={more.grid}>
                            
                            {
                                this.state.list.subjects.map((item,index) => {
                                    return (
                                        <a href="https://m.douban.com/movie/subject/1291561/" className={more.item} key={index}>
                                            <div className={more.cover}>
                                                <div className={more.ratio3_4}>
                                                    <img src={item.images.small} alt={item.title} data-x="1080" data-y="1560" className={more.imgshow} style={{"width": "100%"}} />
                                                </div>
                                            </div>
                
                                            <div className={more.info}>
                                                <h3>{item.title}</h3>
                                                <p className={more.rank}>
                                                <span className={more.ratingstars} data-rating="4.7">
                                                    {
                                                        this.xingxing(parseInt(item.rating.stars/10)).map((item,index)=>{
                                                            return item
                                                        })
                                                    }
                                                    {/* 
                                                        <span className={more.ratingstarsmallfull}></span>
                                                        <span className={more.ratingstarsmallfull}></span>
                                                        <span className={more.ratingstarsmallfull}></span>
                                                        <span className={more.ratingstarsmallfull}></span>
                                                        <span className={more.ratingstarsmallfull}></span>
                                                     */}
                                                    </span> 
                                                    <span className={more.fen}>{item.rating.average}</span>
                                                </p>
                                            </div>
                                        </a>
                                    )
                                })
                            }
    
    
    
                            {/* <a href="https://m.douban.com/movie/subject/1291561/" className={more.item}>
                                <div className={more.cover}>
                                    <div className={more.ratio3_4}>
                                        <img src="https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2557573348.jpg" alt="千与千寻" data-x="1080" data-y="1560" className={more.imgshow} style={{"width": "100%"}} />
                                        
                                    </div>
                                </div>
    
                                <div className={more.info}>
                                    <h3>千与千寻 </h3>
                                    <p className={more.rank}>
                                        <span className={more.ratingstars} data-rating="4.7">
                                            <span className={more.ratingstarsmallfull}></span>
                                            <span className={more.ratingstarsmallfull}></span>
                                            <span className={more.ratingstarsmallfull}></span>
                                            <span className={more.ratingstarsmallfull}></span>
                                            <span className={more.ratingstarsmallfull}></span>
                                        </span> 
                                        <span className={more.fen}>9.3</span>
                                    </p>
                                </div>
                            </a> */}
                        </section>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <div>loading......</div>
                </div>
            );
        }
    }
}
