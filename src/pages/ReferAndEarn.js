import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "../loader/loader";
import { Redirect, Link, useHistory } from "react-router-dom";
import { statusOfAdmission } from "../store/actions/ApplicationFormActions";
import { signOut } from "../store/actions/AuthActions";
import { Helmet } from "react-helmet";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BookIcon from "@material-ui/icons/BookRounded";
import MenuIcon from "@material-ui/icons/MenuRounded";
import IconButton from "@material-ui/core/IconButton";
import DollarIcon from "@material-ui/icons/AttachMoney";
import UserIcon from "@material-ui/icons/PermIdentity";
import ExitIcon from "@material-ui/icons/ExitToApp";
import { useMediaQuery } from "react-responsive";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "react-bootstrap/Modal";
import BoySVG from "../assets/svgs/boy.svg";
import GirlSVG from "../assets/svgs/girl.svg";

const ReferAndEarn = ({
  status,
  profile,
  uid,
  emailVerified,
  applicationSubmitted,
  goingToApproveTheApplication,
  signOut,
}) => {
  // ? State
  const [openDrawer, setOpenDrawer] = useState(true);
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);

  // ? Model Openning and closing functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ? Object Destructuring
  const { push } = useHistory();

  // ? Getting Date
  const date = new Date();

  const getDays = date.getDay();

  const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const days = daysArray[getDays];

  const todayDate = date.getDate();

  const year = date.getFullYear();

  const getMonth = date.getMonth();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = monthNames[getMonth];

  useLayoutEffect(() => {
    if (profile.admissionStatus === false) {
      if (`${days}, ${month} ${todayDate}, ${year}` !== profile.approvalDate) {
        // Setting status is approved when next day is come
        goingToApproveTheApplication(uid);
      }
    }
  }, [
    month,
    profile.admissionStatus,
    profile.approvalDate,
    todayDate,
    uid,
    year,
    days,
    goingToApproveTheApplication,
  ]);

  // ? Media Query
  const isTab = useMediaQuery({
    query: "(max-width: 768px)",
  });

  // ! User is logged in or not
  if (!uid) return <Redirect to="/apply-now/login" />;
  // ! Checking email is verified or not
  if (!emailVerified) return <Redirect to="/apply-now/emailVerification" />;
  // ! Checking application is submitted or not
  if (!applicationSubmitted)
    return <Redirect to="/apply-now/applicationForm" />;

  // ? Drawer closing function
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  // ? toggling the drawer
  const toggleDrawer = () => {
    setTimeout(() => {
      setOpenDrawer(!openDrawer);
    }, 300);
  };

  // ? Closing the nav when screen is tab
  if (isTab) {
    if (count === 1) {
      setOpenDrawer(false);
      setCount(2);
    }
    // toggleDrawer();
  }

  // ? Openning the nav when screen is not tab
  if (isTab === false) {
    if (count === 2) {
      setOpenDrawer(true);
      setCount(1);
    }
  }

  // ! Drawer Width
  const drawerWidth = 300;

  return profile.fullName ? (
    <>
      <Helmet>
        <title>Refer &amp; Earn</title>
      </Helmet>

      <div className="mt dashboard">
        {/* // ? Navbar Dashboard */}
        <div
          className="position-relative"
          style={{ width: openDrawer ? 300 : 25, transition: "all .2s" }}
        >
          <div className="nav-btn" style={{ right: openDrawer ? -25 : 0 }}>
            <IconButton
              className="outline border border bg-white"
              style={{ zIndex: 1300 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Drawer
            anchor="left"
            open={openDrawer}
            variant="persistent"
            onClose={handleDrawerClose}
          >
            <List
              style={{
                width: drawerWidth,
                backgroundColor: "#01645f",
                height: "100%",
                color: "#fff",
                marginTop: 90,
              }}
            >
              <img
                src="https://i.ibb.co/Sd0qZ7X/dplmslogo.png"
                alt="DigiPAKISTAN"
                width="88%"
                className="mt-2 ms-2"
              />

              <div className="profile-dash d-flex align-items-center mt-3">
                {profile.image ? (
                  <img
                    src={profile.image}
                    alt="DigiPAKISTAN Dashboard Profile Pic"
                    className="profile-pic mx-3 rounded"
                  />
                ) : (
                  <img
                    src={profile.gender === "Male" ? BoySVG : GirlSVG}
                    alt="DigiPAKISTAN Dashboard Profile Pic"
                    className="profile-pic me-1"
                  />
                )}

                <div>
                  <h5 className="fw-bold me-3">{profile.fullName}</h5>
                  <Link to="/dashboard/updateProfile" className="small">
                    Update Profile
                  </Link>
                </div>
              </div>

              <div className="mt-3">
                <h6 className="fw-bold text-center">MAIN</h6>
                <ListItem
                  button
                  onClick={() => {
                    setTimeout(() => {
                      push("/dashboard");
                    }, 300);
                  }}
                >
                  <ListItemIcon>
                    <BookIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Course" />
                </ListItem>

                <ListItem button>
                  <ListItemIcon>
                    <i className="fas fa-cogs text-white"></i>
                  </ListItemIcon>
                  <ListItemText primary="How It Works" />
                </ListItem>

                <ListItem
                  button
                  onClick={() => {
                    setTimeout(() => {
                      push("/dashboard/referAndEarn");
                    }, 300);
                  }}
                >
                  <ListItemIcon>
                    <DollarIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Refer &amp; Earn" />
                </ListItem>

                <h6 className="fw-bold text-center mt-2">PERSONAL</h6>
                <ListItem
                  button
                  onClick={() => {
                    setTimeout(() => {
                      push("/dashboard/updateProfile");
                    }, 300);
                  }}
                >
                  <ListItemIcon>
                    <UserIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Update Profile" />
                </ListItem>

                <ListItem button onClick={() => signOut(push)}>
                  <ListItemIcon>
                    <ExitIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Log Out" />
                </ListItem>
              </div>
            </List>
          </Drawer>
        </div>

        {/* // ? Content Right Side */}
        <div
          className="px-5"
          style={{
            marginLeft: isTab ? 0 : 300,
            paddingTop: 35,
          }}
        >
          <h6 className="mb-5 fw-bold">
            {profile.fullName} / Refer &amp; Earn
          </h6>
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <h3 className="fw-bold mb-sm-0">Refer &amp; Earn</h3>
            <Button
              variant="contained"
              className="custom-button"
              onClick={handleShow}
            >
              Withdraw
            </Button>
          </div>

          <div className="d-flex flex-column mt-5 flex-lg-row flex-wrap align-items-center align-items-lg-start">
            {/* // ? Refer # */}
            <Paper elevation={10} className="border p-3 mt-4 refer me-lg-5">
              <Typography variant="h5" className="fw-bold text-center">
                Refer #
              </Typography>
              <Typography variant="body1" className="word-break text-center">
                {profile.referNo}
              </Typography>
            </Paper>

            {/* // ? Total Amount */}
            {/* // TODO: show total amount when payment is paid who use the refer code */}
            <Paper elevation={10} className="border p-3 mt-4 refer me-lg-5">
              <Typography variant="h5" className="fw-bold text-center">
                Total Amount
              </Typography>
              <Typography variant="body1">0</Typography>
            </Paper>

            {/* // ? Last Transaction Amount */}
            {/* // TODO: show last transaction amount here dynamic */}
            <Paper elevation={10} className="border p-3 mt-4 refer">
              <Typography variant="h5" className="fw-bold text-center">
                Last Transaction
              </Typography>
              <Typography variant="body1">0</Typography>
            </Paper>
          </div>
        </div>
      </div>

      {/* // * Withdraw Modal Here */}
      {/* // TODO: Make form and do backend */}
      <Modal show={show} onHide={handleClose} centered style={{ zIndex: 1300 }}>
        <Modal.Header>
          <Modal.Title className="fw-bold">Withdraw</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="contained"
            className="custom-button me-3"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="contained"
            className="custom-button"
            onClick={handleClose}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  ) : (
    <Loader />
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.firebase.profile.admissionStatus,
    profile: state.firebase.profile,
    uid: state.firebase.auth.uid,
    emailVerified: state.firebase.auth.emailVerified,
    applicationSubmitted: state.firebase.profile.applicationSubmitted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goingToApproveTheApplication: (uid) => dispatch(statusOfAdmission(uid)),
    signOut: (push) => dispatch(signOut(push)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReferAndEarn);
