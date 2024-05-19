// src/App.js
import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import Navbar from "./Navbar";


function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc,setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 1000)

    return () => clearTimeout(timeout)
  }, [html, css, js]);

  return (
    <div className="whole">
    <Navbar />
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
          className="resizable"
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
          className="resizable"
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
          className="resizable"
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
