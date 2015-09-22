var React = require('react');
require('./styles.scss');

var SpotifyImage = React.createClass({
  getImageUrl: function() {
    var spotifyObj = this.props.spotify;

    if (spotifyObj.type === 'track') {
      return spotifyObj.album.images[0].url;
    }

    return false;
  },
  render: function() {
    var imageUrl = this.getImageUrl();

    var imageStyle = {};

    if (imageUrl) {
      imageStyle.backgroundImage ='url(' + imageUrl + ')';
    }

    return (
      <div className="spotify-image" style={imageStyle}></div>
    );
  }
});

module.exports = SpotifyImage;
