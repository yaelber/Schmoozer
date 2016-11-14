import React, { Component } from 'react';
import render from 'react-dom';
import { Modal, form, FieldGroup, Checkbox, Button } from 'react-bootstrap';



const LoginModal = (props) =>  {
      return (
        <Modal className="login-modal" isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome Back!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email address"
                placeholder="Enter email"
              />
              <FieldGroup
                id="formControlsEmail"
                type="password"
                label="Password"
                placeholder="Enter password"
              />
              <Checkbox checked readOnly>
                Checkbox
              </Checkbox>
            </form> 
        </Modal.Body>
        <Modal.Footer>
          <Button>Log In</Button>
          <Button bsStyle="link">Dont have an account? Click here!</Button>
        </Modal.Footer> 
    </Modal>
  );
}


export default LoginModal


// const LogInModal = (props) => {
//   return (
//     <div className="static-modal">
//       <Modal.Dialog>
//         <Modal.Header>
//           <Modal.Title>Welcome Back!</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           const LogInForm = 
//             <form>
//               <FieldGroup
//                 id="formControlsEmail"
//                 type="email"
//                 label="Email address"
//                 placeholder="Enter email"
//               />
//               <FieldGroup
//                 id="formControlsEmail"
//                 type="password"
//                 label="Password"
//                 placeholder="Enter password"
//               />
//               <Checkbox checked readOnly>
//                 Checkbox
//               </Checkbox>
//             </form> 
//         </Modal.Body>

//         <Modal.Footer>
//           <Button>Log In</Button>
//           <Button bsStyle="link">Dont have an account? Click here!</Button>
//         </Modal.Footer>
//       </Modal.Dialog>
//     </div>
//   )
// };
