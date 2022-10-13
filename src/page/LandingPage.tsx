/** @format */

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./module/ProTip";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      {/* <Link color="inherit" href={appConfig._app_info.website_url}>
        {appConfig._app_info.company_name}
      </Link>{" "} */}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function LandingPage() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create React App example with TypeScript
      </Typography>
      <ProTip />
      <Copyright />
    </Box>
  );
}
