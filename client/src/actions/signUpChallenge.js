import recieveChallenges from './fetchChallenges.js'

export function signUpChallenge(challenge) {
  return function(dispatch) {
    console.log('inside sign up challenge action');
    console.log(challenge);
    return fetch('http://localhost:3000/signUpChallenge', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: "default",
        challengeId: 1,
      })
    }).then(res => {
      if (!res.ok) {
        console.log('error in posting signup challenge', err)
      }
      return res.json();
    }).then(json => dispatch(receiveChallenges(json)))
    .catch(err => console.log('error in receiving challenges back after signup', err));
  }
}


