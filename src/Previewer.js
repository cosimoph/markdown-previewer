import { marked } from "marked";

const Previewer = ({ output }) => {
  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="container previewer">
      <div className="header">Previewer</div>
      <div
        className="preview"
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(output),
        }}
      ></div>
    </div>
  );
};

export default Previewer;
