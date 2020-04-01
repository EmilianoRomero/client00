import React, { Component } from "react";
import "./SearchCity.css";

export default class SearchCity extends Component {
  
  searchUpdate() {
    const search = this.val.value 
    //myValue is the input element, y acá almacenamos localmente ese valor
    
    //console.log(val) 
    //Yo no puedo update el estado desde el child usando acá this.setState
    //Lo que tengo que hacer es pasar el valor del placeholder ingresado
    //al parent y en el parent update el state
    //Eso lo hago creando filterUpdate en el parent y pasándole
    //value como parámetro

    //Con esto mandamos el valor al parent. En realidad esto no
    //tiene que ver con las props de este componente sino con las pasadas
    //como propiedad a <Search filterUpdate={this.filterUpdate.bind(this)}/>
    //Cada vez que tipeamos algo nuevo -onChange- val se actualiza
    //y con esto de abajo enviamos ese valor al parent vía filterUpdate method
    //que es un method del child
    this.props.searchUpdate(search)
  }

  render() {
  console.log("filteredCities value", this.props.filteredCities)
  /*para chequear si hay comunicación parent-child*/
    return (
      <form className="search-form">
        <input
          className="search-box"
          //value = the value that's being typed
          //We pass a callback function with value as a parameter
          //and we store it inside val 
          ref={ (typedValue) => { this.val = typedValue} }
          type="text"
          placeholder={"search your city!"}
          onChange={this.searchUpdate.bind(this)}
        ></input>
      </form>
    );
  }
}
