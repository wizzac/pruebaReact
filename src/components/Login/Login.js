import React from "react";
import './Login.css';
import firebase from 'firebase';
import FileUpload from '../FileUpload/FileUpload'


export default class Login extends React.Component {
  
    constructor(){
        super();
        this.state= {
            user:null
        };
        this.handleAuth=this.handleAuth.bind(this);
    }

    componentWillMount(){
        firebase.auth().onAuthStateChanged(user=>{
            this.setState({user:user})
        })
    }

    handleAuth(){
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result=>{
            console.log(`${result.user.email} inicio de session `)
        })
        .catch(error=> {
            console.log(`Error ${error.code}: ${error.message}`)
        });
    }

    handleLogOut(){
            firebase.auth().signOut()
            .then(result=> console.log(`Ha cerrado session`))
            .catch(error=> {
                console.log(`Error ${error.code}: ${error.message}`)
            }); 
    }

    renderLoginButton(){
        //si el user esta logeado 
        if(this.state.user){
            return (
                <div>
                    <img src={this.state.user.photoURL} alt={this.state.user.displayName}></img>
                        Hola {this.state.user.displayName}
                    <FileUpload></FileUpload>
                    <button onClick={this.handleLogOut} className="btn-red">Cerrar session</button>
                </div>
            )
        }else{
           return(<button onClick={this.handleAuth} className="btn-green" value="Login">Login🏠</button>)
        //sino
        }
    }

    render() {
      return (
        <div className="login-btn" id="login">
                {this.renderLoginButton()}
       </div>
      )
    }

  
    
  }
  
