import React, { Component } from 'react';

import logo from './sun.png';

import {

  Container,
  Navbar,
  NavbarBrand,
  Row,
  Col,
  Input,
  Button,
  InputGroupAddon
} from 'reactstrap';

import Weather from './Weather';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import InputGroup from 'reactstrap/lib/InputGroup';
import FormGroup from 'reactstrap/lib/FormGroup';

class App extends Component {

  constructor(props){

    super(props);

    this.state = {

      weather: null,
      cityList: [],
      newCityName: ''

    };
  }

  getCityList = () => {
    fetch('/api/cities')
    .then(res => res.json())
    .then(res => {
      var cityList = res.map(r => r.city_name);
      this.setState({ cityList });
    });
  };

  handleInputChange = (e) => {

    this.setState({ newCityName: e.target.value });

  };

  handleAddCity = () => {

    fetch('/api/cities', {

      method: 'post',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ city: this.state.newCityName })
    })

    .then(res => res.json())
    .then(res => {

      this.getCityList();
      this.setState({ newCityName: ''});

    });
  };

  handleChangeCity = (e) => {

    this.getweather(e.target.value);

  }

  getweather = (city) => {

    fetch(`/api/weather/${city}`)
    .then(res => res.json() )
    .then(weather => {
      console.log(weather);
      this.setState({ weather});
    });
  }

  componentDidMount() {

    this.getCityList();
  }
  render() {
    return (
      
      <Container fluid className = "centered">
        <Navbar dark color = "dark">

          <NavbarBrand href = "/">MyWeatherApp</NavbarBrand>
        </Navbar>
        <Row>
          <Col>

            <Jumbotron>

              {/* //<div className = "logo">

                
              </div> */}
              <img src = {logo} className = "logo"/>
              <h1 className = "display-3">MyWeatherApp</h1>
              <p className = "lead">The current weather for your favorite cities</p>

              <InputGroup>

                <Input

                placeholder = "New City"
                value = {this.state.city_name}
                onChange = {this.handleInputChange}
                />

                <InputGroupAddon addonType = "append"> 

                  <Button color = "primary" onClick = {this.handleAddCity}>Add City</Button>
                </InputGroupAddon>
                
              </InputGroup> 
            </Jumbotron> 

                     
          </Col>
        </Row>

        <Row>
          <Col>
          
              <h1 className = "display-5">Current Weather</h1>
              <FormGroup>

                <Input type = "select" onChange = {this.handleChangeCity}>

                  { this.state.cityList.length === 0 && <option>No cities added yet.</option>}
                  { this.state.cityList.length > 0 && <option>Select a city</option> }
                  { this.state.cityList.map((city, i) => <option key = {i}>{city}</option>)}
                </Input>
              </FormGroup>
          </Col>
        </Row>

        <Weather data = {this.state.weather}/>

      </Container>


    );
  }
}

export default App;
