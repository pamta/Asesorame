import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import tutoring from "../../assets/tutoringdos.png";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Card className="bg-dark text-white">
          <Card.Img src={tutoring} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title style={titleStyle}>
              <strong>Asesórame</strong>
            </Card.Title>
            <Card.Text style={phraseStyle}>
              <strong>Encuentra a un tutor</strong>
            </Card.Text>

            <Link to="/signIn">
              <Button variant="primary" style={btnStyle}>
                Iniciar Sesión
              </Button>
            </Link>

            <br />
            <Link to="/signUp">
              <Button variant="primary" style={btnStyle}>
                Crear cuenta
              </Button>
            </Link>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

const btnStyle = {
  width: "12%",
  margin: "20px 0",
};

const titleStyle = {
  fontSize: "90px",
  marginTop: "7%",
};

const phraseStyle = {};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  margin: "auto",
};

/*
import {BrowserRouter as Router, Route} from 'react-router-dom'


*/
