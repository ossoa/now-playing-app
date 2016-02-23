import React from 'react';

class AudioPlayback extends React.Component {
  togglePlay(event) {
    console.log('toggle play');
    if (event.keyCode !== 32) return;

    this.isMuted = !this.isMuted;

    if (this._audio) {
      this._audio.muted = this.isMuted;
    }

    console.log('[muted]', this.isMuted);
  }

  componentDidMount() {
    if (this.props.audio) {
      this._audio.play();
    }

    this.isMuted = false;
    window.addEventListener('keypress', this.togglePlay.bind(this));
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.audio !== this.props.audio;
  }

  componentDidUpdate() {
    if (this.props.audio) {
      this._audio.pause();
      this._audio.load();
      this._audio.play();
    }
  }

  render() {
    let audioUrl = this.props.audio;
    let isMuted = !!this.isMuted;

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
}

AudioPlayback.propTypes = {
  audio: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ])
};

export default AudioPlayback;
