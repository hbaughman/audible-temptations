import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

class PageChrome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({open: !this.state.open})
  handleClose = () => this.setState({open: false})

  shout = () => console.log("clicked");

  render() {
    return(
      <div>
        <AppBar 
          title={this.props.title}
          onLeftIconButtonTouchTap={this.handleToggle}
          style={{ backgroundColor: "#F7991F" }}
        />
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
          closeOnItemTouchTap={true}
        >
          <Link to="/" style={styles.link} >
            <MenuItem onTouchTap={this.handleClose} primaryText="Intro" />
          </Link>

          <Link to="/library" style={styles.link} >
            <MenuItem onTouchTap={this.handleClose} primaryText="Library" />
          </Link>

          <Link to="/filterLibrary" style={styles.link} >
            <MenuItem onTouchTap={this.handleClose} primaryText="Hostages" />
          </Link>

          <Link to="/manageLocations" style={styles.link} >
            <MenuItem onTouchTap={this.handleClose} primaryText="Choose Gym" />
          </Link>

        </LeftNav>
      </div>
    )
  }
}

const styles = {
  link: {
    textDecoration: "none",
    color: "black"
  }
}

const mapStateToProps = (state) => {
  const path = state.router.locationBeforeTransitions.pathname;
  return {
    title: pathToTitle(path)
  }
}

function pathToTitle(path) {
  switch (path) {
    case "/library":
      return "Your Library";
    case "/manageLocations":
      return "Choose Gym";
    case "/filterLibrary":
      return "Choose Hostages";
    case "/override":
      return "Override Lock";
    default:
      return "Audible Temptations";
  }
}
export default connect(mapStateToProps)(PageChrome);
