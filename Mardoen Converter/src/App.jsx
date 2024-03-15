import { useState } from "react";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import DOMPurify from 'isomorphic-dompurify';
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

function Preview({editorValue}) {
  return <section id="preview-section">
    <div id="preview">{DOMPurify.sanitize(marked.parse(editorValue))}</div>
  </section>
}

export default App;
