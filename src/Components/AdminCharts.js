import React from 'react'
import './AdminCharts.css'
import StarRating from '../style/StarRating'

function AdminCharts(props) {
    return (
        <>
            <div className="adminChartBody">
                <div className="adminChartImg">
                    <img src={props.imgSrc} alt="" />
                </div>
                <div className="adminChartDesc">
                    <h4>{props.desc}</h4>
                    <p>
                        <StarRating rates={props.rate} />
                        <p>({props.rate})</p>
                    </p>
                </div>
                <div className="adminChartQty">
                    <div className="adminChartStock">
                        <h4>{props.stock}</h4>
                        <p>In Stock</p>
                    </div>
                    <div className="adminChartSales">
                        <h4>{props.sales}</h4>
                        <p>In Sales</p>
                    </div>
                </div>
                <div className="adminChartsButton">
                    <div className="adminChartsAddButton ChartsButton">
                        <button>
                            <img src="../images/add.svg" alt="Add" />
                        </button>
                    </div>
                    <div className="adminChartsEditButton ChartsButton">
                        <button 
                        // onClick={() => props.onEdit(props)}
                        >
                            <img src="../images/edit.svg" alt="Edit" />
                        </button>
                    </div>
                    <div className="adminChartsRemoveButton ChartsButton" >
                        <button onClick={props.deleteOnClick}>
                            <img src="../images/delete.svg" alt="Remove" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminCharts