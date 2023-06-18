import React, { useEffect, useState } from "react";
import "../loading/style.css";
import { Redirect } from "react-router-dom";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import PuffLoader from "react-spinners/PuffLoader";

function Loading() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setRedirect(true), 3000);

    ReactGA.initialize("UA-154721739-1");
    ReactGA.pageview("motasimfoad.com - Loading Screen");

    return () => clearTimeout(id);
  }, []);

  return redirect ? (
    <Redirect to="/home" />
  ) : (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CHANG BEOM IM</title>
        <link rel="canonical" href="http://motasimfoad.com/" />
        <meta
          name="description"
          content="Motasim Foad - Product Manager | Project Manager | Software Engineer"
        />
      </Helmet>
      <div className="Loading-header">
        <PuffLoader size={"40vw"} color={"#fff"} loading={redirect} />
      </div>
    </div>
  );
}

export default Loading;
