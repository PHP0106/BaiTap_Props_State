import React, { Component } from 'react'
import Car from './Car';

export default class XemChiTietXe extends Component {

    mangProduct = [
        { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/products/silver-car.jpg', price: 3000 },
        { id: 4, name: 'steel car', img: './img/products/steel-car.jpg', price: 4000 }
    ]

    state = {
        carChiTiet: {
            id: 4, name: 'steel car', img: './images/products/steel-car.jpg', price: 4000
        },

    }
    renderProduct = () => {
        return this.mangProduct.map((product, index) => {
            return <div className="col-3" key={index}>
                <Car car={product} xemChiTiet={this.xemChiTiet} />
            </div>
        });

    }

    xemChiTiet = (carClick) => {
        this.setState({
            carChiTiet: carClick
        })
    }

    render() {
        let { carChiTiet } = this.state;
        return (
            <div>
                <div className="container">
                    <h3 className="mb-3">Danh sách xe</h3>
                    <div className="row">
                        {this.renderProduct()}
                    </div>


                </div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content m-auto" style={{ width: '71%' }}>
                            <div className="modal-header">
                                <p className="font-weight-bold" style={{ fontSize: '20px' }}>{carChiTiet.name}</p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <img src={carChiTiet.img} alt="..." height={300}></img>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

