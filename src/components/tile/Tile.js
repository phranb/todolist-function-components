import React from "react";

export const Tile = ({ tile }) => {
  // const classColors = [
  //   "has-background-primary",
  //   "has-background-success",
  //   "has-background-info",
  //   "has-background-warning",
  //   "has-background-danger",
  // ];
  // let colorLoad = Math.floor(Math.random() * classColors.length);
  // let search = colorLoad;

  const textStyle = {
    maxWidth: "100%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
    transition: "all .2s ease-in-out",
  };
  function calculateTextStyle() {
    return truncate ? textStyle : null;
  }

  // I used React Hooks to create a variable in state to manage if the text should be truncated or not.
  const [truncate, setToggleTruncate] = React.useState(true);

  // This function toggles the state variable 'truncate', thereby expanding and truncating the text every time the user clicks the div.
  function toggleTruncate() {
    setToggleTruncate(!truncate);
  }

  return (
    <div className={`tile-container`}>
      {/* <div className={`tile is-child is-10 box ${classColors[colorLoad]}`}></div> */}
      <div className={`tile is-child is-10 box`}>
        {/* {classColors.indexOf(search) !== -1 &&
          classColors.splice(classColors.indexOf(search), 1)} */}
        {Object.values(tile).map((value, index) => (
          <p
            key={index}
            style={calculateTextStyle()}
            onClick={toggleTruncate}
            className={`${index === 0 ? "tile-title" : ""} ${
              index === 1 ? "paragraph truncate-overflow" : ""
            } p-tile`}>
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};
