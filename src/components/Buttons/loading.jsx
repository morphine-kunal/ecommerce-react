const Loading = () => {
  const myStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "2px solid #ddd",
    borderTop: "2px solid black",
  };
  return <div className="animate-spin topLeft" style={myStyle}></div>;
};

export default Loading;
