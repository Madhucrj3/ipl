import React from 'react';
import "./index.css"
import Loader from 'react-loader-spinner'
import withRouter from '../../hocs/withRouter';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Pmatch from '../MatchCard';
class Tmatches extends React.Component {
    state={
        indData:[],
        isLoading:true
    }
componentDidMount(){
    this.gettamData();
}
gettamData=async ()=>{
    const {id}=this.props.params;
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    this.setState({indData:data,isLoading:false});
}
render() 
{
    const {indData,isLoading}=this.state;
    if(isLoading===true)
    return <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    const {competing_team,date,venue,result,competing_team_logo,first_innings,second_innings,man_of_the_match,umpires}=indData.latest_match_details;
    return(
        <div className='indContd'>
            <div className='teamBanner'>
                <img src={indData.team_banner_url} alt="banner"/>
            </div>
            <h6>Latest Matches</h6>
            <div className='latestMatch'>
                <div className='latestMatch1'>
                    <h1>{competing_team}</h1>
                    <h3>{date}</h3>
                    <h5>{venue}</h5>
                    <h5>{result}</h5>
                </div>
                <div className='latestMatch2'>
                    <img  src={competing_team_logo} alt="teamlogo" />
                </div>
                <div className='latestMatch3'>
                <h5>First Innings</h5>
                <p>{first_innings}</p>
                <h5>Second Innings</h5>
                <p>{second_innings}</p>
                <h5>Man of The Match</h5>
                <p>{man_of_the_match}</p>
                <h5>Umpires</h5>
                <p>{umpires}</p>
                </div>
            </div>
            <div className='latestMatch4'>
                <h5>First Innings</h5>
                <p>{first_innings}</p>
                <h5>Second Innings</h5>
                <p>{second_innings}</p>
                <h5>Man of The Match</h5>
                <p>{man_of_the_match}</p>
                <h5>Umpires</h5>
                <p>{umpires}</p>
                </div>
            <div className='prevMatch'>
                {indData.recent_matches.map(match=> <Pmatch match={match}/>)}
            </div>
        </div>
    )
}
}

export default withRouter(Tmatches);