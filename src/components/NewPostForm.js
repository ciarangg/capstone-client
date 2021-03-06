import React, {Component} from 'react'

class NewPostForm extends Component{
    state={title:'', content:'', image:"https://media.licdn.com/dms/image/C4E03AQG5J8hDZtk7LA/profile-displayphoto-shrink_200_200/0?e=1543449600&v=beta&t=iK99f--T3vo1zKip423cmtiHt_dwxDU2ZUo1sYqJpnI", username:'ciaran'}

    onSubmit = e => {
        e.preventDefault()
        const {title, content, image, username} = this.state
        
        const postData = {
                title,
                content, 
                image,
                username
        }
        
        this.props.addPost(postData)
        .then(this.props.loadData)
        this.props.history.push('/posts')
    }
   

    onInputChange = e => this.setState({ [e.target.name]: e.target.value });

    render(){
        console.log("props", this.props)
        return(
            <div>   
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                     <label for="exampleFormControlInput1">Title</label>
                     <input 
                      name="title" 
                      onChange={this.onInputChange}
                      type="text" 
                      class="form-control" 
                      id="exampleFormControlInput1" 
                      />
                      </div>
 
                     <div class="form-group">
                        <label for="exampleFormControlTextarea1">Problem</label>
                        <textarea
                          name="content"
                          onChange={this.onInputChange}
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
export default NewPostForm
