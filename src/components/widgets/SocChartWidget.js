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

    const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

    return(
      <div className="row">
        <div className="col-lg-12">
          <div className="white-box">
            <AreaChart width={600} height={400} data={this.state.soc} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
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
