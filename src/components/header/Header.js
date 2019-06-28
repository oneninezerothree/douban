import React, { Component } from 'react'
import head from './header.scss';
import { Link } from 'dva/router';

export default class Header extends Component {
    render() {
        return (
            <header className={head.TalionNav}>
                <div className={head.TalionNavprimary}>
                    <Link to="/" className={head.logo}>
                        <h1></h1>
                    </Link>
                    <nav>
                        <span className=""></span>
                        <a>登录/注册</a>
                    </nav>
                </div>
            </header>
        )
    }
}
