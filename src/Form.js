// import './Form.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import axios from 'axios';

const FormSubmission = () => {
  const [formData, setFormData] = useState({ title: '', contents: '' });
  
  const handleInputChange = (e) => {
    setFormData({ 
        ...formData, 
        [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //submition stuff
    try {
        console.log('Posting data:', formData)
        await axios.post('http://localhost:5002/notes', formData); // may need curly brackets
        alert('Data posted successfully!');
        // Optionally, fetch and update the displayed data
      } catch (error) {
        console.error('Error posting data:', error);
    };
  
  };

  return (
    
    <div className="Form">
        <Form onSubmit={handleSubmit}>
        <Form.Label>
            Title:
            <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            />
        </Form.Label>
        <label>
            contents:
            <input
            type="text"
            name="contents"
            value={formData.contents}
            onChange={handleInputChange}
            />
        </label>
        <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </div>
  );
}

export default FormSubmission;