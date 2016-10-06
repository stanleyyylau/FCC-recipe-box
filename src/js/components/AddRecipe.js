import React from "react";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Popover, Tooltip, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import $ from 'jquery';


const formContentAdd = (
  <form>
    <FormGroup>
      <ControlLabel>Recipe</ControlLabel>
      <FormControl type="text" placeholder="Recipe Name" />
    </FormGroup>
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Ingredients</ControlLabel>
      <FormControl componentClass="textarea" placeholder="Enter Ingredients,Seperated,By Commas" />
    </FormGroup>
  </form>
);

// const formContentEdit = (
//   <form>
//     <FormGroup>
//       <ControlLabel>Edit Recipe</ControlLabel>
//       <FormControl type="text" value={title} />
//     </FormGroup>
//     <FormGroup controlId="formControlsTextarea">
//       <ControlLabel>Edit Ingredients</ControlLabel>
//       <FormControl componentClass="textarea" value={ingredientsStr} />
//     </FormGroup>
//   </form>
// );

const AddRecipe = React.createClass({
  getInitialState() {
    if(this.props.recipe){
      console.log(this.props.recipe);
      return {
        showModal: false,
        title: this.props.recipe.title,
        ingredients: this.props.recipe.ingredients.join(',')
      }
    }
    return { showModal: false};
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  onTitleChange(e){
    var value = e.target.value;
    console.log("title just chasnge..." + e.target.value)
    this.setState({title: value});
  },

  onIngreChange(e){
    var value = e.target.value;
    this.setState({ingredients: value});
  },

  addRecipe(){
    console.log("hi from add recipe");
    var obj = {};
    var title = $('input.form-control').val();
    var ingredientsStr = $('textarea.form-control').val();
    console.log(ingredientsStr);
    var ingredientsArr = ingredientsStr.split(',');
    obj.title = title;
    obj.ingredients = ingredientsArr;
    console.log(obj);
    this.props.addRecipe(obj);
    this.close();
  },

  editRecipe(index){
    console.log('index is' + index);

    var obj = {};
    var title = $('input.form-control').val();
    var ingredientsStr = $('textarea.form-control').val();
    console.log(ingredientsStr);
    var ingredientsArr = ingredientsStr.split(',');
    obj.title = title;
    obj.ingredients = ingredientsArr;
    console.log(obj);
    this.props.editRecipe(index, obj);
    this.close();


  },

  render() {
    console.log(this.props.recipe)
    var self = this;
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    if(this.props.isedit){
      console.log(this.props.recipe)
      var ingredientsStr = self.props.recipe.ingredients.join(',');
      var title = self.props.recipe.title;


      return(
        <div className="popUpBtn">
          <Button
            
            bsSize={this.props.addoredit}
            onClick={this.open}
          >
            Edit Recipe
          </Button>

          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Edit a Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup>
                  <ControlLabel>Edit Recipe</ControlLabel>
                  <FormControl type="text" value={this.state.title} onChange={self.onTitleChange}/>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Edit Ingredients</ControlLabel>
                  <FormControl componentClass="textarea" value={this.state.ingredients} onChange={self.onIngreChange}/>
                </FormGroup>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={()=>{this.editRecipe(this.props.indexIs)}}>Edit Recipe</Button>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    }

    return (
      <div className="popUpBtn">
        <Button
          bsStyle="primary"
          bsSize={this.props.addoredit}
          onClick={this.open}
        >
          Add Recipe
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            { formContentAdd }
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={()=>{self.addRecipe()}}>Add Recipe</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});


export default AddRecipe;
