import React from 'react'
import { db } from '../../fire';

class IdtcTableWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      idtcs: []
    };
  //  this.handleRemoveIdtc = this.handleRemoveIdtc.bind(this);
  }

  componentWillMount() {
    let idtcRef = db.ref('idtc');
    // idtcRef.once('value',  snapshot => {
    //   console.log("once");
    //   if(snapshot.val() != null){
    //     let idtc = { spn: snapshot.val().spn, ftb: snapshot.val().ftb, time: snapshot.val().time, id: snapshot.key};
    //     this.setState({ idtcs: [idtc].concat(this.state.idtcs)});
    //   }
    // });
    idtcRef.on('child_added', snapshot => {
      console.log("child_added");
      let idtc = { spn: snapshot.val().spn, ftb: snapshot.val().ftb, time: snapshot.val().time, id: snapshot.key};
      this.setState({ idtcs: [idtc].concat(this.state.idtcs)});
    });

    idtcRef.on('child_removed', snapshot => {
      console.log("child_removed");
      let newIdtcs = this.state.idtcs.filter( x => x.id !== snapshot.key);
      this.setState({ idtcs: newIdtcs});
    })
  }

  handleRemoveIdtc(idtc) {
    console.log("remove " + idtc.id);

    db.ref('idtc').child(idtc.id).remove();
  }
  render() {

    return(
      <div className="row">
        <div className="col-lg-12">
          <div className="white-box">
            <table className="table table-bordered table-hover toggle-circle">
              <thead>
                <tr>
                  <th>SPN</th>
                  <th>FTB</th>
                  <th>Timestamp</th>
                  <th>Action</th>
                </tr>
              </thead>
               <tbody>
                 { this.state.idtcs.map( idtc =>
                   <tr key={idtc.id}>
                     <td>{idtc.spn}</td>
                     <td>{idtc.ftb}</td>
                     <td>{idtc.time}</td>
                     <td><i className="material-icons" onClick={(e) =>this.handleRemoveIdtc(idtc, e)}>delete</i></td>
                  </tr>
                 )}
               </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

}

export default IdtcTableWidget
