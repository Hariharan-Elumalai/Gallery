import React from 'react';
import ImageCard from "./card";
import beach from "../Images/img.avif";
import coral from "../Images/forest.avif";
import farLand from "../Images/leaf.avif";
import milkyWay from "../Images/mount.avif";
import northernLights from "../Images/mount2.avif";
import river from "../Images/river.avif";
import snowyBiome from "../Images/tree.avif";
import valley from "../Images/tree2.avif";
import windMill from "../Images/tree3.avif";

function Gallery() {
  const imageData = [
    { id: 1, url: beach, title: "Lush Tropical Escape", description: "Lush green tropical plants basking in soft sunlight." },
    { id: 2, url: coral, title: "Cascade in the Wild ", description: "A serene waterfall cascading into a forest pool." },
    { id: 3, url: farLand, title: "Golden Light Leaves ", description: "Sunlit leaves glowing in a peaceful natural setting." },
    { id: 4, url: milkyWay, title: " Alpine Flower Valley", description: "A colorful meadow blooming beneath towering mountains." },
    { id: 5, url: northernLights, title: "Cliffside Forest", description: " Dense forest standing tall against rugged cliffs." },
    { id: 6, url: river, title: "Enchanted Waterfall Bridge", description: "A graceful waterfall flowing beneath a scenic." },
    { id: 7, url: snowyBiome, title: "Misty Mountain Peak", description: "A fog-covered mountain creating a calm atmosphere." },
    { id: 8, url: valley, title: "Crystal Clear Lake", description: " A peaceful lake reflecting the beauty of nature." },
    { id: 9, url: windMill, title: "Sunset Horizon", description: " Warm sunset colors painting the sky beautifully." }
  ];

  return (
    <React.Fragment>
      <div className="gallery-container">
        <h2>Natural Gallery</h2>
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