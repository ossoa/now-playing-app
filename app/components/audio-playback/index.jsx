var React = require('react');

var AudioPlayback = React.createClass({
  getPreview: function(spotifyObj) {
    var spotifyObj = spotifyObj;

    switch (spotifyObj.type) {
      case 'track':
        return spotifyObj.preview_url;
      case 'playlist':
      case 'album':
      case 'artist':
      default:
        return false;
    }
  },

  getDOMNodeTag: function() {
    return this.getDOMNode() ? this.getDOMNode().tagName : null;
  },

  componentDidMount: function() {
    if (this.getDOMNodeTag() === 'AUDIO') {
      this.audio = this.getDOMNode();
      this.audio.play();
    }
  },

  shouldComponentUpdate: function(nextProps) {
    return nextProps.spotify.uri !== this.props.spotify.uri;
  },

  componentDidUpdate: function(prevProps) {
    if (this.getDOMNodeTag() === 'AUDIO') {
      var audio = this.getDOMNode();
      audio.pause();
      audio.load();
      audio.play();

      this.audio = audio;
    } else {
      if (this.audio) {
        this.audio.pause();
        this.audio = null;
      }
    }
  },

  render: function() {
    var previewUrl = this.getPreview(this.props.spotify);

    if (previewUrl) {
      return (
        <audio>
          <source src={previewUrl} type="audio/mpeg" />
        </audio>
      );
    } else {
      return false;
    }
  }
});

module.exports = AudioPlayback;
