import React from 'react'
import IdtcTableWidget from './widgets/IdtcTableWidget'
import IdtcMapWidget from './widgets/IdtcMapWidget'
import SocChartWidget from './widgets/SocChartWidget'

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
            <IdtcMapWidget />
          </div>
          <div className="white-box">
            <h3 className="m-b-0 box-title">SOC chart</h3>
            <p className="text-muted m-b-30">Display the SOC</p>
            <SocChartWidget />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DashboardPage
