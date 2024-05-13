import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import FeedbackIcon from '@mui/icons-material/Feedback';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { useNavigate } from 'react-router-dom';

export default function AdminSidebar(){
  const navigate = useNavigate()

  const handleAllUsers =()=>{
    navigate('/allusers')
  }
  const handleAllBookings=()=>{
    navigate('/allbookings')
  }
  const handleFeedback=()=>{
    navigate('/allfeedback')
  }
  const handleuserGraph=()=>{
    navigate('/usergraph')
  }
  const handlebookgraph=()=>{
    navigate('/bookingraph')
  }
    return(
        <div>
  <React.Fragment>
    <ListItemButton onClick ={handleAllUsers}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary=" Users" sx ={{flex: 0,marginLeft:'90px'}}/>
    </ListItemButton>
    <ListItemButton onClick={handleAllBookings}>
      <ListItemIcon>
        <FormatListBulletedIcon />
      </ListItemIcon>
      <ListItemText primary="Booking " sx ={{flex: 0,marginLeft:'90px'}}/>
    </ListItemButton>
    <ListItemButton onClick={handleFeedback}>
      <ListItemIcon>
        <FeedbackIcon />
      </ListItemIcon>
      <ListItemText primary=" Feedbacks" sx ={{flex: 0,marginLeft:'90px'}}/>
    </ListItemButton>
 
    <ListItemButton onClick={handleuserGraph}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="User Graph" sx ={{flex: 0,marginLeft:'120px'}}/>
    </ListItemButton>

    <ListItemButton  onClick={handlebookgraph}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Booking Graph" sx ={{flex: 0,marginLeft:'120px'}}/>
    </ListItemButton>
  </React.Fragment>
  </div>
    )
}