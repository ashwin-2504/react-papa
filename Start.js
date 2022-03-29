import React from "react";
import "./Start.css"
import logo from "../assets/logo.png"
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Start() {

    return (

        <div className="container-xxxl bg-light">

            <div className="d-flex">

                <div className="w-25 col-sm ">

                    <img src={logo} width="120px" padding-right="12px"></img>

                </div>

                <div className="col-sm">

                    <Nav className="mt-4 d-flex justify-content-sm-center">

                        <Nav.Item className="">

                            <Nav.Link id="menu" className=" text-dark" href="/">Start</Nav.Link>

                        </Nav.Item>

                        <Nav.Item className="nav-">

                            <Nav.Link id="menu" className=" text-dark" href="/partnerships">Partnerships</Nav.Link>

                        </Nav.Item>

                        <Nav.Item className="nav-">

                            <Nav.Link id="menu" className=" text-dark" href="/collaborations">Collaborations</Nav.Link>

                        </Nav.Item>

                        <Nav.Item className="nav-">

                            <Nav.Link id="menu" className=" text-dark" href="/users">Users</Nav.Link>

                        </Nav.Item>

                        <Nav.Item className="nav-">

                            <Nav.Link id="menu" className=" text-dark" href="/support">Support</Nav.Link>

                        </Nav.Item>

                    </Nav>

                </div>

                <div className="col-sm border border-dark">

                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABWElEQVRIie2WMUsDMRiGH2tRcLAFcbSov6CgdXMQ3MXF1Vmc6qLgX1Bn8Sc46E+w4OauCJ5UxUkX61QRa4d+x6X1cv2SO3VoXwgXvrz5niSXSw4GTaOe/caATaAMXAOtzEbURyfAt5Tjv4ICBAb4zieB61LPAfvAKpCX2ARQlMG8+QwiSSPAHvBBNNPe0gR2xZuZjgxAC6gBh1JqEgvbD7KCrhtJA2AxxlOh+72vpYXmgFtJ9gLMJHhLwKt4b0i55BWiWVQV/h3Dv5BkzCnAoc4U4HNLX2fwlFF/VoCfjPp0GrD5nX8pwKYn8YzoB/41DcFD8L+oBNwTnURahf5HYN5msp2ns8CFPKFzHV4qwcvAuNQfgBV5qlTHfu+6lnocIB8XpHPFBZa2SWCpJ3YFvCsmlErb/JzVlmsSn139qYxlriLduz0ACq5JfP8SCsCG1E+BhmeeAVIbP1plMuWJA3IAAAAASUVORK5CYII=" />

                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABEUlEQVRIie3UMUoDYRDF8Z8psqUpLBRrBS+gx7ATD6E5iSjeQQ/gJUzEwmChnZZaKZiQ0ljsLkhQM5/5Agr74DX7DfOfgZ1Hoz+qAl30Marcx2H1thCtY4DJN76parKqmAH9DM+6eTcArX2QE3yVAO7lBA8TwMNIw6UgeJI46My+rWCjUQL0LVIUBd8lgEO1UfBZAvg8oXamCuWNRu64nRNMmUo/wReSXLXayoDoKc9miMvqW/ZNG2VRNLla2MYudrCFTvX2intlnl/gGu/zDraGYzyLZ/UTjrD6G2AHpxgnAKc9xgmWo9BNPM4BnPYDNiLg24zQ2oNpyFdZvRKZLlGhnvvKPzXXti/Yy7hEo3+iD9EHtgdqxQnwAAAAAElFTkSuQmCC" />

                </div>

            </div>

        </div>


    );
}

export default Start;