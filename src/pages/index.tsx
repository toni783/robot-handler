import type { NextPage } from "next";
import Head from "next/head";

import RobotDashboard from "../features/robot-dashboard/RobotDashboard";
const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Formant Frontend Takehome test</title>
        <meta
          name="description"
          content="Formant Frontend Takehome test solution made by Gilbert Morett"
        />
        <meta name="keywords" content="formant , takehome, test, frontend" />
        <meta name="author" content="Gilbert Morett" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RobotDashboard />
    </div>
  );
};

export default IndexPage;
