import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *{
    box-sizing:border-box;
  }

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
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: 'Outfit', sans-serif;
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

  /* Target the scrollbar in WebKit-based browsers */
::-webkit-scrollbar {
  width: 4px; /* Set the width of the scrollbar */
  height: 4px;
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Set the background color of the scrollbar track */
}

::-webkit-scrollbar-thumb {
  background-color: var(--greyish-blue); /* Set the background color of the scrollbar thumb */
  border-radius: 5px; /* Set the border radius of the scrollbar thumb */
}


  :root{
    --red-color: #FC4747;
    --dark-blue : #10141E;
    --greyish-blue : #5A698F;
    --semi-dark-blue : #161D2F;
    --white-color : #FFFFFF;
  }
`;

// import pages
import { Auth, Home, Movies, TV, Bookmarked } from "./pages";

// import layouts
import { Header } from "./layouts";

// user interface

export interface userProps {
  email: string;
  password: string;
}

function App() {
  // save authenticatedUser to localstorage
  const savedAuthenticateUser = localStorage.getItem("authenticatedUser");
  const parsedAuthenticateUser = savedAuthenticateUser
    ? JSON.parse(savedAuthenticateUser)
    : false;

  const [authenticateUser, setAuthenticateUser] = useState(
    parsedAuthenticateUser
  );

  useEffect(() => {
    localStorage.setItem("authenticatedUser", JSON.stringify(authenticateUser));
  }, [authenticateUser]);

  // save user to localstorage
  const savedUser = localStorage.getItem("user");
  const parsedUser = savedUser ? JSON.parse(savedUser) : [];
  const [user, setUser] = useState<userProps[]>(parsedUser);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  //

  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticateUser) {
      navigate("/");
    }
  }, [authenticateUser]);

  return (
    <GlobalContainer>
      <>
        <GlobalStyles />
        <Header authenticateUser={authenticateUser} />
        <Routes>
          {authenticateUser ? (
            <>
              {" "}
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />}></Route>
              <Route path="/TV" element={<TV />}></Route>
              <Route path="/bookmarked" element={<Bookmarked />}></Route>
            </>
          ) : (
            <Route
              path="/"
              element={
                <Auth
                  user={user}
                  setUser={setUser}
                  setAuthenticateUser={setAuthenticateUser}
                />
              }
            ></Route>
          )}
        </Routes>
      </>
    </GlobalContainer>
  );
}

export default App;

const GlobalContainer = styled.div`
  background-color: var(--dark-blue);
  @media screen and (min-width: 768px) {
    padding: 23px 24px 56px 24px;
  }
  @media screen and (min-width: 1110px) {
    display: flex;
    padding: 32px 0px 52px 32px;
    column-gap: 36px;
    max-width: 1920px;
    width: 100%;
    margin: auto;
  }
`;
