import React from 'react';
import { Row, Col, Table } from 'reactstrap';
import Moment from 'react-moment';

const Forecast = (props) => {
  const { data } = props;

  if (!data)
    return <div></div>;

  return (
    <Row className="weather">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <h2>{data.city.name}</h2>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>MinTemp</th>
              <th>MaxTemp</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Moment format="MM-DD">{ data.list[4].dt_txt }</Moment></td>
              <td>{Math.floor(data.list[4].main.temp_min)}&deg;F</td>
              <td>{Math.floor(data.list[4].main.temp_max)}&deg;F</td>
              <td><img src={`http://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png`} alt="Weather Icon"/>{data.list[4].weather[0].main}
              </td>

            </tr>
            <tr>
              <td><Moment format="MM-DD">{ data.list[12].dt_txt }</Moment></td>
              <td>{Math.floor(data.list[12].main.temp_min)}&deg;F</td>
              <td>{Math.floor(data.list[12].main.temp_max)}&deg;F</td>
              <td><img src={`http://openweathermap.org/img/w/${data.list[12].weather[0].icon}.png`} alt="Weather Icon"/>{data.list[12].weather[0].main}
              </td>
            </tr>
            <tr>
              <td><Moment format="MM-DD">{ data.list[20].dt_txt }</Moment></td>
              <td>{Math.floor(data.list[20].main.temp_min)}&deg;F</td>
              <td>{Math.floor(data.list[20].main.temp_max)}&deg;F</td>
              <td><img src={`http://openweathermap.org/img/w/${data.list[20].weather[0].icon}.png`} alt="Weather Icon"/>{data.list[20].weather[0].main}
              </td>
            </tr>
            <tr>
              <td><Moment format="MM-DD">{ data.list[27].dt_txt }</Moment></td>
              <td>{Math.floor(data.list[27].main.temp_min)}&deg;F</td>
              <td>{Math.floor(data.list[27].main.temp_max)}&deg;F</td>
              <td><img src={`http://openweathermap.org/img/w/${data.list[27].weather[0].icon}.png`} alt="Weather Icon"/>{data.list[27].weather[0].main}
              </td>
            </tr>
            <tr>
              <td><Moment format="MM-DD">{ data.list[35].dt_txt }</Moment></td>
              <td>{Math.floor(data.list[35].main.temp_min)}&deg;F</td>
              <td>{Math.floor(data.list[35].main.temp_max)}&deg;F</td>
              <td><img src={`http://openweathermap.org/img/w/${data.list[35].weather[0].icon}.png`} alt="Weather Icon"/>{data.list[35].weather[0].main}
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default Forecast;