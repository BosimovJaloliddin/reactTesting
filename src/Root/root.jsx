import React, { useEffect, useState } from "react";

const App = () => {
  const [api, setApi] = useState("");
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/todos");

  const getUrl = ({ target: { value } }) => {
    console.log(value);
    setUrl(value);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((info) => {
        setApi(info);
      });
  }, [url]);

  console.log(api);

  return (
    <div className="wrap">
      <div className="downloadurl">
        <input
          onChange={getUrl}
          type="text"
          className="urlinput"
          placeholder="Enter your YouTube URL"
        />
        <button className="btn">Download</button>
      </div>
    </div>
  );
};

export default App;
