import React, {Component} from 'react'

const APIURL = 'https://fathomless-ocean-77552.herokuapp.com/posts/'

class EditPostForm extends Component{
    state = {
        loadingPost: true,
        post: null 
      };
      componentDidMount() {
        if (this.props.match.params.id) {
          this.getpost(this.props.match.params.id);
        }
      }
     
      getpost = async id => {
        try {
          const response = await fetch(APIURL + id, {
            method: "get"
          });
          const post = await response.json();
          this.setState({ post });
        } catch (err) {
          console.error(err);
        } finally {
          this.setState({ loadingPost: false });
        }
      };

      onInputChange = e =>
        this.setState({
          post: { ...this.state.post, [e.target.name]: e.target.value }
        });

        updatepost = async id => {
            const response = await fetch(APIURL + id, {
              method: "put",
              headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json"
              }),
              body: JSON.stringify(this.state.post)
            });
            return await response.json()
          };
     
      onSubmit = e => {
        e.preventDefault();
        this.updatepost(this.props.match.params.id)
        .then(this.props.loadData)
        this.props.history.push('/posts')
      };
     
      render() {
          console.log('edit props', this.props)
        return this.state.loadingPost ? (
          <p>Loading post</p>
        ) : (
            <div>   
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                     <label for="exampleFormControlInput1">Title</label>
                     <input 
                      name="title" 
                      onChange={this.onInputChange}
                      type="text" 
                      value={this.state.post.title}
                      class="form-control" 
                      id="exampleFormControlInput1" 
                      />
                      </div>
 
                     <div class="form-group">
                        <label for="exampleFormControlTextarea1">Problem</label>
                        <textarea
                          name="content"
                          onChange={this.onInputChange}
                          value={this.state.post.content}
                          class="form-control"
                          id="exampleFormControlTextarea1" 
                          rows="3"/>
                     </div>
                     <button 
                     class="btn btn-primary" 
                     type="submit"
                     >
                     Submit!
                     </button>
                </form>
            </div>
        )
    }
}
export default EditPostForm
