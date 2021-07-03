import React, { Component } from 'react'

export default class Car extends Component {
    render() {
        let { car } = this.props;
        return (
            <div>
                <div className="card">
                    <img src={car.img} alt="..." height={150}></img>
                    <div className="card-body">
                        <p className="font-weight-bold" style={{fontSize:'20px'}}>{car.name}</p>
                        <p>{car.price}</p>
                        <button onClick={() => {
                            // this.xemChiTiet(sanPham);
                            this.props.xemChiTiet(car);
                            console.log('car', car);
                        }} className="btn btn-success" data-toggle="modal" data-target="#modelId" >Xem chi tiết</button>
                    </div>
                </div>

               

            </div>

        )
    }
}
