import React from "react";

const ReactMemo = React.memo(() => {
  console.log("Rendering ReactMemo component");
  return <div>This component is memoized!</div>;
});

export default ReactMemo;
