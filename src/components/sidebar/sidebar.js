import React from 'react';
import SelectedCountry from './selectedCountry/selectedCountry';
import './sidebar.css'

const Sidebar = (props) => {


    const added = props.added;



    return (
        <div className='col-md-4 side-bar'>
            <h5 className='mb-4'>Added countries : {props.count}</h5>

            {
                added.map(e=><SelectedCountry added={e} />)
            }


        </div>
    );
};

export default Sidebar;