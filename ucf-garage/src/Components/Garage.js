import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle, CardText, Progress,Button} from 'reactstrap';
import './Garage.css';

function percentageColor(newColor){
    if(newColor < 40) return 'success';
    else if(newColor >= 40 && newColor < 90) return 'warning';
    else return 'danger';
}

const Garage = (props) => {
    const url = props.name === 'Libra' ?
        `https://www.google.com/maps?saddr=My+Location&daddr=Parking+Garage+${props.name},+Orlando,+FL+32817` :
        `https://www.google.com/maps?saddr=My+Location&daddr=University+of+Central+Florida+Parking+Garage+${props.name},+Orlando,+FL+32817`;
    var didUpdate = props.didUpdate;
    const newColor = props.percentTaken;
    let taken = props.max - props.current;
    if(taken < 0) taken = taken * -1;
    return(
        <Card body className="mx-2 my-3">
            <CardTitle>
                <div className="d-flex">
                    {didUpdate ?
                    <div class="blink_me">Garage {props.name}</div> :
                    <div class="blink_me_again">Garage {props.name}</div>}
                    <div className="ml-auto">
                        <Button color="primary" size="sm">
                            <a href={url} style={{textDecoration:"none", color:"white"}}>
                            Route Me!
                            </a>
                        </Button>
                    </div>
                </div>
            </CardTitle>
            <CardText>
                <div className="d-flex">
                    {taken} / {props.max}
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
