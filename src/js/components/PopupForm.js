import React from "react";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Popover, Tooltip, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


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

const formContentEdit = (
  <form>
    <FormGroup>
      <ControlLabel>Edit Recipe</ControlLabel>
      <FormControl type="text" placeholder="Recipe Name" />
    </FormGroup>
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Edit Ingredients</ControlLabel>
      <FormControl componentClass="textarea" placeholder="Enter Ingredients,Seperated,By Commas" />
    </FormGroup>
  </form>
);

export default {formContentAdd, formContentEdit}
