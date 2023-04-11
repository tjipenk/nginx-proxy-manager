import React from "react";

import { ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.scss";
import customTheme from "./theme/customTheme";

declare global {
	interface Function {
		Item: React.FC<any>;
		Link: React.FC<any>;
		Header: React.FC<any>;
		Main: React.FC<any>;
		Options: React.FC<any>;
		SubTitle: React.FC<any>;
		Title: React.FC<any>;
	}
}

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
		<App />
	</React.StrictMode>,
);
