import React, { Component } from 'react'
import head from './header.scss';

export default class Header extends Component {
    render() {
        return (
            <header className={head.TalionNav}>
                <div className={head.TalionNavprimary}>
                    <a href="/" className={head.logo}>
                        <h1></h1>
                    </a>
                    <nav>
                        <span className=""></span>
                        <a>登录/注册</a>
                    </nav>
                </div>
            </header>
        )
    }
}
