import { React, useContext } from "react";
import '../../../src/App.css'

<div id="root"></div>

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <HeroImage />
        <Gallery />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

const images = [
  'forest1', 'forest2', 'forest3',
  'mountain1', 'mountain2', 'mountain3',
  'river1', 'river2', 'river3'
]

const buildURL = imagePath => `https://assets.imgix.net/tutorials/${imagePath}.webp`

export const Gallery = () => (
  <div className="gallery">
    {images.map(image => (
      <Imgix
        sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
        src={buildURL(image)}
        imgixParams={{
          fit: "crop",
          fm: "jpg"
        }}
        width={600}
        height={600}
      />
    ))}
  </div>
);

export default HeroImage = () => (
  <Background src="https://assets.imgix.net/tutorials/forest4.webp" className="hero-image">
    <h2>imgix demo</h2>
  </Background>
);