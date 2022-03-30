import React from "react"

export default function Card(props){


    return(
        <div className="container py-3">
            <div className="row">
                <div className="col-md-3 ">
                    <img src={`./images/${props.item.img}`} alt="" className="rounded card-image"/>
                </div>
                <div className="col-md-9">
                    <div className="container py-3">
                        <div className="row">
                            <div className="col pt-4">
                                <i class="fa-solid fa-location-dot fa-xl pe-1 color-main"></i>
                                <span className="pe-3 fs-4 fw-light text-uppercase country">{props.item.country}</span>
                                <a href={props.item.map} className="fs-5 text-muted">View on Google Maps</a>
                            </div>
                        </div>
                        <div className="row">
                            <h1 className="pb-5 fw-bold location">{props.item.location}</h1>
                            <h4 className="pb-3 fw-bold fs-5">{`${props.item.date.startDate} - ${props.item.date.endDate}`}</h4>
                            <p className="fs-5">{props.item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}