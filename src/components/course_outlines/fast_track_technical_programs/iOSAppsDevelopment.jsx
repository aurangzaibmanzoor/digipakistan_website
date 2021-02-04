import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";

const IOSAppsDevelopment = () => {
  // State
  const [tabValue, setTabValue] = useState(0);

  const handleTab = (obj, ind) => {
    setTabValue(ind);
  };

  //   Media Query
  const isSmall = useMediaQuery({
    query: "(max-width: 400px)",
  });
  return (
    <>
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">iOS Apps Development</h1>
        <div className="row g-4 mb-5 pb-5">
          <div className="col-lg-8">
            <Paper square>
              <Tabs
                value={tabValue}
                variant={isSmall ? "scrollable" : "standard"}
                onChange={handleTab}
                scrollButtons={isSmall ? "on" : "off"}
                centered={isSmall ? false : true}
              >
                <Tab label="Overview" className="outline" />
                <Tab label="Curriculum" className="outline" />
                <Tab label="Instructor" className="outline" />
              </Tabs>
            </Paper>
            {tabValue === 0 && (
              <div className="my-3">
                <h3 className="fw-bold">Course Description</h3>
                <p className="text-justify">
                  This program is intended for anyone who wants to learn how to
                  develop Apps using Swift and iOS. you will learn topics
                  beginning with the absolute basics and ending with selling
                  your apps on the app store. This program provides the skills
                  you'll need to advance your programming career and seek
                  employment in Swift and iOS application development.
                </p>

                <p className="text-justify">
                  You'll create user interfaces and interact with user and
                  system data using tables and data persistence. You'll develop
                  fully functional applications and learn how to monetize them
                  with in-app add, purchases, and subscriptions.
                </p>

                <p className="text-justify">
                  By the end of this Professional Certificate program, you will
                  have completed several projects showcasing your proficiency in
                  Swift 5 and iOS programming, and you will have developed the
                  skills necessary to begin a career as a Swift and/or iOS
                  application developer. You will also be able to share evidence
                  of your success with your professional network and potential
                  employers.
                </p>

                <h3 className="fw-bold">Certificate</h3>
                <p className="text-justify">
                  On successful completion of the course participants will be
                  awarded participation certificate from DigiPAKISTAN. Also
                  prepare for International Exam.
                </p>
                <h3 className="fw-bold">Duration &amp; Frequency</h3>
                <p className="mb-0">Total Duration of the course is 3 months</p>
              </div>
            )}
            {tabValue === 1 && (
              <div className="my-3">
                <ul>
                  <li>Introduction to programming (Swift)</li>
                  <li>Basics of iOS (Introduction to XCode)</li>
                  <li>Creating Hello World and Guess Number App</li>
                  <li>Switch statements, Pick an app, World capitals app</li>
                  <li>iOS Auto Layout and Setting Constraints</li>
                  <li>
                    Handling Dynamic Contents (Table views in iOS) &amp;
                    Shopping List app
                  </li>
                  <li>
                    Handling Dynamic Horizontal Contents (Collection views in
                    iOS) &amp; Interlinking multiple View
                  </li>
                  <li>Multimedia in iOS &amp; Alerts in iOS</li>
                  <li>Social Media Interaction</li>
                  <li>Saving user information</li>
                  <li>Cocoapods in iOS (Using third party library)</li>
                  <li>Cocoapods in iOS (Using third party library)</li>
                  <li>Using MVC for Network Request API (Part 2)</li>
                  <li>Using The Network Request API (Part 3)</li>
                  <li>
                    Final app Development and testing and deployment to play
                    store.
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <Paper elevation={10} className="p-3 border">
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Total No. of Seats in Batch-01:{" "}
                <span className="text-success">1000 Students Only</span>
              </h6>
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Course Type:{" "}
                <span className="fw-normal">Fast Track Technical Program</span>
              </h6>
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Duration: <span className="fw-normal">3 Months</span>
              </h6>
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Language: <span className="fw-normal">Urdu / English</span>
              </h6>
              <Button
                variant="contained"
                fullWidth
                className="custom-button mt-3"
              >
                Apply Now
              </Button>
            </Paper>
          </div>
        </div>
      </Container>
      <div className="pt-5">
        <Copyright />
      </div>
    </>
  );
};

export default IOSAppsDevelopment;