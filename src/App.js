import './App.css';
import logo from './img/aws-logo.png'
import React, { Component } from 'react';

class App extends Component {
  state = {
    selectFile: null,
    fileUploadedSuccessfully: false
  }

  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]});
  }

  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "demo file",
      this.state.selectedFile,
      this.state.selectedFile.name
    )
    //call api
    console.log(formData);
    this.setState({selectedFile: null});
    this.setState({fileUploadedSuccessfully: true});
  }

  fileData = () => {
    if (this.state.selectedFile) {
      return (
      <div>
        <h2>File Details:</h2>
        <p>File name: {this.state.selectedFile.name}</p>
        <p>File type: {this.state.selectedFile.type}</p>
        <p>Last modified: {" "}{this.state.selectedFile.lastModifiedDate.toDateString()}</p>
      </div>
      );
    } else if (this.state.fileUploadedSuccessfully) {
      return(
        <div>
          <br />
          <h4>Your file has been succefully uploaded!</h4>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose a file and then press the Upload button</h4>
        </div>
      )
    }
  }

  render() {
    return (
      <div id="bg" className="container, center">
        <img className="logo" src={logo} alt="AWS Logo" />
        <h2 className="h2">File Upload System</h2>
        <h3>Upload with React.js and a Serverless API!</h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>
            Upload
          </button>
        </div>
        {this.fileData()}
      </div>
    )
  }
}

export default App;
