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
        if(biaoti == '豆瓣电影Top250'){
            var api = "https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=9"
            fetchJSONP(api)
                .then(response=>response.json())
                .then(data=>{
                    this.setState({
                        load:true,
                        list:data
                    })
                    console.log(this.state.list)
                })
        }else if(biaoti == '即将上映的电影'){
            var api = "https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=9"
            fetchJSONP(api)
                .then(response=>response.json())
                .then(data=>{
                    this.setState({
                        load:true,
                        list:data
                    })
                    console.log(this.state.list)
                })
        }else{
           var api = "https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city="+biaoti+"&start=0&count=9"
            fetchJSONP(api)
                .then(response=>response.json())
                .then(data=>{
                    this.setState({
                        load:true,
                        list:data
                    })
                    console.log(this.state.list)
                }) 
            }
        
    }

    componentDidMount(){
        console.log(this.props.match.params.title);
        this.requestData()
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        console.log(window.scrollY,window.innerHeight,window.scrollHeight)
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
                                                        <span className={more.ratingstarsmallfull}></span>
                                                        <span className={more.ratingstarsmallfull}></span>
                                                        <span className={more.ratingstarsmallfull}></span>
                                                        <span className={more.ratingstarsmallfull}></span>
                                                        <span className={more.ratingstarsmallfull}></span>
                                                    </span> 
                                                    <span className={more.fen}>9.3</span>
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
