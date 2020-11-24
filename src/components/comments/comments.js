import React from "react";

import { useTheme } from "../../contexts/theme";
import Emoji from "../emoji";
import {
  CommentsContainer,
  LoadingText,
  CommentsWrapper
} from "./comments.styles";

const Comments = () => {
  const ref = React.useRef(null);
  const [loading, setLoading] = React.useState(true);
  const [initialised, setInitialised] = React.useState(false);
  const { darkMode } = useTheme();

  const ready = darkMode !== null;

  React.useEffect(() => {
    const iframe = document.querySelector(".utterances-frame");
    if (iframe) {
      iframe.contentWindow.postMessage(
        {
          type: "set-theme",
          theme: darkMode ? "photon-dark" : "github-light"
        },
        "https://utteranc.es"
      );
    }
  }, [darkMode]);

  React.useEffect(() => {
    if (ready && !initialised) {
      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.async = true;
      script.setAttribute("repo", "benhoneywill/blog");
      script.setAttribute("crossorigin", "anonymous");
      script.setAttribute("label", "💬 comments");
      script.setAttribute("issue-term", "title");
      script.setAttribute("theme", darkMode ? "photon-dark" : "github-light");
      script.onload = () => setLoading(false);
      ref.current.appendChild(script);
      setInitialised(true);
    }
  }, [ready, initialised, darkMode]);

  if (darkMode === null) return null;

  return (
    <CommentsContainer>
      <h5>
        <Emoji emoji="💬" label="Comment" /> Comment with GitHub
      </h5>
      {loading && <LoadingText>Loading comments...</LoadingText>}
      <CommentsWrapper ref={ref} />
    </CommentsContainer>
  );
};

export default Comments;
