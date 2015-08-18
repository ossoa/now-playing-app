var data = [
  {author: "Pete Hunt", text: "This is one comment!"},
  {author: "Jordan Walke", text: "This is *another* comment..."}
];

var NowPlayingBox = React.createClass({
  loadNowPlayingItemFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log('loaded', data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadNowPlayingItemFromServer();
    setInterval(this.loadNowPlayingItemFromServer, this.props.pollInterval);
  },
  render: function() {
    console.log(this.state.data);
    var tweetData = this.state.data.tweet;
    var textNode;

    if (tweetData && tweetData.text) {
      console.log(tweetData.text);
      textNode = (<p>{tweetData.text}</p>);
    }

    return (
      <div className="nowPlayingBox">
        <h1>Now Playing</h1>
        {textNode}
      </div>
    );
  }
});

React.render(
  <NowPlayingBox url="https://now-playing-feed.herokuapp.com/" pollInterval={10000} />,
  document.getElementById('content')
);
