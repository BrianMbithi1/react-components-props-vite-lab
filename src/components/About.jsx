// About: logo and blog description (props: image, about). Parent: App
function About({ image = "https://via.placeholder.com/125", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}
export default About;