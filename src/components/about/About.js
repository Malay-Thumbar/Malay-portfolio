/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";
import resume from "../../settings/resume.json"; // ✅ Import JSON

import './About.css';
import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName}, ${resume.basics.label}. ${resume.basics.description}`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img">
           <img src={profile} alt="Malay Thumbar" className="profile-img" />
          </div>

          <div className="_content_wrapper">
            <Typography component="h2" variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">{aboutme}</p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component="span"> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
