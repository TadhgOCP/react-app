import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export function Login (props) {

  const [passwordText, setPasswordText] = useState('')

  const checkValue = () => {
    if (passwordText === 'Enter') {
      props.onSuccessfullLogin()
    }
  }

  return (
    <>
      <Row>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPasswordText(e.currentTarget.value)} />
        </Form.Group>
        </Form>
      </Row>

      <Row>
        <Form>
          <Button variant="primary" onClick={checkValue}>
          Submit
          </Button>
        </Form>
      </Row>
    </>
  )
}
