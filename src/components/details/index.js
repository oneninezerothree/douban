import React from 'react';
import { connect } from 'dva';
import style from './details.scss';

class details extends React.Component {
    render() {
        return (
            <div className={style.page}>
                <div className={style.card}>
                    <h1 className={style.title}>X战警：黑凤凰</h1>
                    <div className={style.subjectInfo}></div>
                </div>
            </div>
        )
    }
}

details.propTypes = {
};

export default connect((state) => {
    return state
})(details);