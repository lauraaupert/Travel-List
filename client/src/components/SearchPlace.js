import React, { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import api from '../utils/api'


function SearchPlace() {
    const [name, setName] = useState("")
    // const location = name;
    console.log(name)

    function onSubmit(e) {
        e.preventDefault()
    api.geocode(name)
    .then(res => {
      const apiLatitude = res.data.data[0].latitude
      const apiLongitude = res.data.data[0].longitude
      console.log(apiLongitude)
    })
    .catch(err => console.log(err));
}


    return(

<Form>
  <Form.Group controlId="name">
    <Form.Label>Search a Place</Form.Label>
    <Form.Control type="name" placeholder="Enter place" onChange={(e) => setName(e.target.value)} value={name} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
   <Button variant="primary" type="submit" onClick={onSubmit}>
   Submit
 </Button>
 </Form>


    )
}

export default SearchPlace;