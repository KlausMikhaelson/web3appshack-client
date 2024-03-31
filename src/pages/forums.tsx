import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Layout from "@/containers/Layout";
import Forums from "@/partials/Forums";

import { NextPage } from "next";

const Home: NextPage = ({
}) => {
  return (
    <Layout>
      <Forums></Forums>
    </Layout>
  );
}

export default Home;