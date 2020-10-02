import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "../homepage/homepage.styles.scss";

class Home extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get(process.env.REACT_APP_ENDPOINT).then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }
  render() {
    return (
      <main>
        <Helmet>
          <title>Arnel Imperial - Internet Site</title>
          <link rel="canonical" href="https://www.arnelimperial.com/" />
          <meta name="description" content="Arnel Imperial's internet site. Hello, I'm Arnel and welcome to my internet site. What I've been up to these days often, I teach myself how to code and keeps on practicing what I've learned. I am keen on this because it's a worthwhile activity and I have fun."></meta>
        </Helmet>
        <article>
          <section>
            <h3 className="h3">Latest</h3>
            {this.state.posts.map((post) => (
              <h4 key={post.id} className="post--title">
                <Link to={`post/${post.id}`} className="anchor">
                  {post.title}
                </Link>
              </h4>
            ))}
          </section>
        </article>
      </main>
    );
  }
}

export default Home;
