import React, { Component } from 'react';
import logo from './sun.png';


import {
  Container,
  Row,
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  Button,
  FormGroup,
  Input,
  Col
} from 'reactstrap';
import Weather from './Weather';
import Forecast from './Forecast';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       weather: null,
       forecast: null,
       cityList: [],
       newCityName: '',
       isToggleOn: false,
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
     if (this.state.newCityName) {
      fetch('/api/cities', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city: this.state.newCityName })
      })
      .then(res => res.json())
      .then(res => {
        this.getCityList();
        this.setState({ newCityName: '' });
      });
    }
  };

  getWeather = (city) => {
    fetch(`/api/weather/${city}`)
    .then(res => res.json())
    .then(weather => {
      console.log(weather);
      this.setState({ weather });
    });
  };

  getForecast = (city) => {
    fetch(`/api/forecast/${city}`)
    .then(res => res.json())
    .then(forecast => {
      console.log(forecast);
      this.setState({ forecast });
    });
  };

  handleChangeCity = (e) => {
    
    this.getWeather(e.target.value);
    this.getForecast(e.target.value);
  };

  handleClick  = (e) => {
   this.setState({ isToggleOn: ! (this.state.isToggleOn)  });
 };

  componentDidMount () {
    this.getCityList();
  }

  render() {
    return (
      <Container fluid className="centered">
        <Row>
          <Col>
            <Jumbotron>

            <img src = {logo} className = "logo"/>
            <h3 className = "display-3">WeatherWise</h3>
              <InputGroup>
                <Input
                  placeholder="New city name..."
                  value={this.state.newCityName}
                  onChange={this.handleInputChange}
                />
                <InputGroupAddon addonType="append">
                  <Button color="primary" onClick={this.handleAddCity}>Add City</Button>
                </InputGroupAddon>
              </InputGroup>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-5">Current Weather</h1>
            <FormGroup>
              <Input type="select" onChange={this.handleChangeCity}>
                { this.state.cityList.length === 0 && <option selected disabled>No cities added yet.</option> }
                { this.state.cityList.length > 0 && <option selected disabled>Select a city.</option> }
                { this.state.cityList.map((city, i) => <option key={i}>{city}</option>) }
              </Input>
            </FormGroup>
            <Button color="primary" onClick={this.handleClick}>
              Forecast {this.state.isToggleOn ? 'On' : 'Off'}
            </Button>
          </Col>
        </Row>
        {this.state.isToggleOn ? <Forecast data={this.state.forecast}/> : <Weather data={this.state.weather}/>  }
      </Container>

    );
  }
}

export default App;