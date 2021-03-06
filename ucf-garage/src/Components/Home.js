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
                    percentTaken: responseData[key].percentage_full,
                    didUpdate: false
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

    componentDidMount() {
      setInterval(() => {
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
                    percentTaken: responseData[key].percentage_full,
                    didUpdate: false
                }
                tmpGarages.push(garage);
            }

            var old = this.state.garages
            for(key in old) {
              if(old[key].current !== tmpGarages[key].current) {
                tmpGarages[key].didUpdate = true;
              }
            }

            this.setState({
                garages: tmpGarages
            })

        })
        .catch(error => {
            console.log('Error fetching and parsing data.', error);
        });
      }, 10000);
    }

    render() {
        return (
            <div style={{overflow: "hidden"}}>
                <Navbar className="bg-dark fixed-top">
                    <h3 className="mx-auto" style={{color: '#F6C344'}}>
                        <span style={{color: "white"}}>U</span>
                        <span style={{color: "white"}}>C</span>an
                        <span style={{color: "white"}}>F</span>ind Parking
                    </h3>
                </Navbar>
                <Row className="pt-5">
                    <GarageList garages={this.state.garages}/>
                </Row>
            </div>
        );
    }
}

export default Home;
