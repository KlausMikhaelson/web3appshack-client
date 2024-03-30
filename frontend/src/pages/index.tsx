import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Layout from "@/containers/Layout";
import HomePage from "@/partials/Home";

import { NextPage } from "next";

const Home: NextPage = ({
}) => {
  return (
    <Layout>
      <HomePage></HomePage>
    </Layout>
  );
}

export default Home;