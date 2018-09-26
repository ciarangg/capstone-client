import React from 'react';
import moment from 'moment'
import {Link} from 'react-router-dom'

const Post = ({title, image, created_at, content, username, onDelete, id}) => {
    
    return(
    <div className="container">   
        <div className="list-group">
       
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{title}</h5>
                    <small className="text-muted">{moment(created_at).fromNow()}</small>
                </div>
                
                
                <p id="positionContent" className="mb-1">{content}</p>
                

                <div className="lets">

                <div className="avatar">
                <img className="images" src={image}/>
                <small  className="text-muted">{username}</small>
                </div>

                <div className="theButtons">
                <button className=" btn btn-primary" onClick={onDelete}>Delete</button>
                <Link classname="whitespace" className="btn btn-warning" to={`/posts/edit/${id}`}>Edit</Link>
                </div>

                </div>
            </a>
            
           
        </div>
     </div>

)};

export default Post;