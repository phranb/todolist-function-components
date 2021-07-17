import React from "react";

import { Tile } from "../tile/Tile";

export const TileList = ({ tiles }) => {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-parent is-vertical">
        <div>
          {tiles.map((tile, index) => (
            <Tile key={index} tile={tile} />
          ))}
        </div>
      </div>
    </div>
  );
};
