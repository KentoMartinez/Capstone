import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";

export default function SignUp({showMessage}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
      showMessage( username +" " + 'Log In','Success');
      localStorage.setItem('username', username);
      navigate(`/products`);
      })
      .catch((error) => {
        showMessage(error.message,'danger');
      });
    

  }

  return (
    <>
      <Form onSubmit={handleLogin} >
        <h2>REGISTER</h2>
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
          
          <Form.Control
            type="password"
            placeholder="Password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Email</Form.Label>
        <Form.Control
            type="email"
            placeholder="Email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Phone</Form.Label>
        <Form.Control
            type="number"
            placeholder="Phone"
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button
        variant="danger"
        onClick={ () => {
          navigate("/guestproducts");
        }}
        >
          Cancel
        </Button>
      </Form>
    </>
  );
}
