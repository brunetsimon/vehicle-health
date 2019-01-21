import React, { Component } from 'react';
import { db } from '../fire';

class FakeData extends Component {


  constructor(props) {
    super(props);

    this.handleIdtcClick = this.handleIdtcClick.bind(this);
    this.handleGpsClick = this.handleGpsClick.bind(this);
    this.handleSocClick = this.handleSocClick.bind(this);
  }

  getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  
  handleIdtcClick(event) {
    event.preventDefault();
    
    let ref = "/idtc/";
    db.ref(ref).push({
      'spn': this.getRandom(520000, 520999),
      'ftb': this.getRandom(1, 10),
      'time': Date.now(),
    });
  }

  handleGpsClick(event) {
    event.preventDefault();
    
    let ref = "/gps/";
    db.ref(ref).push({
      'lat': this.getRandom(56, 58),
      'lng': this.getRandom(10, 12),
    });
  }

  handleSocClick(event) {
    event.preventDefault();
    
    let ref = "/soc/";
    db.ref(ref).push({
      'data': this.getRandom(40, 70),
      'time': Date.now(),
    });
  }

  render() {

    const { classes } = this.props;
    return(
      <div>
        <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" onClick={this.handleIdtcClick}>IDTC</button>
        <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" onClick={this.handleGpsClick}>GPS</button>
        <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" onClick={this.handleSocClick}>SOC</button>
      </div>
    );
  }
};

export default FakeData;
