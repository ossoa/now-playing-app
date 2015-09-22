var React = require('react');
require('./styles.scss');

var SpotifyImage = React.createClass({
  openSpotify: function() {
    var spotify = this.props.spotify;
    var temp = spotify.uri.split(':');
    temp.splice(0, 1);

    var spotifyUrl = 'https://open.spotify.com/' + temp.join('/');
    
    window.open(spotifyUrl, '_blank');
  },

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
      <div className={classString} style={imageStyle} onClick={this.openSpotify}></div>
    );
  }
});

module.exports = SpotifyImage;
