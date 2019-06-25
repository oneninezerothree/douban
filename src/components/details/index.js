import React from 'react';
import { connect } from 'dva';
import style from './details.scss';

class details extends React.Component {
    render() {
        return (
            <div className={style.input}>
                <div className={style.title}>details</div>
            </div>
        )
    }
}

details.propTypes = {
};

export default connect((state) => {
    return state
})(details);