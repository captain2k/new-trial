import { ReactNode } from "react";
import React from "../.././asset/images/reactjs.png";
import ReactNative from "../.././asset/images/reactNative.png";
import Nodejs from "../.././asset/images/nodejs.png";
import MySQL from "../.././asset/images/mysql.png";
import ElasticSearch from "../.././asset/images/elasticSearch.png";
import Javascript from "../.././asset/images/javaScript.png";
import MongoDb from "../.././asset/images/mongodb.png";
import Aws from "../.././asset/images/aws.png";
import Nginx from "../.././asset/images/nginx.png";

type Technology = {
  logo: ReactNode;
  technology: string;
  description: string;
};

export const TECHNOLOGIES: Technology[] = [
  {
    logo: React,
    technology: "React",
    description:
      "Technologies that create any website  which increases the effectiveness of your project",
  },
  {
    logo: ReactNative,
    technology: "React Native",
    description:
      "Create native apps for Android and iOS which is combines the best parts of native development",
  },
  {
    logo: Nodejs,
    technology: "Node.js",
    description:
      "Primarily used for non-blocking, event-driven servers, back-end API services",
  },
  {
    logo: MySQL,
    technology: "MySQL",
    description:
      "Allows users to create a view, stored procedure, function in a database",
  },
  {
    logo: ElasticSearch,
    technology: "ElasticSearch",
    description:
      "Store, search, give back answers of analyze huge volumes of data quickly",
  },
  {
    logo: Javascript,
    technology: "Javascript",
    description:
      "Create dynamic and interactive web content like applications and browsers",
  },
  {
    logo: MongoDb,
    technology: "MongoDB",
    description:
      "A document database used to build highly available, scalable internet applications",
  },
  {
    logo: Aws,
    technology: "AWS",
    description:
      "Provides a massive global cloud infrastructure based on your workload demand",
  },
  {
    logo: Nginx,
    technology: "Nginx",
    description:
      "Asynchronous structure server allows processing of many requests at the same time",
  },
];
