import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
var apiBaseUrl = "http://localhost:4000/api/";
import axios from 'axios';
import UploadPage from './UploadPage';

class Login extends Component {
  constructor(props) {
    super(props);
    var localloginComponent = [];
    localloginComponent.push(
      <MuiThemeProvider>
        <div>
          <TextField
            hintText="Enter your Pseudo Game"
            floatingLabelText="Pseudo Game"
            onChange={(event, newValue) => this.setState({ username: newValue })}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) => this.setState({ password: newValue })}
          />
          <br />
          <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
        </div>
      </MuiThemeProvider>
    )
    this.state = {
      username: '',
      password: '',
      menuValue: 1,
      loginComponent: localloginComponent,
    }
  }

  componentWillMount() {
    // console.log("willmount prop values",this.props);
  }

  handleClick(event) {
    var self = this;
    var payload = {
      "userid": this.state.username,
      "password": this.state.password,
    }
    axios.post(apiBaseUrl + 'login', payload)
      .then(function (response) {
        console.log(response);
        if (response.data.code == 200) {
          console.log("Login successfull");
          var uploadScreen = [];
          uploadScreen.push(<UploadPage appContext={self.props.appContext}/>)
          self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
        }
        else if (response.data.code == 204) {
          console.log("Username password do not match");
          alert(response.data.success)
        }
        else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title="League Of Stone"
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div>
            <p>Hi ! You Have To Log in For Play</p>
          </div>
        </MuiThemeProvider>
        {this.state.loginComponent}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;
