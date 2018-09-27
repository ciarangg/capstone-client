import React from 'react'
import {Link} from "react-router-dom"
//import glass from '../backgroundpic.jpg'

const SplashPage = () => {
    return(

        

<div className="splash" >

<div id="pic" className="container">
<h1 ><span id="big" class="btn btn-primary">ScySpace</span></h1>
        <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
                <div className="box">
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                    <div className="shape3"></div>
                    <div className="shape4"></div>
                    <div className="shape5"></div>
                    <div className="shape6"></div>
                    <div className="shape7"></div>
                    <div className="float">
                        <form className="form" action="">
                            <div className="form-group">
                                <label for="username" className="text-white">Username:</label><br />
                                <input type="text" name="username" id="username" className="form-control" />
                            </div>
                            <div id="pass" className="form-group">
                                <label for="password" className="text-white">Password:</label><br />
                                <input type="password" name="password" id="password" className="form-control" />
                            </div>
                            <Link to="/posts"className="nav-link" > 
                            <div id="submit" className="form-group">
                                <input type="submit" name="submit" className="btn btn-primary" value="Log in" />
                            </div>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
    )
}
export default SplashPage