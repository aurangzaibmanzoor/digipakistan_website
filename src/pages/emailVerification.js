import React, { useState, useLayoutEffect } from "react";
import Container from "@material-ui/core/Container";
import MailIcon from "@material-ui/icons/DraftsOutlined";
import Copyright from "../components/common/copyright/Copyright";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { verifyEmail, clearAll, signOut } from "../store/actions/AuthActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Helmet } from "react-helmet";

const EmailVerification = ({
  uid,
  verifyEmail,
  clearAll,
  verifyEmailMsg,
  signOut,
  emailVerified,
  emailAddress,
  profile,
}) => {
  // State
  const [btnLoading, setBtnLoading] = useState(false);

  // Object Destructuring
  const { replace } = useHistory();

  useLayoutEffect(() => {
    // Resetting all
    if (verifyEmailMsg) {
      setTimeout(() => {
        clearAll();
        signOut(replace);
      }, 20000);
    }
  }, [verifyEmailMsg, clearAll, replace, signOut]);

  // User is logged in or not
  if (!uid) return <Redirect to="/apply-now/login" />;
  // Checking email is verified or not
  if (emailVerified) return <Redirect to="/apply-now/termsAndConditions" />;

  // Verification of email is going to send from here
  const handleVerifyMyEmail = () => {
    setBtnLoading(true);

    // sending email
    verifyEmail(setBtnLoading);
  };

  return (
    <>
      <Helmet>
        <title>Email Verification</title>
      </Helmet>
      <Container className="mt pt-4 email-verification d-flex flex-column align-items-center justify-content-center">
        <MailIcon className="icon" />
        <h1 className="fw-bold mx-3 text-center">Hi {profile.fullName}</h1>
        <p className="mx-3 text-center">
          First verify your Email Account as all communications will be done via
          email.
        </p>
        <div className="d-flex align-items-center">
          <p className="mb-0 me-3 small">To Verify Your Email</p>
          <Button
            disabled={btnLoading}
            onClick={handleVerifyMyEmail}
            variant="contained"
            className="custom-button"
          >
            {btnLoading && <CircularProgress className="loader" />}
            {btnLoading ? (
              <span className="ms-3">Sending Email...</span>
            ) : (
              "Click Here"
            )}
          </Button>
        </div>
        {verifyEmailMsg && (
          <>
            <Alert variant="outlined" severity="success" className="mt-3">
              We've sent an account activation email to you at{" "}
              <span className="fw-bold">{emailAddress}</span>, please check your
              inbox for an account activation link from DigiPAKISTAN.{" "}
            </Alert>
            <div className="d-flex justify-content-center mt-3">
              <Button
                onClick={() => signOut(replace)}
                variant="contained"
                className="custom-button"
              >
                Login Again
              </Button>
            </div>
          </>
        )}
      </Container>
      <Copyright />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    emailVerified: state.firebase.auth.emailVerified,
    verifyEmailMsg: state.auth.verifyEmailMsg,
    emailAddress: state.firebase.auth.email,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyEmail: (setBtnLoading) => dispatch(verifyEmail(setBtnLoading)),
    clearAll: () => dispatch(clearAll()),
    signOut: (push) => dispatch(signOut(push)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailVerification);
