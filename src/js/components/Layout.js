import React from "react";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Popover, Tooltip, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import AddRecipe from './AddRecipe';
import Recipe from './Recipe';

import Model from './Model';



var dataBase = new Model("stanley_codepen");



const Layout = React.createClass ({
  getInitialState(){
    return {data : dataBase.recipes};
  },

  deleteRecipe(index){
    var newData = [];
    console.log("the index is " + index);
    this.state.data.forEach(function(value, i){
      if(index!=i){
        newData.push(value);
      }
    });
    console.log(newData);
    dataBase.deleteRecipe(index);
    this.setState({data: newData});
  },

  addRecipe(obj){
    var newData = [];
    this.state.data.forEach(function(value){
        newData.push(value);
    });
    newData.push(obj);
    dataBase.addRecipe(obj);
    this.setState({data: newData});
  },

  editRecipe(index, newObj){
    var newData = this.state.data;
    newData[index]=newObj;
    dataBase.editRecipe(index, newObj);
    this.setState({data: newData});
  },

  render(){
    return (
      <div>
        <Recipe editRecipe={this.editRecipe} recipesData={this.state.data} deleteRecipe={this.deleteRecipe}/>
        <AddRecipe addRecipe={this.addRecipe} addoredit="large"/>
      </div>
    );
  }
})

export default Layout;
