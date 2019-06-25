import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect((state) => {
  return state
})(IndexPage);

// class Products extends React.Component{
//   render() {
//     console.log(this)
//     return(
//       <div>
//       <button onClick={()=>{
//         this.props.dispatch({
//           type:'example/save',
//           payload:{
//             payload:2
//           }
//         })
//       }}>提交</button>
//     </div>
//     )
//   }
// }



// const Products = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <button onClick={handleDelete.bind(this,props)}>提交</button>
//     </div>
//   );
// };
// const handleDelete = (props) => {
//   props.dispatch({
//     type: 'example/save',
//     payload: {
//       payload: 2
//     }
//   })
// }
// export default Products;
// export default connect((state) => {
//   return state
// },
// )(Products);




// import React from 'react';
// import { connect } from 'dva';

// function IndexPage(props) {
//   console.log(props)
//   return (
//     < div >
//       <button onClick={handleDelete.bind(this, props, 2)}>点击</button>
//     </div >
//   );
//   function handleDelete(props, id) {
//     props.dispatch({
//       type: 'example/save',
//       payload: {
//         payload: id
//       }
//     })

//   }
// }
// IndexPage.propTypes = {
// };
