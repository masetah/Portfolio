import React, {Component} from 'react';
// import Footer from '../Components/Footer';
import {Grid, Cell } from 'react-mdl';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Contact extends Component {
    render() {
        return (
        <div className="contact-body">
           <Grid className="contact-grid">
               <Cell col={6} >
                   <h2>Mase Taherian, PMP</h2>
                   <img 
                   src="IMG_6956.png"
                   alt="Mase Taherian"
                   style={{height: '225px', borderRadius: '25px'}}
                   />
                   <p style={{width: '90%', margin: 'auto', paddingTop: '1em'}}>Thank you for visiting my site. I would enjoy discussing any opportunities your organization may have available. Select an option below to connect with me directly or fill the Contact Me form out to have a message sent to me.</p>

                   <div className="contact-links">
                        <a href="https://www.linkedin.com/in/masetaherian/" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-linkedin-square" aria-hidden="true"/>
                        </a>

                        <a href="mailto:masetaherian@gmail.com" >
                            <i className="fas fa-envelope-square"/>
                        </a>

                        <a href="tel:817-832-1355"  >
                            <i className="fas fa-phone-square" />
                        </a>
                    </div>
               </Cell>
               <Cell col={6}>
                   <div className="contact-me">
                   <h2>Contact Me</h2>
                   <hr/>
                   <div className="contact-form">
                   <Form action="https://formspree.io/xyyynjrn" method="POST">

                   <FormGroup row>
                   <Label for="name" sm={2}>Name</Label>
                   <Col sm={10}>
                   <Input type="text" name="name" placeholder="First & Last" />
                   </Col>
                   </FormGroup>

                   <FormGroup row>
                   <Label for="phone" sm={2}>Phone</Label>
                   <Col sm={10}>
                   <Input type="tel" name="phone" placeholder="000-000-0000" />
                   </Col>
                   </FormGroup>  

                   <FormGroup row>
                   <Label for="email" sm={2}>Email</Label>
                   <Col sm={10}>
                   <Input type="email" name="email" placeholder="Your_Name@company.com" />
                   </Col>
                   </FormGroup>

                   <FormGroup row>
                   <Label for="postion" sm={2}>Position</Label>
                   <Col sm={10}>
                   <Input type="text" name="position"  placeholder="Your Position" />
                   </Col>
                   </FormGroup>

                   <FormGroup row>
                   <Label for="company" id="company-label" sm={2}>Company </Label>
                   <Col sm={10}>
                   <Input type="text" name="company" id="company-input" placeholder="Company Name" />
                   </Col>
                   </FormGroup>

                    <FormGroup row>
                    <Label for="message" id="message-label" sm={2}>Message</Label>
                    <Col sm={10}>
                    <Input type="textarea" name="message" />
                    </Col>
                    </FormGroup>

                    {/* <FormGroup row>
                    <Label for="exampleFile" sm={2}>File</Label>
                    <Col sm={10}>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                    This is some placeholder block-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
                    </FormText>
                    </Col>
                    </FormGroup> */}
      
                    <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                    </Col>
                    </FormGroup>
                    </Form>
                    </div>
                    </div>
               </Cell>
               {/* <Cell col={12}>
               <Footer/>
               </Cell> */}  
           </Grid>
           
        </div>
        )
    }
}

export default Contact;