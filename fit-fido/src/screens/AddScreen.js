import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const AddScreen = (props) => {
  const [addFoodList, setAddFoodList] = useState(props.foodList)
  const submitHandler = (e) => {
    e.preventDefault()
    const food = {
      Brand: e.target.formGridBrand.value,
      LifeStage: e.target.formGridLifeStage.value,
      Flavor: e.target.formGridFlavor.value,
      Type: e.target.formGridType.value,
      FoodForm: e.target.formGridFoodForm.value,
      KCal: e.target.formGridKCal.value,
      Measurement: e.target.formGridMeasurement.value
    }
    props.addFood(food);
  }

  useEffect(() => {
    setAddFoodList(props.foodList);
  }, [props.foodList])
  return (
    <div>
      <h3>Don't see your food here? Add it to our options</h3>
      <DropdownButton id="dropdown-basic-button" title="Available Foods">
        {addFoodList.map((food, idx) => (
          <Dropdown.Item key={idx}>{food.Brand} {food.LifeStage} {food.Type} {food.Flavor}</Dropdown.Item>
        ))}
      </DropdownButton>
      <Form onSubmit={submitHandler}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridBrand">
            <Form.Label>Brand Name</Form.Label>
            <Form.Control placeholder="Best Dog Food" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLifeStage">
            <Form.Label>Life Stage</Form.Label>
            <Form.Control placeholder="Adult" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridType">
            <Form.Label>Type</Form.Label>
            <Form.Control placeholder="Active Dog" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridFlavor">
            <Form.Label>Flavor</Form.Label>
            <Form.Control placeholder="Steak and Gravy" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridFoodForm">
            <Form.Label>Food Form</Form.Label>
            <Form.Control as="select" defaultValue="Dry">
              <option>Dry</option>
              <option>Wet</option>
              <option>Fresh</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridKCal">
            <Form.Label>KCal</Form.Label>
            <Form.Control placeholder="100"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMeasurement">
            <Form.Label>Measurement</Form.Label>
            <Form.Control as="select" defaultValue="Cup">
              <option>Cup</option>
              <option>Kg</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
{/* 
        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddScreen

