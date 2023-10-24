import React from "react";
import { Container, Typography, Link, Grid, Paper } from "@mui/material";

const Profile = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Valentin Olar
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Forest Hills, NY, USA
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Email:{" "}
          <Link href="mailto:vali.olar@gmail.com">vali.olar@gmail.com</Link>
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          LinkedIn:{" "}
          <Link href="https://www.linkedin.com/in/valentin-olar">
            www.linkedin.com/in/valentin-olar
          </Link>
        </Typography>
        <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
          Summary
        </Typography>
        <Typography variant="body1" paragraph>
          Senior software engineer with 13 years of experience in systems
          architecture, development, deployment, and administration. Thrive in
          dynamic startup and corporate environments. Enthusiastic team player
          with a love for nature and sports, and driven by a relentless passion
          for learning and innovation. Currently specializing in modern web
          application development, automation, and efficient implementation
          strategies.
        </Typography>
        <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
          Experience
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Senior Software Engineer Bowery Valuation (Jan 2022 - Sept 2023)
        </Typography>
        <Typography variant="subtitle1" gutterBottom></Typography>
        Javascript / Typescript /React / Material UI / NodeJS / NestJS / MongoDB
        / AWS Lambda / Playwright / Jest / React Testing Library / Miro / Jira /
        Git / JSON / OpenXML / C# / Datadog / Redux / Mobx / CI/CD / Docker /
        AWS / Postman / Shape Up / Notion / LaunchDarkly
        <Typography variant="subtitle1" gutterBottom></Typography>
        <Typography variant="body1" paragraph>
          Designed and developed Automated Zoning feature using 2 week shape up
          cycle methodology, build robust third party service using Nest to
          consume and parse data from zoneomics api. Integrated backend code
          with frontend react components. Lead, designed and developed Client
          Diligence Portal - Report Dashboard feature enabling purchase of
          report add-ons. Lead engineer on building responsive layout using
          Mobx, React, Material UI, Node and Salesforce. Orchestrated project
          management via Miro boards, Notion, Scope Hill Charts and Jira
          dashboards. Initiated, managed and delivered Node 18 migration project
          for WebApp. Driving initiatives like integrating AI technologies such
          as ChatGPT and Claude into the Appraiser WebApp. Reducing Appraiser
          Time on the App: Leveraging 6-Week Shape Up cycles, design, build and
          deploy content reuse and content library platform using React, Redux,
          Node, Express, Nest, Material UI, Serverless Lambda functions. Ensured
          robust observability through comprehensive testing practices and
          logging using Jest, React Testing Library, Playwright and Datadog.
          Spearheaded AI integration by implementing Git Copilot and showcasing
          AI test generation to improve developer workflow. Introduced
          end-to-end tests and integrated text management API into Playwright
          testing framework. Used sonarCloud to monitor code quality. Decoupled
          features into microservices, improving modularity and code writing by
          writing all new code in Typescript and refactoring React Class
          Components into Functional Components. Conducted interviews and
          onboarding. Established collaborative engineering culture through
          "Code & Coffee" and tech-focused gatherings.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Senior Software Engineer Refinitiv, an LSEG business (Aug 2010-Jan
          2021) Scivantage (acquired by Refinitiv in April 2020)
        </Typography>
        <Typography variant="subtitle1" gutterBottom></Typography>
        AngularJS / ExtJS / PHP / JS / Ansible / XML / CSS / Jira / YAML /
        Laravel / Laminas( Zend ) / SVN / Ant / Jenkins / MongoDB / MYSQL
        <Typography variant="subtitle1" gutterBottom></Typography>
        <Typography variant="body1" paragraph>
          Developed a range of financial widgets by utilizing AngularJS
          directives, which were integrated into the Scivantage Widget Library
          and deployed across numerous client platforms. Co-designed and managed
          Production Support process using Jira, Teams / Slack to stabilize
          software and ensure client satisfaction. Designed and developed
          features for the Digital Investor Platform, leveraging AngularJS
          directives and the Laminas (Zend) PHP framework. Ensured accessibility
          (a11y) and responsive design. Designed and Implemented Wealth
          Management document sharing feature using AngularJS, Bootstrap, Php
          (Zend), MongoDb and citrix sharefile api. Design and implement code
          merge / release process for client onboarding, feature building and
          code releases. Designed, developed and deployed onboarding process and
          infrastructure for 18 Clients onto Scivantage Maxit (multi-tier cost
          basis platform) using Ansible, LAMP, Redhat VM’s, Shell and Php
          scripts. Designed, developed Scivantage Maxit Cost Basis platform
          features using HTML, PHP, ExtJs, CSS, Ansible. Participated in
          migration from Oracle to DB2 platform as Dev-ops / FE engineer.
          Implemented single sign on feature to integrate with siteminder as
          identity provider. Onboarded 30+ clients on the cost basis platform
          using various shell and php scripts and then updated the tech
          department to use ansible as our new client setup tool.
        </Typography>
        <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
          Education
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Politehnica University of Timișoara, Romania 2006 Engineer’s Degree,
          Automatics and Industrial Information Systems
        </Typography>
      </Paper>
    </Container>
  );
};

export default Profile;
