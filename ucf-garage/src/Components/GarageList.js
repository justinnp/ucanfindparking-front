import React, {Fragment} from 'react';
import {Col} from 'reactstrap';
import PropTypes from 'prop-types';
import Garage from './Garage';

const GarageList = (props) => {
    return(
        <Fragment>
            {props.garages.map((garage, index) =>
                <Col key={index} sm="4">
                    <Garage
                        key={index}
                        name={garage.name}
                        current={garage.current}
                        max={garage.max}
                        percentOpen={garage.percentOpen}
                        percentTaken={garage.percentTaken}
                        didUpdate={garage.didUpdate}
                    />
                </Col>
            )}
        </Fragment>
    );
}

GarageList.proptypes = {
    garages: PropTypes.array.isRequired
}

export default GarageList;
