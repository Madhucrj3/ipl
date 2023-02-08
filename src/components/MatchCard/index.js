import React from 'react';
import "./index.css"
class Pmatch extends React.Component {
    render() {
        const {match}=this.props;
        console.log(match)
        const {competing_team_logo,competing_team,result,match_status}=match;
        return (
        <div className='TeammatchDet'>
            <div className='TeammatchDetLogo'>
                <img src={competing_team_logo} alt="lo" />
            </div>
            <h2>{competing_team}</h2>
            <h5>{result}</h5>
            <h3 className='matchcoo'>{match_status}</h3>
        </div>);
    }
}

export default Pmatch;