import React, { Component } from 'react'
import movie from './movie.scss';
import {Link} from 'dva/router';
import fetchJSONP from 'fetch-jsonp'

export default class Movie extends Component {

    constructor(props){
        super(props);
        this.state={
            movieList:[],
            list:[],
            xingxing:[]
        }
    }

    requestData = () => {
        // "https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=广州&start=0&count=10"
        fetchJSONP("https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=广州&start=0&count=10")
            .then(response=>response.json())
            .then(data=>{
                this.state.movieList.push(data);
                // this.setState({movieList:[data]})
                this.setState({movieList:this.state.movieList})
            })
        fetchJSONP("https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=10")
        .then(response=>response.json())
        .then(data=>{
            this.state.movieList.push(data);
            this.setState({movieList:this.state.movieList})
        }) 
        
        fetchJSONP("https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=10")
        .then(response=>response.json())
        .then(data=>{
            this.state.movieList.push(data);
            this.setState({movieList:this.state.movieList})
            console.log(this.state.movieList)
        })
        
    }

    componentDidMount(){
        this.requestData();
    }

    xingxing(num){
        var xx = [];
        for(var i=0;i<num;i++){
            xx.push(<span className={movie.ratingstarsmallfull} key={i+1}></span>)
        }
        for(var j=0;j<5-num;j++){
            xx.push(<span className={movie.ratingstarsmallgray} key={j+6546}></span>)
        }    

        return xx;
    }

    render() {
        return (
            <div className={movie.moviepage}>
                <div className={movie.moviecard}>
                    {                    
                        this.state.movieList.map((item,index)=>{
                            return(
                                <section id="movie_showing" key={index}>
                                    <header>
                                        <h2>{item.title}</h2>
                                        <Link to={`/movie/more/${item.title}`}>更多</Link>
                                    </header>    
                                    <div className={movie.sectioncontent}>
                                        <ul className={movie.row}>
                                            {
                                                item.subjects.map((item,index)=>{
                                                    return(
                                                        <li className={movie.item} key={index}>
                                                            <a href="/movie/subject/1291561?refer=home">
                                                                <div className={movie.itemposter} style={{"backgroundImage": `url(${item.images.large})`}}></div>
                                                                <span className={movie.itemtitle}>{item.title}</span>
                                                                <div className={movie.itemrating}>
                                                                    <div className={movie.rank}>
                                                                <span className={movie.ratingstars} data-rating="4.7">
                                                                    {
                                                                        this.xingxing(parseInt(item.rating.stars/10)).map(item=>{
                                                                            return item
                                                                        })
                                                                    }
                                                                </span> 
                                                                <span className={movie.fen}>{item.rating.average}</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                            
                                        </ul>
                                    </div>       
                                </section>
                            )
                        })
                    }
                    <section className={movie.interests}>
                        <header>
                            <h2>发现好电影</h2>
                        </header>
                        <div className={movie.sectioncontent}>                             
                            <ul>  
                                <li style={{borderColor:'#4F9DED'}}>
                                    <a href="https://m.douban.com/doulist/968362/" style={{color:'#4F9DED'}}>同时入选IMDB250和豆瓣电影250的电影</a>
                                </li>
                                <li style={{borderColor: '#FF4055'}}>
                                    <a href="https://m.douban.com/doulist/16002/" style={{color: '#FF4055'}}>带你进入不正常的世界</a>
                                </li>
                                <li style={{borderColor: '#2384E8'}}>
                                    <a href="https://m.douban.com/doulist/190343/" style={{color: '#2384E8'}}>用电【影】来祭奠逝去的岁月</a>
                                </li>
                                <li style={{borderColor: '#FFC46C'}}>
                                    <a href="https://m.douban.com/doulist/1125971/" style={{color: '#FFC46C'}}>女孩们的故事【电影】</a>
                                </li>
                                <li className={movie.line}></li>
                                <li style={{borderColor: '#42BD56'}}>
                                    <a href="https://www.douban.com/doubanapp/dispatch?copy_open=1&amp;from=mdouban&amp;download=1&amp;model=B&amp;copy=1&amp;page=movie&amp;channel=card_find_movie&amp;uri=%2Fmovie%2Ftag" style={{color: '#42BD56'}}>
                                        使用 App 【找电影】功能
                                    </a>
                                </li>
                                <li style={{borderColor: '#42BD56'}}>
                                    <a href="https://m.douban.com/doulist/4253902/" style={{color: '#42BD56'}}>科幻是未来的钥匙。【科幻题材佳作·收藏必备】</a>
                                </li> 
                                <li style={{borderColor: '#3BA94D'}}>
                                    <a href="https://m.douban.com/doulist/121326/" style={{color: '#3BA94D'}}>美国生活面面观</a>
                                </li>
                                <li style={{borderColor: '#FFAC2D'}}>
                                    <a href="https://m.douban.com/doulist/37479562/" style={{color: '#FFAC2D'}}>2015终极期待</a>
                                </li>
                                <li style={{borderColor: '#CC3344'}}>
                                    <a href="https://m.douban.com/doulist/458087/" style={{color: '#CC3344'}}>经典韩国电影——收集100部</a>
                                </li> 
                            </ul>

                            
                        </div>
                    </section>

                    <section className={movie.types}>
                        <header>
                            <h2>分类浏览</h2>
                        </header>
                        <div className={movie.sectioncontent}>
                            <ul className={movie.typelist}>
                                <li><a href="/movie/classic">经典<span></span></a></li>
                                <li><a href="/movie/underrated">冷门佳片<span></span></a></li>
                                <li><a href="/movie/doubantop">豆瓣高分<span></span></a></li>
                                <li><a href="/movie/action">动作<span></span></a></li>
                                <li><a href="/movie/comedy">喜剧<span></span></a></li>
                                <li><a href="/movie/love">爱情<span></span></a></li>
                                <li><a href="/movie/mystery">悬疑<span></span></a></li>
                                <li><a href="/movie/horror">恐怖<span></span></a></li>
                                <li><a href="/movie/scifi">科幻<span></span></a></li>
                                <li><a href="/movie/sweet">治愈<span></span></a></li>
                                <li><a href="/movie/artfilm">文艺<span></span></a></li>
                                <li><a href="/movie/youth">成长<span></span></a></li>
                                <li><a href="/movie/animation">动画<span></span></a></li>
                                <li><a href="/movie/chinese">华语<span></span></a></li>
                                <li><a href="/movie/western">欧美<span></span></a></li>
                                <li><a href="/movie/korean">韩国<span></span></a></li>
                                <li><a href="/movie/japanese">日本<span></span></a></li>
                            </ul>
                            
                        </div>
                    </section>                  
                </div>
            </div>
        )
    }
}
