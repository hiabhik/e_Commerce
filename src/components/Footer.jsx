import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../index.css";

function Footer() {
  return (
    <>
      <MDBFooter className="text-center" color="white" bgColor="dark">
        <MDBContainer className="p-4">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f">
                <img className="footericons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"alt=""/>
              </MDBIcon>
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="visa">
              <img className="footericons" src="https://w7.pngwing.com/pngs/992/823/png-transparent-visa-credit-card-gift-card-payment-cheque-mastercard-s-blue-text-service-thumbnail.png"alt=""/>
              </MDBIcon>
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="paypal">
                <img className="footericons" src="https://w1.pngwing.com/pngs/138/644/png-transparent-paypal-logo-text-line-blue-thumbnail.png" alt=""/>
              </MDBIcon>
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="mastercard">
              <img className="footericons" src="https://w7.pngwing.com/pngs/648/903/png-transparent-mastercard-logo-logo-payment-visa-mastercard-paypal-mastercard-icon-text-service-mobile-payment-thumbnail.png" alt=""/>
              </MDBIcon>
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in">
              <img className="footericons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png?20140125013055" alt=""/>
              </MDBIcon>
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="amazon pay">
              <img className="footericons" src="https://www.citypng.com/public/uploads/preview/-11596410140qyi0u0o2pg.png" alt=""/>
              </MDBIcon>
            </MDBBtn>
          </section>

          <section className="">
            <form action="">
              <MDBRow className="d-flex justify-content-center">
                <MDBCol size="auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>

                <MDBCol md="5" start>
                  <MDBInput
                    contrast
                    type="email"
                    label="Email address"
                    className="mb-4"
                  />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn outline color="light" type="submit" className="mb-4">
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>

          <section className="">
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Catogory</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Phone
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Tablets
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Headset
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Speaker
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Supporters</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Amazon
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Flipkart
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Snapdeal
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Meesho
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Direct Sellers</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Apple
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Samsung
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Oneplus
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Realme
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Laptops</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Apple
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Dell
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Hp
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Asus
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://google.com/">
            @abhik
          </a>
        </div>
      </MDBFooter>
    </>
  );
}

export default Footer;