import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col, Card, Button, Form } from 'react-bootstrap';
import {useState} from "react";
import './App.css';
import {render} from "react-dom";

class num extends React.Component {
    //declarando variaveis e mostrando de onde ele precisa pegar pelas funções
    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            result: 0,
        };

        this.pegaNum1 = this.pegaNum1.bind(this);
        this.pegaNum2 = this.pegaNum2.bind(this);
    }

    pegaNum1(event) {
        this.setState({
            number1: Number(event.target.value),
        });
    }

    pegaNum2(event) {
        this.setState({
            number2: Number(event.target.value),
        });
    }

    multNum = () => {
        this.setState({
            result: this.state.number1 * this.state.number2,
        });
    }

    render() {
        return (
            <>
                <Container>
                    <div className="Layout">
                        <Card className="text-center">
                            <Card.Header><h1>Multiplicador</h1></Card.Header>
                            <Card.Body>
                                <Card.Title>Insira os numeros e aperte o botão para fazer a multiplicação</Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="Numero1" style={{textAlign: 'left'}}>
                                            <Form.Label>Insira um numero</Form.Label>
                                            <Form.Control className="nome1" type="number" value={this.state.pegaNum1} onChange={this.pegaNum1} placeholder="Enter number"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="Numero2" style={{textAlign: 'left'}}>
                                            <Form.Label>Insira um numero</Form.Label>
                                            <Form.Control type="number" value={this.state.pegaNum2} onChange={this.pegaNum2}  placeholder="Enter number"/> <br/>
                                            <Row>
                                                <Col><Button variant="success" onClick={this.multNum}><b>Multiplicar</b></Button></Col>
                                                <Col><Form.Label> Resultado:</Form.Label>
                                                    <Form.Control type="number"  placeholder={this.state.result} readOnly/></Col>
                                            </Row>
                                        </Form.Group>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Multiplicador Web ReactJs - <a
                                href='https://github.com/kauefilgueiras'>https://github.com/kauefilgueiras</a></Card.Footer>
                        </Card>
                    </div>
                </Container>
            </>
        );
    }
}


export default num;
