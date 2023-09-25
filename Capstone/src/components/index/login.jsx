import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";

export default function LogIn({showMessage}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  function handleLogin(event) {
    event.preventDefault();


    fetch('https://fakestoreapi.com/auth/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": username ,
        "password": password ,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
      showMessage( username +" " + 'Logged In','success');
      localStorage.setItem('username', username);
      navigate(`/products`);
      })
      .catch((error) => {
        showMessage(error.message,'danger');
      });
    

  }

  return (
    <>
      <Form onSubmit={handleLogin}>
        <h2>Log In</h2>
        <Form.Group className="mb-3" controlId="formGroupUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              aria-describedby="inputGroupPrepend"
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <br />
          <Form.Control
            type="password"
            placeholder="Password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />
        <div className="flex-column">
        <Button variant="primary" type="submit">
          Log In
        </Button>
        <Button variant="success"
        onClick={() => {
          navigate("/sign")
        }}
        >
          Register
        </Button> <br />
        <Button
          onClick={() => {
            localStorage.removeItem("username") 
            navigate(`/guestproducts`)
          }}
          variant="secondary"
        >
          Guest
        </Button>
        </div>
      </Form>
      
    </>
  );
}
