import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Profile({ showMessage }) {
  const [users, setUsers] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    function fecthUsers() {
      fetch(`https://fakestoreapi.com/users`)
        .then((res) => res.json())
        .then((json) => {
          const superUser = json.filter((user) => user.username === username);
          console.log(superUser);
          setUsers(superUser);
          localStorage.setItem("superUser", JSON.stringify(superUser.at(0)));
          showMessage(username + "'s Profile", "Success");
        })
        .catch((error) => {
          showMessage(error.message, "danger");
        });
    }
    fecthUsers();
  }, []);
  return (
    <>
      <h5>{" " + localStorage.getItem("username")}'s Profile</h5> <br />
      {users.map((user) => (
        <Form key={user.id} style={{ width: "100%" }}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword" style={{ width: "100%" }}>
              <Form.Label>Name</Form.Label> <br />
              <Form.Text>
                {user.name.firstname} {user.name.lastname}
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail" style={{ width: "100%" }}>
              <Form.Label>Username</Form.Label> <br />
              <Form.Text>{user.username}</Form.Text>
            </Form.Group>
      
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress1" style={{ width: "100%" }}>
              <Form.Label>Email</Form.Label> <br />
              <Form.Text>{user.email}</Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress2" style={{ width: "100%" }}>
              <Form.Label>Address</Form.Label> <br />
              <Form.Text>
                {" "}
                {user.address.number} {user.address.street}
              </Form.Text>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity" style={{ width: "100%" }}>
              <Form.Label>City</Form.Label> <br />
              <Form.Text>{user.address.city}</Form.Text>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState" style={{ width: "100%" }}>
              <Form.Label>State</Form.Label> <br />
              <Form.Text>Arizona</Form.Text>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip" style={{ width: "100%" }}>
              <Form.Label>Zip</Form.Label> <br />
              <Form.Text> {user.address.zipcode}</Form.Text>
            </Form.Group>
          </Row>
        </Form>
      ))}
    </>
  );
}
