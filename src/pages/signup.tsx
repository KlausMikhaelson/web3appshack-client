import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Layout from "@/containers/Layout";
import SignUp from "@/partials/SignUp";

import { NextPage } from "next";

const Home: NextPage = ({
}) => {
  return (
    <Layout>
      <SignUp></SignUp>
    </Layout>
  );
}

export default Home;