import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
import decode from "jwt-decode";

const Header = () => {
  const [show, setShow] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const token = user?.token;

  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      dispatch(setLogout());
    }
  }

  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#f0e6ea" }}>
      <MDBContainer>
        <MDBNavbarBrand
          href="/home"
          style={{ color: "#606080", fontWeight: "600", fontSize: "22px" }}
        >
          MyWebsite
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toogle navigation"
          onClick={() => setShow(!show)}
          style={{ color: "#606080" }}
        ></MDBNavbarToggler>

        <MDBCollapse show={show} navbar>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink href="/bus-pass">
                {user?.result?._id && (
                  <h5 style={{ marginRight: "15px", marginTop: "20px" }}>
                    Bus Pass
                  </h5>
                )}
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/ticket">
                {user?.result?._id && (
                  <h5 style={{ marginRight: "30px", marginTop: "20px" }}>
                    Ticket
                  </h5>
                )}
              </MDBNavbarLink>
            </MDBNavbarItem>
            {user?.result?._id && (
              <h5 style={{ marginRight: "30px", marginTop: "27px" }}>
                Logged in as: {user?.result?.name}
              </h5>
            )}

            {user?.result?._id ? (
              <MDBNavbarItem>
                <MDBNavbarLink href="/login">
                  <p className="header-text" onClick={() => handleLogout()}>
                    Logout
                  </p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            ) : (
              <MDBNavbarItem>
                <MDBNavbarLink href="/"></MDBNavbarLink>
              </MDBNavbarItem>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
