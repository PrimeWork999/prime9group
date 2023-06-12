import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: "img/portfolio/01-small.jpg", title: "BACCARAT" },
    { thumb: "img/portfolio/02-small.jpg", title: "CRICKET" },
    { thumb: "img/portfolio/03-small.jpg", title: "E GAMES" },
    { thumb: "img/portfolio/04-small.jpg", title: "FOOTBALL" },
    { thumb: "img/portfolio/05-small.jpg", title: "HORSE RACING" },
    { thumb: "img/portfolio/06-small.jpg", title: "POKER" },
    { thumb: "img/portfolio/07-small.jpg", title: "ROULETTE" },
    { thumb: "img/portfolio/08-small.jpg", title: "TEEN PATTI" },
    { thumb: "img/portfolio/09-small.jpg", title: "TENNIS" }
  ];

  const images = data.map(obj => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Sport Images. Feel free to Explore!</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data.map(({ title, thumb }, index) => (
              <div key={index} onClick={() => openImageViewer(index)} className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item cursor">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>{title}</h4>
                    </div>
                    <img src={thumb} className="img-responsive" alt="Project Title" />{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
