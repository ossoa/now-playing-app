var React = require('react');

var AudioPlayback = React.createClass({
  togglePlay: function(event) {
    if (event.keyCode !== 32) return;

    this.isMuted = !this.isMuted;

    if (this.audio) {
      this.audio.muted = this.isMuted;
    }

    console.log('[muted]', this.isMuted);
  },

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

    this.isMuted = false;
    window.addEventListener('keypress', this.togglePlay);
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
    var isMuted = !!this.isMuted;

    if (previewUrl) {
      return (
        <audio muted={isMuted}>
          <source src={previewUrl} type="audio/mpeg" />
        </audio>
      );
    } else {
      return false;
    }
  }
});

module.exports = AudioPlayback;
