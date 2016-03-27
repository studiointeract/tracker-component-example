import React from 'react';
import Tracker from 'meteor/studiointeract:tracker-component';
import "/imports/models";

class Cars extends Tracker.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: this.props.brand
    };
    this.autorun(() => {
      this.subscribe( 'models', this.state.brand );
    });
    this.autorun(() => {
      this.setState({
        ready: this.subscriptionsReady(),
        cars: Models.find({ brand: this.state.brand }).fetch()
      });
    });
  }

  handleChange() {
    this.setState({brand: this.refs.brand.value});
  }

  render() {
    let {cars = []} = this.state;
    let selectBrand = this.handleChange.bind(this);
    let brands = ["Volvo", "Tesla", "DeLorean"];

    return (
      <div>
        <select ref="brand" onChange={selectBrand} defaultValue={this.state.selected}>
          {brands.map((brand, i) =>
            <option value={brand} key={i}>{brand}</option>
          )}
        </select>
        <ul className={["cars",
          this.state.ready ? "ready" : ""].join(' ')}>
          {cars.map((car, i) =>
            <li className="car" key={i}>{car.brand} {car.model}</li>
          )}
        </ul>
      </div>
    );
  }
}
Cars.propTypes = {
  brand: React.PropTypes.string
};
Cars.defaultProps = { brand: 'Volvo' };

export default Cars;
