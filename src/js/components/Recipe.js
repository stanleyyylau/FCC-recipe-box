import React from "react";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Popover, Tooltip, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import AddRecipe from './AddRecipe';



const Recipe = React.createClass ({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  deleteRecipe(index){
    console.log("hello from deleteRecipe from recipe.js");
    this.props.deleteRecipe(index);
  },

  render(){
    var self = this;
    var innerList=[];
    var data = this.props.recipesData;
    data.forEach(function(value, index){
      var listItems = [];
      value.ingredients.forEach(function(itemvalue){
        listItems.push(
          <ListGroupItem key={itemvalue}>{itemvalue}</ListGroupItem>
        )
      })
      innerList.push(
        <Panel header={value.title} eventKey={index+1} key={index+1}>
          <h4 className="text-center">Ingredients</h4>
          <hr />
          <ListGroup>
            {listItems}
          </ListGroup>
          <div className="delete-btns">
            <Button bsStyle="danger" className="delete-btn" onClick={()=>{self.deleteRecipe(index)}}>Delete</Button>
            <AddRecipe recipe={value} editRecipe={self.props.editRecipe} indexIs={index} isedit={true}/>
          </div>
        </Panel>
      )
    }
  )

    return (
      <Accordion>
        {innerList}
      </Accordion>
      )

  }
})



export default Recipe;
