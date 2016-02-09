var React = require('react');
var ReactDOM = require('react-dom');

var AudioPlayback = React.createClass({
  togglePlay: function(event) {
    if (event.keyCode !== 32) return;

    this.isMuted = !this.isMuted;

    if (this._audio) {
      this._audio.muted = this.isMuted;
    }

    console.log('[muted]', this.isMuted);
  },

  componentDidMount: function() {
    if (this.props.audio) {
      this._audio.play();
    }

    this.isMuted = false;
    window.addEventListener('keypress', this.togglePlay);
  },

  shouldComponentUpdate: function(nextProps) {
    return nextProps.audio !== this.props.audio;
  },

  componentDidUpdate: function(prevProps) {
    if (this.props.audio) {
      this._audio.pause();
      this._audio.load();
      this._audio.play();
    }
  },

  render: function() {
    var audioUrl = this.props.audio;
    var isMuted = !!this.isMuted;

    if (audioUrl) {
      return (
        <audio muted={isMuted} ref={(c) => this._audio = c} >
          <source src={audioUrl} type="audio/mpeg" />
        </audio>
      );
    } else {
      return false;
    }
  }
});

module.exports = AudioPlayback;
