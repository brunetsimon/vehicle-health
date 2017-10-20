import React from 'react'
import IdtcTableWidget from './widgets/IdtcTableWidget'

const DashboardPage = () => (
  <div id="page-wrapper">
    <div className="container-fluid">
      <div className="row bg-title">
        <h1>Dashboard</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="white-box">
            <h3 className="m-b-0 box-title">IDTC</h3>
            <p className="text-muted m-b-30">Display all the DTC recorded by the IoT</p>
            <IdtcTableWidget />
          </div>
          <div className="white-box">
            <h3 className="m-b-0 box-title">Map</h3>
            <p className="text-muted m-b-30">Display the bus position on a map</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DashboardPage
