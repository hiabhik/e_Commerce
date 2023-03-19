import React from "react";
import "../App.css";
import Carousel from 'react-bootstrap/Carousel';
import c1 from "../datas/imgcarousal/corousel_1.png";
import c2 from "../datas/imgcarousal/corousel_2.png";
import c3 from "../datas/imgcarousal/corousel_3.png";

export default function Carousal() {
  return (
    <>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Ever Magnificient Design</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Wanting To Here More</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Astonishing Design And Color</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}