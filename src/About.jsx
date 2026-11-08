// About: logo and blog description (props: image, about). Parent: App
function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}
export default About;