import { createGlobalStyle } from "styled-components";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUpPage/SignUpPage.js";
import { Login } from "./pages/SignInPage/SignInPage.js";
import { Timeline } from "./pages/TimelinePage/TimelinePage.js";
import { UserPage } from "./pages/userPage/userPage.js";
import UserContext from "./contexts/UserContext.js";
import TimelineContext from "./contexts/TimelineContext.js";
import { useState } from "react";
import Header from "./components/Header/Header.js";

import HashTagPage from "./pages/HashTagsPage/HashTagsPage.js";



function App() {
  const [logado, setLogado] = useState("");
  const [headerStatus, setHeaderStatus] = useState(false);


	const [isResponseEdited, setIsResponseEdited] = useState(false);
	const [isPostDeleted, setIsPostDeleted] = useState(false);
	const [isPostCreated, setIsPostCreated] = useState(false);
	

	return (
		<BrowserRouter>
			<GlobalStyle />
			<UserContext.Provider
				value={{
					logado,
					setLogado,
					headerStatus,
					setHeaderStatus,
				}}>
				<TimelineContext.Provider
					value={{
						isResponseEdited,
						setIsResponseEdited,
						isPostDeleted,
						setIsPostDeleted,
						isPostCreated,
						setIsPostCreated,
					}}>
					<Header />
					<Routes>
						<Route path="/sign-up" element={<SignUp />} />
						<Route path="/" element={<Login />} />
						<Route path="/user/:id" element={<UserPage />} />
						<Route path="/timeline" element={<Timeline />} />
						<Route path="/hashtag/:hashtag" element={<HashTagPage />}/>
					</Routes>
				</TimelineContext.Provider>
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;

const GlobalStyle = createGlobalStyle` 

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
 font-family: 'Raleway', sans-serif;;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


`;
