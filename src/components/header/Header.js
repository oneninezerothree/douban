import React, { Component } from 'react'
import head from './header.scss';
import { Link } from 'dva/router';
import { connect } from 'dva';
 class Header extends Component {
    render() {
        return (
            <header className="TalionNav">
                <div className="TalionNavprimary">
                    <Link to="/" className="logo">
                        <h1></h1>
                    </Link>
                    <nav>
                        <span className="">
                            <Link to="/search"></Link>
                        </span>
                        <Link to="/login">{this.props.details.isLogin?'':'登录/注册'}</Link>
                    </nav>
                </div>
            </header>
        )
    }
}

export default connect((state) => {
  return state
})(Header);
