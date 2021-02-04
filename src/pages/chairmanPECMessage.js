import React from "react";
import Container from "@material-ui/core/Container";
import Copyright from "../components/common/copyright/copyright";

const ChairmanPECMessage = () => {
  return (
    <>
      <Container className="mt provincial-minister pb-5">
        <div className="d-flex flex-column align-items-center pt-4">
          <img
            src="https://i.ibb.co/hcqbnw7/pec-img-1.jpg"
            alt="Engr. Jawed Salim Qureshi"
            className="about-img"
          />
          <h1 className="text-center title mx-3 fw-bold mt-3 mb-0">
            Engr. Jawed Salim Qureshi
          </h1>
          <p className="small mb-1">Chairman</p>
          <p className="small text-center">
            Pakistan Engineering Council <span className="fw-bold">(PEC)</span>
          </p>
        </div>

        <p>Assalam O Alaikum!</p>
        <p className="text-justify">
          DigiPAKISTAN a Skills Development Initiative is highly appreciated and
          appeared as a ray of hope for the youth who are job searcher today.
          DigiPAKISTAN will transform the youth from job taker to job creator
          which is a wonderful program. Youth must step in the IT field and
          excel as it has emerged as the biggest business after Covid-19. At
          present, the demand for IT professional and experts is much more than
          the IT specialists available so this is the right time to come forward
          and grab the opportunity.
        </p>
        <p className="text-justify">
          On the platform of Pakistan Engineering Council, I make a call to all
          engineers to ensure their attachment with DigiPAKISTAN and start
          developing your skills in the IT programs offered by this initiative.
          You can earn more than $50 a day using freelancing websites and
          working from home. There is an acute shortage of jobs at present and
          no need to pursue them, you are engineers MA SHA ALLAH and can easily
          acquire IT expertise which will also become part of your personality.
          These IT skills will support you in whatever field you are, no field
          will succeed without IT, may is be Electro medical, may it be mining,
          may it be mechanical, may it be electrical or may it be chemical, so
          move forward with IT.
        </p>
        <p className="text-justify mb-5">Thank you very much</p>
      </Container>
      <div className="mt-5 pt-3">
        <Copyright />
      </div>
    </>
  );
};

export default ChairmanPECMessage;