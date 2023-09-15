import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Profile({showMessage}) {
  const [users, setUsers] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    function fecthUsers() {
      fetch(`https://fakestoreapi.com/users`)
        .then((res) => res.json())
        .then((json) => {
         setUsers(json);
        showMessage(username +"'s Profile" ,'Success');
        })
        .catch((error) => {
          showMessage(error.message,'danger');
        });
    }
    fecthUsers();
  }, []);
  return (
    <>
      <h3 style={{ marginTop: "5.5vmin" }}>Profile</h3>
      {users.map((user) => (
        <Card key={user.id} style={{ width: "70vmin" }}>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item> User ID: {user.id}</ListGroup.Item>
              <ListGroup.Item> Name: {user.name.firstname}{" "}{user.name.lastname}</ListGroup.Item>
              <ListGroup.Item> Username: {user.username}</ListGroup.Item>
              <ListGroup.Item> Email: {user.email}</ListGroup.Item>
              <ListGroup.Item> Phone: {user.phone}</ListGroup.Item>
              <ListGroup.Item> Address: {user.address.number}{" "}{user.address.street}{", "}{user.address.city}{" "}{user.address.zipcode}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
