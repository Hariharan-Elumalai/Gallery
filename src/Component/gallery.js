import React from 'react';
import ImageCard from "./card";
import beach from "../Images/Beach.jpg";
import coral from "../Images/Coral.jpg";
import farLand from "../Images/FarLand.jpg";
import milkyWay from "../Images/Milky Way.jpg";
import northernLights from "../Images/Northen Lights.jpg";
import river from "../Images/River.jpg";
import snowyBiome from "../Images/Snowy Biome.jpg";
import valley from "../Images/Valley.jpg";
import windMill from "../Images/WindMill.jpg";

function Gallery() {
  const imageData = [
    { id: 1, url: beach, title: "Sunny Beach", description: "A relaxing view of the sunny beach." },
    { id: 2, url: coral, title: "Ocean Coral", description: "Beautiful coral reefs under the sea." },
    { id: 3, url: farLand, title: "Distant Lands", description: "A mysterious faraway land." },
    { id: 4, url: milkyWay, title: "Milky Way", description: "A spectacular view of our galaxy." },
    { id: 5, url: northernLights, title: "Northern Lights", description: "The mesmerizing aurora borealis." },
    { id: 6, url: river, title: "Calm River", description: "A quiet river flowing gently through the woods." },
    { id: 7, url: snowyBiome, title: "Snowy Biome", description: "A cold but stunning snowy landscape." },
    { id: 8, url: valley, title: "Green Valley", description: "A lush green valley surrounded by mountains." },
    { id: 9, url: windMill, title: "Old Windmill", description: "A classic windmill in the open fields." }
  ];

  return (
    <React.Fragment>
      <div className="gallery-container">
        <h2>Beautiful Landscapes Gallery</h2>
        <div className="gallery-grid">
          {imageData.map((image) => (
            <ImageCard key={image.id} data={image} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Gallery;