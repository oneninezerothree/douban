import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div>
      asd
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
