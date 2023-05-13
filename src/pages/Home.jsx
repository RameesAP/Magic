import React from 'react'
import FNav from '../components/Fnav/FNav'
import SNav from '../components/SNav/SNav'
import Main from '../components/Main/Main'
import Property from '../components/Properties/Property'
import Services from '../components/Services/PServices'
import Explore from '../components/Explore/explore.jsx'
import Advice from '../components/Advice/Advice'
import Guid from '../components/Guid/Guid'
import SnapShot from '../components/SnapShot/SnapShot'



const Home = () => {
  return (
    <div>
        <FNav />
        <SNav />
        <Main />
        <Property /> 
        <Services />
        <Explore />
        <Advice />
        <Guid />
        <SnapShot />
    </div>
  )
}

export default Home