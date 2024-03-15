import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const defaultText = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Desert Landscape](https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;

function App() {
  const [editorValue, setEditorValue] = useState(defaultText);
  return (
    <>
      <header>
        {/* this will contain options reguarding file saving and tiher things */}
      </header>
      <main>
        <Editor editorValue={editorValue} setEditorValue={setEditorValue} />
        <div className="divide"></div>
        <Preview editorValue={editorValue} />
      </main>
    </>
  );
}

function Editor({ editorValue, setEditorValue }) {
  return (
    <section id="editor-section">
      <div className="section-title"><h4>Editor</h4></div>
      <textarea
        name="editor"
        id="editor"
        value={editorValue}
        spellCheck={false}
        onChange={(e) => setEditorValue(e.target.value)}
      ></textarea>
    </section>
  );
}

function Preview({ editorValue }) {
  const gfmRenderer = remarkGfm;
  const clean = (
    <ReactMarkdown remarkPlugins={[gfmRenderer]}>{editorValue}</ReactMarkdown>
  );
  return (
    <section id="preview-section">
      <div className="section-title"><h4>preview</h4></div>
      <div id="preview">{clean}</div>
    </section>
  );
}

export default App;
