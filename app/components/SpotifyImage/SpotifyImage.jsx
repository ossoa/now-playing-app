import React from 'react';
import PropTypes from 'prop-types';
import styles from './SpotifyImage.scss';

class SpotifyImage extends React.Component {
  openSpotify() {
    let spotify = this.props.spotify;
    let temp = spotify.uri.split(':');
    temp.splice(0, 1);

    let spotifyUrl = 'https://open.spotify.com/' + temp.join('/');

    window.open(spotifyUrl, '_blank');
  }

  getImageUrl() {
    let spotifyObj = this.props.spotify;

    switch (spotifyObj.type) {
      case 'track':
        return spotifyObj.album.images[0].url;
      case 'playlist':
        return spotifyObj.images[0].url;
      case 'album':
        return spotifyObj.images[0].url;
      case 'artist':
        return spotifyObj.images[0].url;
      default:
        return false;
    }
  }

  updateBackgroundImage() {
    if (this.getImageUrl()) {
      let body = document.querySelector('.body-blur');
      body.setAttribute('style', 'background-image:url(' + this.getImageUrl() + ')');
    }
  }

  componentDidMount() {
    this.updateBackgroundImage();
  }

  componentDidUpdate() {
    this.updateBackgroundImage();
  }

  render() {
    let imageUrl = this.getImageUrl();
    let classString = styles.spotifyImage + ' ' + this.props.spotify.type;
    let imageStyle = {};

    if (imageUrl) {
      imageStyle.backgroundImage ='url(' + imageUrl + ')';
    }

    return (
      <div className={classString} style={imageStyle} onClick={this.openSpotify.bind(this)}></div>
    );
  }
}

SpotifyImage.propTypes = {
  spotify: PropTypes.object
};

export default SpotifyImage;
