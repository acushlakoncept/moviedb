import React from "react";
import { Button, Modal } from "react-bootstrap";


class DisplayModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Create Movie
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            { this.props.hasSubmit &&
             <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
            }
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

// function DisplayModal({children,  hasSubmit}) {
//   const [show, setShow] = useState(false);
//   let modal = useRef(null)

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Create Movie
//       </Button>

//       <Modal ref={modal} show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Create Movie</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {children}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
          // { hasSubmit &&
          //    <Button variant="primary" onClick={handleClose}>
          //     Save Changes
          //   </Button>
          // }
         
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

export default DisplayModal