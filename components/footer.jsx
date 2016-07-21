var React = require('react');
var Link = require('react-router').Link;
var OutboundLink = require('react-ga').OutboundLink;

var config = require('../config/config');

var Footer = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <footer role="contentinfo" className={this.props.className}>
        <ul>
          <div>
            <li><Link to={"/" + this.context.intl.locale + "/about"}>About</Link></li>
            <li><OutboundLink to={config.HIVE_LEARNING_NETWORKS_URL} eventLabel={config.HIVE_LEARNING_NETWORKS_URL}>Hive</OutboundLink></li>
            <li><a href={config.TWITTER_LINK}>Twitter</a></li>
          </div>
          <div>
            <li><a href="https://donate.mozilla.org/">Donate</a></li>
            <li><a href="https://beta.webmaker.org/#/legal">Terms</a></li>
            <li><a href="https://www.mozilla.org/privacy/websites">Privacy</a></li>
          </div>
        </ul>
      </footer>
    );
  }
});

module.exports = Footer;
