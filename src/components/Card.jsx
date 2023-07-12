import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Card.css";

const Card = () => {
  return (
    <div className="container">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card h-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Miami_skyline_20080328.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Miami</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                South Beach, art deco & Little Havana
              </h6>
              <p class="card-text">
                Offers all the benefits of big-city living with a distinctly
                tropical vibe, an abundance of beautiful beaches, year-round
                sunshine, and an unparalleled party scene.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Los Angeles</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Hollywoord, Venice Beach & the Lakers
              </h6>
              <p class="card-text">
                Located on a broad basin in Southern California, the city is
                surrounded by vast mountain ranges, valleys, forests, beautiful
                beaches along the Pacific Ocean, and nearby desert.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/71/Joshua_Tree_Park_-_panoramio_%284%29.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Joshua Tree National Park</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Joshua trees & unusual rock formations
              </h6>
              <p class="card-text">
                Explore 800,000 acres of beautiful terrain in Joshua Tree
                National Park, where wildlife thrives in temperatures over 100
                degrees.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/US_Capitol_west_side.JPG"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Washington, D.C.</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Lincoln Memorial, White House & Smithsonian National Air and
                Space Museum
              </h6>
              <p class="card-text">
                Home to important government buildings, including the U.S.
                Capitol, the White House, and the Supreme Court Building.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/47/Seattle_at_Night%2C_from_Kerry_Park_%288038241068%29.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Seattle</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Space Needle, Seattle Waterfront & Pike Place Market
              </h6>
              <p class="card-text">
                The cityscape of Seattle is characterized by a stunning natural
                backdrop, with lush greenery, numerous parks, and breathtaking
                views of the surrounding water bodies and mountains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
