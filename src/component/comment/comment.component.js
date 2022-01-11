import React,{Component} from 'react';
import { API_ROOT } from '../../config/api-config';
import axios from 'axios';
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";

const baseUrl = API_ROOT;

export default class Comment extends Component{

  constructor(props){
    super(props);
    this.state = {
      comments: [],
      activePage: 1,
      itemPerPage: 20,
    }
  }
  componentDidMount() {
    const post_id = this.props.match.params.id;
    axios.get(baseUrl+'posts/'+post_id+'/comments').then(response=> {
      const comments = response.data;
      this.setState({ comments });
    });
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }


  render (){

    const { comments, activePage, itemPerPage } = this.state;
    const indexOfLastTodo = activePage * itemPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemPerPage;
    const renderedProjects = comments.slice(indexOfFirstTodo, indexOfLastTodo);
    return (
      <div className="row">
        { renderedProjects.map((comment,index) =>

          <div className="col-4" key=  {index}>
            <p>{comment.id}. {comment.name}</p>
          </div>
        )}

        <div className="col-md-6">
        <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.itemPerPage}
            totalItemsCount={this.state.comments.length}
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
