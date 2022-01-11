import React from 'react';
import { API_ROOT } from '../../config/api-config';
import axios from 'axios';
import Pagination from "react-js-pagination";
import { Link } from 'react-router-dom';


import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const baseUrl = API_ROOT;
export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      posts: [],
      activePage: 1,
      itemPerPage: 20,
    };

  }

 async componentDidMount() {

    await axios.request(baseUrl+'posts').then(response=> {
      const posts = response.data;
      this.setState({ posts });
    });
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  deletePost(id){
    let postTitle = this.getPost(id);
    confirmAlert({
      message: 'Are you sure you want to delete "'+postTitle[0].title+'"?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.setState({posts: this.state.posts.filter(el => el.id !== id)})
        },
        {
          label: 'No'
        }
      ],
    });

  }

  getPost(id){
    return this.state.posts.filter(el => el.id == id);
  }

  render() {
    const { posts, activePage, itemPerPage } = this.state;
    const indexOfLastTodo = activePage * itemPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemPerPage;
    const renderedProjects = posts.slice(indexOfFirstTodo, indexOfLastTodo);

    return (

      <div className="row">

        { renderedProjects.map((post,index) =>

          <div className="col-4" key=  {index}>
            <button className="btn btn-danger" style={{float:'right',cursor:'pointer'}} onClick={(e) => this.deletePost(post.id)} key={post.id} value={post.id}><i className="fa fa-trash"></i></button>
            <Link to={{pathname:'/comment'+'/'+post.id}}>
              <label className="heading"> {index+1}. <b>{post.title}</b></label>
            </Link>
            <p>{post.body}</p>
          </div>

        )}
      <div className="col-md-6">
      <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemPerPage}
          totalItemsCount={this.state.posts.length}
          pageRangeDisplayed={5}
          itemClass="page-item"
          onChange={this.handlePageChange.bind(this)}
          linkClass="page-link"
        />
      </div>

    </div>

    );
  }
}


