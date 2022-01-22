import React, {useState} from 'react';
import {Paper,Tabs,Tab,Typography,Box} from '@material-ui/core';
import Login from '../components/Login';
import User from '../components/User';


const paperstyle={width:340,  margin:"40px 0px 0px 950px",height:'85vh'}
const  Authorization = () => {
 
    const[value,setValue]=useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (

          <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
    return(
     
        <Paper  elevation={20} style={paperstyle}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Sign In"/>
         <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0}> 
  <Login  handleChange={ handleChange}/>
 </TabPanel> 
<TabPanel value={value} index={1}>
  <User/>
</TabPanel>
      </Paper>
    )

}

export default  Authorization;