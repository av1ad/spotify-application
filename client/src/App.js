import { useEffect, useState } from "react";
import { accessToken, logout, getCurrentUserProfile } from "./spotify";
import { catchErrors } from "./utils";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { GlobalStyle } from "./styles";
import {
  Login,
  Profile,
  TopArtists,
  TopTracks,
  Playlists,
  Playlist,
} from "./pages";

const StyledLogOutButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--white);
  font-size: var(--fz-sm);
  font-weight: 700;
  border-radius: var(--border-radius-pill);
  z-index: 10;
  @media (min-width: 768px) {
    right: var(--spacing-lg);
  }
`;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      try {
        const { data } = await getCurrentUserProfile();
        setProfile(data);
      } catch (e) {
        console.error("Error fetching user profile:", e);
      }
    };

    catchErrors(fetchData());
  }, []);

  return (
    <Router>
      <GlobalStyle />{" "}
      {/** GlobalStyle is a component that we created in styles.js */}
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/top-artists" element={<TopArtists />} />
        <Route path="/top-tracks" element={<TopTracks />} />
        <Route path="/playlists/:id" element={<Playlist />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route
          path="/"
          element={
            token ? (
              <>
                <StyledLogOutButton onClick={logout}>
                  Log Out
                </StyledLogOutButton>
                <Profile profile={profile} />
              </>
            ) : (
              <Login />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
