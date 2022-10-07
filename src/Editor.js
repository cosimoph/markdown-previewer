const Editor = ({ text, preview }) => {
  return (
    <div className="container editor-heading">
      <div className="header">Editor</div>
      <textarea
        name="editor"
        id="editor"
        rows="10"
        value={text}
        onChange={preview}
      ></textarea>
    </div>
  );
};

export default Editor;
