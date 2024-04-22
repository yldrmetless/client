import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { concepthotel } from "../../../images";
import concept from "../../assets/PROJECTS-GALLERY/6-FFE-SERVICE-STYLING-(FFE-SERVICE)/CONCEPT HOTEL/1.jpg";

const images = concepthotel.map((post) => ({
  original: post.img,
  thumbnail: post.img,
}));
const galleryStyles = {
  gallery: {
    maxHeight: "400px", // Galeri yüksekliğini istediğiniz değere ayarlayabilirsiniz
  },
};

const ConceptHotel = () => {
  return (
    <div className="relative">
      <div className="relative">
        <div>
          <img
            src={concept}
            alt=""
            className="max-h-screen h-screen w-full object-cover overflow-hidden relative"
          />
          <div className="absolute w-full h-full bg-black/40 left-0 top-0"></div>
        </div>
        <h1 className="text-3xl p-3 text-center font-serif max-w-full w-full mx-auto lg:text-5xl md:text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-sixth font-semibold">
        CONCEPT HOTEL
        </h1>
      </div>
      <div className="xl:mt-32 mt-8">
        <h1 className="xl:text-5xl lg:text-4xl text-2xl font-sixth font-semibold text-center">GALLERY</h1>
      </div>
      <div className="gallery py-16 xl:mt-8 -mt-4">
        <div className="max-w-[80%] w-full mx-auto">
          <ImageGallery
            items={images}
            thumbnailStyle={{ height: "250px" }}
            styles={galleryStyles}
            showPlayButton={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ConceptHotel;
