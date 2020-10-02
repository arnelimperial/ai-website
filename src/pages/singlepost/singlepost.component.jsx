import React from "react";
import axios from 'axios';
class SinglePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = { post: { body: '' }}
  }
 

  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((res) => {
      const post = res.data;
      this.setState({ post });
    });
  }
  render() {
    const { post } = this.state;
    return (
      <div>
        <h4>{ post.title }</h4>
        <p>{ post.body }</p>

      </div>
        
      
    )
  }
}

export default SinglePost;