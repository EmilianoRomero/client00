import React from "react";
import { connect } from "react-redux";
//import { NavLink } from "react-router-dom";
import { addFav } from "../store/actions/authActions";
import "normalize.css";
import "./Activities.css";
import HeaderLanded from "../screen/Header/HeaderLanded";
import HomeAuth from "../screen/Footer/HomeAuth";

class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tester: "",
      addToFav: [],
      button: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState({
      button: !this.state.button,
    });
  }

  handleChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      // [e.target.name]: e.target.value
      [name]: value,
      //name is tester and value is this.state.testingText
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let favourite = {
      testingTest: this.state.tester,
    };
    console.log(favourite);
    this.props.addFav(favourite);
  };

  addToFav = () => {
    if (this.state.addToFav.indexOf(this.state.tester) === -1) {
      let array = [...this.state.addToFav, this.state.tester];

      this.setState(
        {
          addToFav: array,
        },
        () => console.log(this.state.addToFav)
      );
    } else {
      // this.state.addToFav   // do nothing - return the same array
      // delete from the array the repeated

      let array = [...this.state.addToFav];
      let index = array.indexOf(this.state.tester);

      if (index > -1) {
        array.splice(index, 1);
      }

      this.setState(
        {
          addToFav: array,
        },
        () => console.log(this.state.addToFav)
      );
    }
  };

  onClick(event) {
    this.handleClick();
    this.addToFav();
    // this.gettingFavList();
  }

  render() {
    return (
      <div>
        <HeaderLanded />

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form">
            <div className="inputForm">
              <p>Email: </p>
              <input
                type="text"
                placeholder="Enter fav text"
                name="tester"
                value={this.state.tester}
                onChange={this.handleChange}
              />
            </div>
            <ul>
              {this.state.addToFav.map((fav) => {
                return <li>{fav}</li>;
              })}
            </ul>
            <button
              className={this.state.button ? "buttonTrue" : "buttonFalse"}
              onClick={() => {
                this.handleClick();
                this.addToFav();
              }}
            >
              Like
            </button>
          </div>
        </form>

        <div className="footer">
          <HomeAuth />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    favourites: state.favourites,
    // loading: state.favourites.loading,
    // isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (favourite) => dispatch(addFav(favourite)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);

// favourites now are what used to be my string 'text'
