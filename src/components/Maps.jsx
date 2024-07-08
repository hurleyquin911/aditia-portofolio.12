import React from "react";

const Maps = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Your+Location/@-7.4544484,112.5784746,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-7.4544484!4d112.5784746";

  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d940.0883090309445!2d112.57847456661422!3d-7.45444841970709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjcnMTYuNiJTIDExMsKwMzQnNDMuMCJF!5e1!3m2!1sen!2sid!4v1720422795378!5m2!1sen!2sid"
        className="w-full h-64 sm:h-80 md:h-96 xl:w-[500px] xl:h-[300px] border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
      ></iframe>
    </a>
  );
};

export default Maps;
