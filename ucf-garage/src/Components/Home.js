import React, {Component} from 'react';
import {Navbar, Row} from 'reactstrap';
import GarageList from './GarageList';

const url = 'https://u-can-find-parking-api.herokuapp.com/all'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            garages: [
            ]
        }
    }
    componentWillMount(){
        fetch(url)
        .then(response => response.json())
        .then(responseData =>{
            const tmpGarages = [];
            for(var key in responseData){
                const garage = {
                    name: key,
                    current: responseData[key].current,
                    max: responseData[key].max,
                    percentOpen: responseData[key].percentage_avail,
                    percentTaken: responseData[key].percentage_full
                }
                tmpGarages.push(garage);
            }
            this.setState({
                garages: tmpGarages
            })
        })
        .catch(error => {
            console.log('Error fetching and parsing data.', error);
          });
    }

    render() {
        return (
            <div style={{overflow: "hidden"}}>
                <Navbar className="bg-dark fixed-top">
                    <h3 className="mx-auto" style={{color: '#F6C344'}}> U Can Find Parking</h3>
                </Navbar>
                <Row className="pt-5">
                    <GarageList garages={this.state.garages}/>
                </Row>
            </div>
        );
    }
}

export default Home;