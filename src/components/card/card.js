import React from 'react';
import './card.css';

const Card = (props) => {

    const info = props.data;
    const adding = props.adding;

    return (
        <div className='col-md-7 single-card'>
            
            <div className="card-wraper">
                <div className="row align-items-center">
                    <div className="col-md-3 text-center">
                        <img src={props.data.flags.png} alt="" className="img-fluid mb-4 mb-lg-0 mb-md-0" />
                        
                    </div>
                    <div className="col-md-8">
                            <p><span>Name</span>: <b>{info.name.common}</b></p>
                            <p><span>Capital</span>: <b>{info.capital}</b></p>
                            <p><span>Population</span>: <b>{info.population}</b></p>
                    </div>
                    <div className="col-md-1 p-0">
                        <button onClick={()=>adding(info)} className="btn btn-primary btn-small">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;