import React, { Component } from 'react';
import { connect } from 'dva';
import '../../index.css';
import './details.scss';
import requires from '../../utils/require';
import Header from '../header/Header';

class details extends Component {
	constructor(props, monthrd) {
		super(props, monthrd)
		this.state = this.props.details
		this.written = this.written.bind(this);
	}
	render() {
		if (this.state.content) {
			return (
				<div>
				<Header />
				<div className="page">
					<div className="card">
						<h1 className="title">{this.state.content.title}</h1>
						<div className="subjectInfo">
							<div className="right">
								<a href="javascript:void(0);">
									<img src={this.state.content.images.large} alt="" />
								</a>
							</div>
							<div className="left">
								<p className="rating">
									<span className="ratingStars">
										{this.state.xin}
									</span>
									<strong>{this.state.content.rating.average}</strong>
									<span>{this.state.content.ratings_count}人评价</span>
								</p>
								<p className="meta">
									{this.state.content.durations[0] ? this.state.content.durations[0] + ' / ' : ''}
									{this.state.content.genres.map((item) => {
										return item;
									}).join(' / ') + ' '}
									/ {this.state.content.directors[0].name + ' '}(导演) / {this.state.content.casts.map((item) => {
										return item.name;
									}).slice(0, 3).join(' / ') + ' / '} {this.state.content.pubdates[this.state.content.pubdates.length - 1]} 上映
                                </p>
							</div>
						</div>
						<section className="subjectMark">
							<div className="markItem">
								<a href="javascript:void(0);">
									<span>想看</span>
								</a>
								<a href="javascript:void(0);">
									<span>看过</span>
								</a>
							</div>
						</section>
						{this.state.content.summary ? <section className="subjectIntro">
							<h2>{this.state.content.title}的剧情简介</h2>
							<div className="bd" style={{ position: 'static' }}>
								<p onClick={this.written}>
									{this.state.words ? this.state.content.summary.slice(0, -3) : this.state.content.summary.slice(0, 63) + '...'}
									{this.state.words ? '' : <a href="javascript:void(0);" style={{ float: 'right' }}>(展开)</a>}
								</p>
							</div>
						</section> : ''}
						<section id="celebrities">
							<header>
								<h2>影人</h2>
							</header>
							<div className="sectionContent">
								<ul className="row items">
									{this.state.performer.map((item) => {
										return (
											<li className="item itemCelebrity" key={item.id}>
												<a href={item.alt}>
													<div className="itemPoster" style={{
														backgroundImage: `url(${item.img})`
													}}>
													</div>
													<span className="itemTitle name">{item.name}</span>
													<span className="itemTitle role">{item.position}</span>
												</a>
											</li>
										)
									})}
								</ul>
							</div>
						</section>
						<section className="subjectPics">
							<h2>
								<span>{this.state.content.title}的</span>
								<span>预告片</span>
								<span>和</span>
								<span>图片</span>
							</h2>
							<div className="bd photoList">
								<ul className="wxPreview">
									{this.state.content.trailers.length != 0 ?
										<li className="video videoTrailer" style={{
											backgroundImage: 'url(' + this.state.content.trailers[0].small + ')'
										}}
										>
											<a href={this.state.content.trailers[0].alt}>
												<span className="span">
													<img src="https://img3.doubanio.com/f/talion/b6df390a5411896e81ad9be86a97121c17d4c805/pics/card/play-button.png" />
												</span>
											</a>
											<div className="time">01:51</div>
										</li>
										: ''}
									{this.state.content.photos.map((item, index) => {
										return (
											<li className="pic" key={index}>
												<a href={item.alt}>
													<img src={item.image} />
												</a>
											</li>
										)
									}).slice(0, 5)}
									<div className="movieGallery">
										<a href="/movie/subject/1291561/all_photos">
											<li><span>查看全部剧照/海报/壁纸</span></li>
										</a>
									</div>
								</ul>
							</div>
						</section>
						<section className="subjectComments">
							<h2>{this.state.content.title}的短评({this.state.content.comments_count})</h2>
							<div className="bd" id="comment-list">
								<ul className="list commentList">
									{this.state.content.popular_comments.map((item) => {
										let arr = () => {
											let a = []
											for (let i = 1; i <= item.rating.value; i++) {
												a.push(<span key={i} className="ratingStar ratingStarMediumFull"></span>)
											}
											for (let i = item.rating.value + 1; i <= item.rating.max; i++) {
												a.push(<span key={i} className="ratingStar ratingStarMediumGray"></span>)
											}
											return a;
										}
										return (
											<li key={item.author.id}>
												<div className="desc">
													<a href="javascript:viod(0)">
														<img src={item.author.avatar} alt="zing" />
													</a>
													<div className="userInfo">
														<strong>{item.author.name}</strong>
														<span className="ratingStars">
															{arr()}
														</span>
														<div className="date">{item.created_at}</div>
													</div>
												</div>
												<p>{item.content}</p>
												<div className="btnInfo">
													<div className={`$icBtn} $icBtnLike} $left}`}>
														<span className="text">{item.useful_count}</span>
													</div>
													<div className={`$icBtn} $icBtnMore} $right}`}></div>
												</div>
											</li>
										)
									})}
								</ul>
							</div>
						</section>
						<section className="subjectReviews">
							<h2>{this.state.content.title}的影评({this.state.content.reviews_count})</h2>
							<div className="bd">
								<ul className="list">
									{this.state.content.popular_reviews.map((item) => {
										let arr = () => {
											let a = []
											for (let i = 1; i <= item.rating.value; i++) {
												a.push(<span key={i} className="ratingStar ratingStarMediumFull"></span>)
											}
											for (let i = item.rating.value + 1; i <= item.rating.max; i++) {
												a.push(<span key={i} className="ratingStar ratingStarMediumGray"></span>)
											}
											return a;
										}
										return (
											<li key={item.id}>
												<a href={item.alt}>
													<h3>{item.title}</h3>
													<div>
														<span className="username">{item.author.name}</span>
														<span className="ratingStars">
															{arr()}
														</span>
													</div>
													<p className="abstract">{item.summary.slice(0,76) + '...'}</p>
												</a>
											</li>
										)
									}).slice(0, 5)}
								</ul>
							</div>
						</section>
					</div>
				</div>
				</div>
			)
		} else {
			return '';
		}
	}
	componentWillReceiveProps() {
		// this.setState(this.props.details)
	}
	componentDidMount() {
		// this.props.match.params.id
		console.log(this.props.match.params.id);
		var id = this.props.match.params.id
		requires('https://api.douban.com/v2/movie/subject/'+ id +'?apikey=0b2bdeda43b5688921839c8ecb20399b', function (data) {
			let a = data.casts.map((item) => {
				return {
					id: item.id,
					name: item.name,
					img: item.avatars.large,
					position: '演员',
					alt:item.alt
				}
			});
			let arr = [];
			arr.push({ id: data.directors[0].id, name: data.directors[0].name, img: data.directors[0].avatars.large, position: '导演',alt:data.directors[0].alt }, ...a);
			let arr1 = [];
			if (data.rating.average <= (10 / 6 * 1).toFixed(1)) {
				arr1.push(<span key={1} className="ratingStar ratingStarMediumGray"></span>)
				arr1.push(<span key={2} className="ratingStar ratingStarMediumGray"></span>)
				arr1.push(<span key={3} className="ratingStar ratingStarMediumGray"></span>)
				arr1.push(<span key={4} className="ratingStar ratingStarMediumGray"></span>)
				arr1.push(<span key={5} className="ratingStar ratingStarMediumGray"></span>)
			} else if (data.rating.average > (10 / 6 * 1).toFixed(1) && data.rating.average <= (10 / 6 * 2).toFixed(1)) {
				arr1.push(<span key={1} className="ratingStar ratingStarMediumFull"></span>)
				arr1.push(<span key={2} className="ratingStar ratingStarMediumGray"></span>)
				arr1.push(<span key={3} className="ratingStar ratingStarMediumGray"></span>)
				arr1.push(<span key={4} className="ratingStar ratingStarMediumGray"></span>)
				arr1.push(<span key={5} className="ratingStar ratingStarMediumGray"></span>)
			} else if (data.rating.average > (10 / 6 * 2).toFixed(1) && data.rating.average <= (10 / 6 * 3).toFixed(1)) {
				arr1.push(<span key={1} className="ratingStar ratingStarMediumFull"></span>)
				arr1.push(<span key={2} className="ratingStar ratingStarMediumFull"></span>)
				arr1.push(<span key={3} className="ratingStar ratingStarMediumGray"></span>)
				arr1.push(<span key={4} className="ratingStar ratingStarMediumGray"></span>)
				arr1.push(<span key={5} className="ratingStar ratingStarMediumGray"></span>)
			}
			else if (data.rating.average > (10 / 6 * 3).toFixed(1) && data.rating.average <= (10 / 6 * 4).toFixed(1)) {
				arr1.push(<span key={1} className="ratingStar ratingStarMediumFull"></span>)
				arr1.push(<span key={2} className="ratingStar ratingStarMediumFull"></span>)
				arr1.push(<span key={3} className="ratingStar ratingStarMediumFull"></span>)
				arr1.push(<span key={4} className="ratingStar ratingStarMediumGray"></span>)
				arr1.push(<span key={5} className="ratingStar ratingStarMediumGray"></span>)
			} else if (data.rating.average > (10 / 6 * 4).toFixed(1) && data.rating.average <= (10 / 6 * 5).toFixed(1)) {
				arr1.push(<span key={1} className="ratingStar ratingStarMediumFull"></span>)
				arr1.push(<span key={2} className="ratingStar ratingStarMediumFull"></span>)
				arr1.push(<span key={3} className="ratingStar ratingStarMediumFull"></span>)
				arr1.push(<span key={4} className="ratingStar ratingStarMediumFull"></span>)
				arr1.push(<span key={5} className="ratingStar ratingStarMediumGray"></span>)
			} else {
				arr1.push(<span key={1} className="ratingStar ratingStarMediumFull"></span>)
				arr1.push(<span key={2} className="ratingStar ratingStarMediumFull"></span>)
				arr1.push(<span key={3} className="ratingStar ratingStarMediumFull"></span>)
				arr1.push(<span key={4} className="ratingStar ratingStarMediumFull"></span>)
				arr1.push(<span key={5} className="ratingStar ratingStarMediumFull"></span>)
			}
			this.props.dispatch({
				type: 'details/save',
				payload: {
					content: data,
					performer: arr,
					xin: arr1
				}
			})
			this.setState(this.props.details)
		}.bind(this))
	}

	written() {
		this.props.dispatch({
			type: 'details/save',
			payload: {
				words: true,
			},
		})
		this.setState({ words: true, })
	}
}

export default connect((state) => {
	return state
})(details);