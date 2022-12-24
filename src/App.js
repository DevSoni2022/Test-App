import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ifscCode: null,
      BankData: null,
    };
    
  }
  setIfscCode = (e) => {
    
    this.setState({
      ifscCode: e && e.target && e.target.value,
    });
  };
  GetDetail(value) {
    debugger
    if (value && value.length > 0) {
      fetch(`https://ifsc.razorpay.com/${value}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            BankData: data,
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      alert("Please eneter valid detai;ls");
    }
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <input value={this.state.ifscCode} onChange={this.setIfscCode.bind()} />
        </div>
        <button onClick={()=>{this.GetDetail(this.state.ifscCode)}}>GetDeyail </button>
      </React.Fragment>
    );
  }
}

export default App;
