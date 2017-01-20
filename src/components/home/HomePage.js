import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cityActions from '../../actions/cityActions';

class HomePage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      city: {name: ''}
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onNameChange(event){
    const city = this.state.city;
    city.name = event.target.value;
    this.setState({city:city});
  }
  onClickSave(){
    this.props.actions.createCity(this.state.city);
  }
  cityRow(city, index){
    return <div key={index}>{city.name}</div>;
  }
  render(){
    return (
      <div className="jumbotron">
      {this.props.cities.map(this.cityRow)}
        <h1>Weather App with React</h1>
        <input type="text" onChange={this.onNameChange} value={this.state.city.name} />
        <input type="submit" value="Save" onClick={this.onClickSave} />
        <p>Built with React, React Router, Express and MongoDB</p>
        <Link to="about" className="btn btn-primary btn-lg">More About This App</Link>
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  cities: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(cityActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage) ;
