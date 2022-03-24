import React from "react";

function About ({image="https://via.placeholder.com/215", alt="blog logo", about}) {
  return (
    <aside>
      <img src={image} alt={alt}></img>
      <p>{about}</p>
    </aside>
  )
}

export default About;