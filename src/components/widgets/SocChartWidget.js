import React from 'react'
import { db } from '../../fire';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts'

class SocChartWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      socs: []
    };
  }

  componentWillMount() {
    let socRef = db.ref('soc');

    socRef.on('child_added', snapshot => {
      console.log("soc_child_added");
      let soc = { soc: snapshot.val().data, time: snapshot.val().time, id: snapshot.key};
      this.setState({ socs: [soc].concat(this.state.socs)});
    });

    socRef.on('child_removed', snapshot => {
      console.log("child_removed");
      let newSocs = this.state.socs.filter( x => x.id !== snapshot.key);
      this.setState({ socs: newSocs});
    });
  }

  render() {
    console.log(this.state.socs);

    return(
      <div className="row">
        <div className="col-lg-12">
          <div className="white-box">
            <AreaChart width={600} height={400} data={this.state.socs.reverse()} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="time"/>
              <YAxis/>
              <Tooltip/>
              <Area type='monotone' dataKey='soc' stroke='#8884d8' fill='#8884d8' />
            </AreaChart>
          </div>
        </div>
      </div>
    );
  }

}

export default SocChartWidget
