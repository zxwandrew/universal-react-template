var React = require('react');

var Layout = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function() {
    var contentHtml = this.props.data;
    return (
      <html>
        <head>
          <title>My App</title>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: contentHtml}}/>
          <script src="client.min.js"/>
        </body>
      </html>
    );
  }
});

module.exports = Layout;


// <!DOCTYPE html>
// <html>
//   <head>
//     <title>My App</title>
//   </head>
//
//   <body>
//     <div id="app"><%- markup %></div>
//     <script src="client.min.js"></script>
//   </body>
// </html>
