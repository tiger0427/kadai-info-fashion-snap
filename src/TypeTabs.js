import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Box, Typography } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({}));

export default function TypeTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        // indicatorColor="secondary"
        // textColor="secondary"
        centered
      >
        {props.labels.map((label, index) => (
          <Tab label={label} {...a11yProps(index)} key={`Tab-${index}`}></Tab>
        ))}
      </Tabs>
      <Box mt={4} mb={1}>
        <Typography align="center" variant="body2">
          -Styling-
        </Typography>
      </Box>
      {props.children.map((child, index) => (
        <TabPanel value={value} index={index} key={`TabPanel-${index}`}>
          {child}
        </TabPanel>
      ))}
    </>
  );
}
