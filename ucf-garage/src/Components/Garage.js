import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle, CardText, Progress} from 'reactstrap';

function percentageColor(newColor){
    if(newColor < 40) return 'success';
    else if(newColor >= 40 && newColor < 90) return 'warning';
    else return 'danger';
}

const Garage = (props) => {
    const newColor = props.percentTaken;
    return(
        <Card body className="mx-3 my-3">
            <CardTitle>{props.name}</CardTitle>
            <CardText>
                <div className="d-flex">
                    {props.current} / {props.max}
                    <div className="ml-auto">
                        {props.percentTaken}%
                    </div>
                </div>
                <Progress 
                    value={props.percentTaken}
                    color= {percentageColor(newColor)}
                />
            </CardText>
        </Card>
    );
}

Garage.proptypes = {
    name: PropTypes.string.isRequired,
    current: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    percentOpen: PropTypes.number.isRequired,
    percentTaken: PropTypes.number.isRequired,
}
export default Garage;