import React, { Component } from 'react';
import AuthService from '../auth/auth-service';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = { loggedInUser: null};
        this.service = new AuthService();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ ...this.state, loggedInUser: nextProps["userInSession"]})
    }
    logoutUser = () => {
        this.service.logout()
        .then(() => {
            this.setState({ loggedInUser: null });
            this.props.getUser(null);
        })
    }

    render(){
        if(this.state.loggedInUser){
            return(
                
                    <nav className="nav-style">
                        <ul>
                            <li>Welcome, {this.state.loggedInUser.username}</li>
                          
                             {/*<li>
                                <Link   to='/'>
                                    <button className="loginsub2" onClick={() => this.logoutUser()}>Logout</button>
                                </Link>
                            </li> */}
                        </ul>
                    </nav>
                
            )
        } else {
            return(
               
                <nav className="nav-style">
                    <ul>
                       
                    
                    </ul>
                </nav>
              
            )
        }
        
    }
}

export default Navbar;