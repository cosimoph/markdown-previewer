import { useState } from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";

function App() {
  const [text, setText] = useState(`
# H1
## H2
[this is a link](https://www.google.com)
\`code\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\` 
1. First item
2. Second item
3. Third item

> blockquote

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
**bold text**
  `);

  return (
    <div className="App">
      <Editor text={text} preview={(e) => setText(e.target.value)} />
      <Previewer output={text} />
    </div>
  );
}

export default App;
