import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AllProjects from './AllProjects';
import {styled} from '@mui/material';
import Add from './Add';
import AddFlat from './AddFlat';
import Datagrid from './Datagrid';
import Header from './Header2';

const Styledtab=styled(TabPanel)`
padding: 0px;
`
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box>
      <AppBar position="static" style={{marginTop:"50px"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="All Projects" {...a11yProps(0)} />
          <Tab label="All Flats" {...a11yProps(1)} />
          <Tab label="Add Projects" {...a11yProps(2)} />
          <Tab label="Add Flats" {...a11yProps(3)} />
         
        </Tabs>
      </AppBar>
      <Header/>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <Styledtab value={value} index={0} dir={theme.direction} style={{padding:"0px"}}>
        <AllProjects/>
        </Styledtab>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Datagrid/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Add />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <AddFlat />
        </TabPanel>

      </SwipeableViews>
    </Box>
  );
}