import React from "react";
import { connect } from "react-redux";
import  Lightbox  from 'react-image-lightbox';

const LightboxWrapper = React.createClass({
  getInitialState() {
    return {
      images:[
          './images/lobby600.jpg',
          './images/lowerField600.jpg',
          './images/masks600.jpg',
          './images/rentals600.jpg',
          './images/rentals2600.jpg',
          './images/upperField600.jpg',
      ],
      imagesFull:[
          './images/lobby.jpg',
          './images/lowerField.jpg',
          './images/masks.jpg',
          './images/rentals.jpg',
          './images/rentals2.jpg',
          './images/upperField.jpg',
      ],
       index: 0,
       isOpen: false
    };
  },

  openLightbox(key) {
    this.setState({index: key});
    this.setState({ isOpen: true });
  },
  closeLightbox() {
      this.setState({index: 0});
      this.setState({ isOpen: false });
  },
  moveNext() {
      this.setState({ index: (this.state.index + 1) % this.state.imagesFull.length });
  },
  movePrev() {
      this.setState({ index: (this.state.index + this.state.imagesFull.length - 1) % this.state.imagesFull.length });
  },
  render() {
    const { index, images, imagesFull } = this.state;
    const lightbox =
                <Lightbox
                    mainSrc={imagesFull[index]}
                    nextSrc={imagesFull[(index + 1) % images.length]}
                    prevSrc={imagesFull[(index + images.length - 1) % images.length]}

                    onCloseRequest={this.closeLightbox}
                    onMovePrevRequest={this.movePrev}
                    onMoveNextRequest={this.moveNext}
                />;
    const photoGrid = images.map((value, key) => {
      return <img className="photo" key={key} src={value} onClick={() =>{ this.openLightbox(key)} } />
    });
    return <div className="photoGrid">
        {photoGrid}
        {this.state.isOpen ? lightbox : null}
      </div>
  }
});
export default LightboxWrapper;
