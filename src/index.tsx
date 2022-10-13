/** @format */

import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./provider/flyApp";
import { appConfig } from "./config";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(<App appConfig={appConfig} />);
