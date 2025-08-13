/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import images from public/images
import Sales1 from '../../assets/recentprojects/Sales insight 1.jpg';
import Sales2 from '../../assets/recentprojects/Sales insight 2.jpg';
import LoanVideo from '../../assets/recentprojects/Loan Prediction Model video.mp4';
import FinancialDashboard from '../../assets/recentprojects/Financial Dashboard.jpg';
import ExcelDashboard from '../../assets/recentprojects/Excel Dashboard.jpg';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Sales Insight Project', 
      description: `Analyzed 150,000 rows of sales data for a computer hardware business using MySQL and Power BI, creating a real-time sales dashboard.`,
      alter: 'Sales Insight Dashboard',
      image: `${Sales1}`, // could use Sales2 too or make carousel
    },
    { 
      id: 2,
      title: 'Loan Prediction Model', 
      description: `Developed a machine learning model on 250,000 records to predict loan outcomes, optimizing approval processes and reducing risk.`,
      alter: 'Loan Prediction Model',
      image: `${LoanVideo}`, // this is a video, could embed differently
    },
    { 
      id: 3,
      title: 'Financial Dashboard', 
      description: `Built a financial dashboard to analyze and track KPIs such as revenue, gross margin, and department-wise expenses over time.`,
      alter: 'Financial Dashboard',
      image: `${FinancialDashboard}`,
    },
    { 
      id: 4,
      title: 'Call Center Dashboard', 
      description: `Analyzed 32,942 call records using Excel, creating interactive dashboards to visualize call trends and improve response times.`,
      alter: 'Excel Dashboard',
      image: `${ExcelDashboard}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              {project.image.endsWith('.mp4') ? (
                <video controls width="100%">
                  <source src={project.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={ project.image } alt={ project.alter }/>
              )}
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
