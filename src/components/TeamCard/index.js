import "./index.css";
import React from 'react'
import { Link } from 'react-router-dom'
class Tcard extends React.Component {
    render(){
        const {team,ind}=this.props;
        return (
            <Link to={`/team-matches/${team.id}`} className="teamContdfi" id={ind%2===0?"teamfiid":"teamsecid"}>
                <div className="teamContd">
                <div className="teamContdimg">
                    <img  src={team.team_image_url} alt="teamlogo" /> 
                </div>
                <h3>{team.name}</h3>
            </div>
            </Link>
          )
    }
}

export default Tcard