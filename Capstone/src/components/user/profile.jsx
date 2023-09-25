import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function Profile({ showMessage }) {
  const [user, setUser] = useState({});
  const username = localStorage.getItem("username");
  useEffect(() => {
    function fecthUsers() {
      fetch(`https://fakestoreapi.com/users`)
        .then((res) => res.json())
        .then((Data) => {
          console.log(Data);
          const mainUser = Data.find((user) => user.username === username); 
          console.log(mainUser);
          setUser(mainUser);
          localStorage.setItem("userId", mainUser.id);
          showMessage(username + "'s Profile", "Success")
        })
        .catch((error) => { 
          showMessage(error.message, "danger");
        });
    }
    fecthUsers();
  }, [username]);
  return (
    <>
      <Card style={{ width: "110%" }}>
        <Card.Text>
          <b> YOUR PROFILE</b>
        </Card.Text>
        <br />
          <Form style={{ width: "100%" }}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridPassword"
                style={{ width: "100%" }}
              >
                <Form.Label>Name</Form.Label> <br />
                <Form.Text>
                  {user.name ? `${user.name.firstname} ${user.name.lastname}` : ''}
                </Form.Text>
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridEmail"
                style={{ width: "100%" }}
              >
                <Form.Label>Username</Form.Label> <br />
                <Form.Text>{user.username ? `${user.username}` : ''}</Form.Text>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridAddress1"
                style={{ width: "100%" }}
              >
                <Form.Label>Email</Form.Label> <br />
                <Form.Text>{user.email}</Form.Text>
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridAddress2"
                style={{ width: "100%" }}
              >
                <Form.Label>Address</Form.Label> <br />
                <Form.Text>
                  {" "}
                  {user.address?.number} {user.address?.street}
                </Form.Text>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridCity"
                style={{ width: "100%" }}
              >
                <Form.Label>City</Form.Label> <br />
                <Form.Text>{user.address?.city}</Form.Text>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridState"
                style={{ width: "100%" }}
              >
                <Form.Label>State</Form.Label> <br />
                <Form.Text>Arizona</Form.Text>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridZip"
                style={{ width: "100%" }}
              >
                <Form.Label>Zip</Form.Label> <br />
                <Form.Text> {user.address?.zipcode}</Form.Text>
              </Form.Group>
            </Row>
          </Form>
      </Card>
    </>
  );
}
