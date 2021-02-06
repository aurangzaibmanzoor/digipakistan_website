import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";

const VideoEditing = () => {
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
        <h1 className="text-center fw-bold mx-3">Video Editing</h1>
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
                  Adobe Premiere and After Effects is one of the most renowned
                  and sought-after video editing/animation platform in the
                  world. Editing is a skill and side by side art. Editing is
                  basically done for visual purposes to keep the attention of
                  your audience.
                </p>

                <p className="text-justify">
                  Employment of film and video editors is projected to grow 22
                  percent from 2019 to 2029, much faster than the average for
                  all occupations. Employment of camera operators is projected
                  to grow 14 percent from 2019 to 2029, faster than the average
                  for all occupations.
                </p>

                <p className="text-justify">
                  Video editing careers can be very lucrative for the right
                  people. According to the Bureau of Labor Statistics, the
                  average salary for a video editor was $58,210 in 2017, with
                  the highest salaries in the motion picture industries. A video
                  editor's salary will often depend on a number of different
                  factors, however.
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
                <ul className="fw-bold list-unstyled">
                  <li>
                    Premiere Pro
                    <ul className="fw-normal">
                      <li>Fundamentals of Video Editing &amp; PR</li>
                      <li>PR Workflow and Panels</li>
                      <li>Key frames &amp; Nesting</li>
                      <li>Audio Editing in Audition &amp; PR</li>
                      <li>Typography in PR</li>
                      <li>Cinematography</li>
                      <li>Colour, Stabilization, Presets</li>
                      <li>Exporting</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    After Effects
                    <ul className="fw-normal">
                      <li>Fundamentals of After Effects</li>
                      <li>Transformation of Layers</li>
                      <li>Key Frames &amp; Null Object</li>
                      <li>Slide Show with ADJ Layers</li>
                      <li>Camera &amp; 3D Objects</li>
                      <li>Lights</li>
                      <li>Motion Animation &amp; Puppet</li>
                      <li>Audio Spectrum</li>
                      <li>Tool Effects</li>
                      <li>Effect Bar, Logo Animation</li>
                      <li>Color Isolation</li>
                      <li>Masking and filling</li>
                      <li>Text Effects</li>
                      <li>Rotobrush &amp; Exporting</li>
                    </ul>
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
                <span className="fw-normal">
                  Fast Track Non-Technical Program
                </span>
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

export default VideoEditing;