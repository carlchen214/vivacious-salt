import React from 'react';
import { Link } from 'react-router';
import ChallengeListEntry from './ChallengeListEntry.jsx';
// import {GridList, GridTile} from 'material-ui/GridList';




// takes in props.challenges, and maps over to create ChallengeListEntry
const ChallengeList = ({challenges, currentUser}) => (
  <div> 
   {challenges.map(function(challenge, i) {
    return (
      <span key={challenge.id}>
          <ChallengeListEntry challenge={challenge} />
      </span>
    );
   })}
  </div>
  );

ChallengeList.propTypes = {
  challenges: React.PropTypes.array.isRequired
};

export default ChallengeList;
          // <h3> Challenge {i + 1}</h3> 
        // <Link to={currentUser === challenge.creatorId ? `/challenge/${challenge.id}/admin` : `/challenge/${challenge.id}`}>
        // </Link>
