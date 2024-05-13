import "./cssfiles/slider.css"

function Slider() {
  return (
    <div>
    

    <video className="w-full" autoPlay muted controls>
  <source src={require('./../Assets/video1.mp4')} type="video/mp4" />
  Your browser does not support the video tag.
</video>



  </div>
  );
}

export default Slider;