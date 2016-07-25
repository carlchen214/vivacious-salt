import { recieveChallenges } from './fetchChallenges.js'

export function signUpChallenge(currentUser, challengeId) {
  return function(dispatch) {
    console.log('inside sign up challenge action');
    console.log(challengeId);
    return fetch('http://localhost:3000/signUpChallenge', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: currentUser,
        challengeId: challengeId,
      })
    }).then(res => {
      if (!res.ok) {
        console.log('error in posting signup challenge', err)
      }
      console.log(res.json());
      return res.json();
    }).then(json => dispatch(receiveChallenges(json)))
    .catch(err => console.log('error in receiving challenges back after signup', err));
  }
}


