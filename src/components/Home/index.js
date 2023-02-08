import React from 'react'
import "./index.css"
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Tcard from '../TeamCard'

class Index extends React.Component {
  state={
    teamData:[],
    isLoading:true
  }
  componentDidMount(){
    this.getData();
  }
  getData=async ()=> {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json();
    this.setState({teamData:data.teams,isLoading:false});
  }
  render(){
    const {teamData,isLoading}=this.state;
    return (
        <div className='HomeComp'>
            <div className='HomeComp1'>
                <div className='HmeCompDiv'>
                    <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt="logo" />
                    <h1>IPL Dashboard</h1>
                </div>
                <div className='HomeCompCard'>
                {isLoading===true?<Loader type="TailSpin" color="#00BFFF" height={50} width={50} /> :
                (teamData.map((team,ind) => (
                    <Tcard key={team.id} team={team} ind={ind}/>
                 )))}
                </div>
            </div>
        </div>
    )
  }
}
export default Index;
