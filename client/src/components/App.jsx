import React from 'react';
import Navigation from './Navigation.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChallenges();
    this.props.fetchUsers();

    //Get current user on load
    fetch('http://localhost:3000/user')
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();   
       })
      .then(json => this.props.loginUser(json))
      .catch(err => console.log('ERROR GETTING USEA', err));
  }

  render() {
    return (
      <div className="container">
        <Navigation />    

          {/*Passes this redux state to first children*/}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

//Attach store and app actions to App
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from './../actions/appActions.js';

function mapStateToProps(state) {
  return {
    entities: state.entities,
    currentChallenge: state.currentChallenge,
    challengeList: state.challengeList,
    currentUser: state.currentUser,
    index: state.index,
    playersOfUserChallenges: state.playersOfUserChallenges
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(appActions, dispatch);
}
const AppRedux = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppRedux;
