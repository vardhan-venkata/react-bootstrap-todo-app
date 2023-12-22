import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useTaskLayerValue } from "./context/TaskContext";
import TodoList from "./components/TodoList";
import { Button, Card, Col, Form, Row, ToastContainer } from "react-bootstrap";
import { Toast } from "react-bootstrap";
import { HiOutlinePlus } from "react-icons/hi";

const App = () => {
  const [{ tasks }, dispatch] = useTaskLayerValue();
  const [showToast, setShowToast] = useState(false);
  const [content, setContent] = useState("");

  const inputRef = useRef(null);
  const toggleToast = () => {
    setShowToast(!showToast);
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!content && content.length < 3) {
      setShowToast(true);
      return;
    }

    const newTask = {
      id: Math.floor(Math.random() * 94875893456),
      content,
      isCompleted: false,
    };

    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });

    setContent("");
  };

  return (
    <>
      <Navbar expand="xs" className="bg-body-tertiary" bg="dark">
        <Container>
          <Navbar.Brand>
            {" "}
            <h2>Todo - List </h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <ToastContainer position={"top-end"} style={{ zIndex: 1 }}>
        <Toast
          show={showToast}
          onClose={toggleToast}
          delay={3000}
          autohide
          bg="danger"
        >
          <Toast.Header>
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>Please enter something to proceed</Toast.Body>
        </Toast>
      </ToastContainer>
      <Row className="justify-content-md-center mt-5">
        <Col className="col-12 col-md-6">
          <Card
            text="white"
            className="mb-2"
            style={{ backgroundColor: "#10101d", padding: ".5em" }}
          >
            <Card.Header className="fw-bold" style={{ fontSize: "20px" }}>
              Things to be done
            </Card.Header>
            <Card.Body>
              <div className="add-task">
                <Form onSubmit={handleSubmit}>
                  <Row className="justify-content-between g-1">
                    <Col className="col-xs-9 col-sm-10 col-md-10">
                      <Form.Control
                        ref={inputRef}
                        autoComplete="off"
                        placeholder="Add New Task"
                        className="mb-2 add-task-input mr-0"
                        onChange={(event) => setContent(event.target.value)}
                        value={content}
                      />
                    </Col>
                    <Col xs="auto">
                      <Button
                        style={{
                          backgroundColor: "#ee9ca7",
                          borderColor: "#ee9ca7",
                        }}
                        type="submit"
                        className="mb-2"
                      >
                        <HiOutlinePlus />
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>

              <TodoList tasks={tasks} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default App;
