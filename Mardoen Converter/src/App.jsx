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
1. And last but not least, let's not forget embedded images:`

function App() {
  const [editorValue, setEditorValue] = useState(defaultText);
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
