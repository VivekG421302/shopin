import React from 'react'
import ShortCharts from './ShortCharts'

function Sidebar(props) {
    let ShowChartsData=props.SidebarData
    console.log(ShowChartsData, "ShowChartsData")
  return (
    <>
    <div className="SidebarBody">
        <h1>Simiar Products</h1>
        <ShortCharts ChartsData= {ShowChartsData}/>

    </div>
    </>
  )
}

export default Sidebar