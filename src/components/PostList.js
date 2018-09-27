import React, {Component} from 'react';
import Post from './Post'
import NewPostForm from './NewPostForm'
import { Route } from 'react-router-dom'
import EditPostForm from './EditPostForm'
import Header from './Header';

const APIURL = 'https://fathomless-ocean-77552.herokuapp.com/posts/'

class PostList extends Component {
    state = {
        comments: [], 
        posts:[]
      }
      componentDidMount() {

        this.loadData()
        // fetch('/comments.json')
        // .then(res => res.json())
        // .then(comments => this.setState({comments}))
      }
    //   componentWillMount() {
    //     fetch(APIURL)
    //     .then(res => res.json())
    //     .then(posts => this.setState({posts}))
    //   }
   
      addPost = async data => {
        const response = await fetch(APIURL, {
          method: "post",
          headers: new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
          }),
          body: JSON.stringify(data)
        });
        const posts = await response.json();
     
        console.log("post received", posts);
        this.setState({
          posts: [posts, ...this.state.posts]

        });
        return posts
      };

      loadData = () => {
        return fetch(APIURL)
        .then(res => res.json())
        .then(posts => this.setState({posts}))
      }

      deletePost(id) {
        const deleteURL = APIURL + id;
        fetch(deleteURL, {
          method: "delete"
        })
          .then(resp => {
            if (!resp.ok) {
              if (resp.status >= 400 && resp.status < 500) {
                return resp.json().then(data => {
                  let err = { errorMessage: data.message };
                  throw err;
                });
              } else {
                let err = {
                  errorMessage: "Please try again later, server is not responding"
                };
                throw err;
              }
            }
          })
          .then(() => {
            const posts = this.state.posts.filter(
              post => post.id !== id
            );
            this.setState({ posts: posts });
          });
      }

    render(){
        const forumPost = this.state.posts
        ? this.state.posts.map(post => {
            return (
                <Post
                key={post.id}
                {...post}
                onDelete={this.deletePost.bind(this, post.id)}
                />
            )
        }) : null

        console.log('state', this.state.posts)
        return(
            <div>
            <Header />
        <br/>
        <br/>
            <div className="list-group">
            <Route  exact path='/posts'  component={() => <div>{forumPost}</div> }/>

            <Route path="/posts/new" component={props => (
                <NewPostForm {...props} addPost={this.addPost} loadData={this.loadData} />
            )}/>
                    
            <Route path="/posts/edit/:id" component={props => (
                <EditPostForm {...props} addPost={this.addPost} loadData={this.loadData} />
            )}/>


            </div>

            </div>
        )
    }
}

export default PostList;


