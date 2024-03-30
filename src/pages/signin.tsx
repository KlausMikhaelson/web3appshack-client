import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Layout from "@/containers/Layout";
import SignIn from "@/partials/SignIn";

import { NextPage } from "next";

const Home: NextPage = ({
}) => {
  return (
    <Layout>
      <SignIn></SignIn>
    </Layout>
  );
}

export default Home;