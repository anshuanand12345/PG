import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signin.css';


const Login = () => {

    const [form1, setform1] = useState("false");

    const handleToggle = () => {

        setform1(!form1);
    };
    return (
        <>
            <figure>
                <div className='back'>
                
                    <div className="form">
                       

                        <div className='form2'>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Full Name" />
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                    </Form.Group>

                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                    </Form.Group>

                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />

                                    <Form.Label> ReEnter Password</Form.Label>
                                    <Form.Control type="password" placeholder="ReEnter Password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="I agree with terms & condition." />
                                </Form.Group>
                                <Button className='but1'>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </figure>
        </>
    );
};

export default Login;