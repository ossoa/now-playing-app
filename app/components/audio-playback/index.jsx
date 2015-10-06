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
    return nextProps.audio !== this.props.audio;
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
    var audioUrl = this.props.audio;
    var isMuted = !!this.isMuted;

    if (audioUrl) {
      return (
        <audio muted={isMuted}>
          <source src={audioUrl} type="audio/mpeg" />
        </audio>
      );
    } else {
      return false;
    }
  }
});

module.exports = AudioPlayback;
