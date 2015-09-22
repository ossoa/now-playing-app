var React = require('react');
require('./styles.scss');

var SpotifyImage = React.createClass({
  getImageUrl: function() {
    var spotifyObj = this.props.spotify;

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

  },
  render: function() {
    var imageUrl = this.getImageUrl();
    var classString = 'spotify-image ' + this.props.spotify.type;
    var imageStyle = {};
    if (imageUrl) {
      imageStyle.backgroundImage ='url(' + imageUrl + ')';
    }

    return (
      <div className={classString} style={imageStyle}></div>
    );
  }
});

module.exports = SpotifyImage;
