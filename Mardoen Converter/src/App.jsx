import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function App() {
  const [editorValue, setEditorValue] = useState("");
  return (
    <>
      <header>
        {/* this will contain options reguarding file saving and tiher things */}
      </header>
      <main>
        <Editor editorValue={editorValue} setEditorValue={setEditorValue} />
        <Preview editorValue={editorValue} />
      </main>
    </>
  );
}

function Editor({ editorValue, setEditorValue }) {
  return (
    <section id="editor-section">
      <textarea
        name="editor"
        id="editor"
        value={editorValue}
        onChange={(e) => setEditorValue(e.target.value)}
      ></textarea>
    </section>
  );
}

function Preview({ editorValue }) {
  const gfmRenderer = remarkGfm;
  const clean = <ReactMarkdown remarkPlugins={[gfmRenderer]}>{editorValue}</ReactMarkdown>;
  return (
    <section id="preview-section">
      <div id="preview">{clean}</div>
    </section>
  );
}

export default App;
