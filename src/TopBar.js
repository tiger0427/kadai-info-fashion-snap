import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, Box } from '@material-ui/core';
// import { IconButton } from '@material-ui/core';
// import { Menu } from '@material-ui/icons';
import Image from 'next/image'
import Link from './Link';
import logo from '../images/logo.png'

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
}))

export default function TopBar() {
  const classes = useStyles()
  return (
    <>
      <Toolbar className={classes.toolbar}>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton> */}
        <Typography align="center" className={classes.toolbarTitle} >
          <Box mt={1}>
            <Link href="https://kadai-info.com">
              <Image src={logo} alt="logo" width={172} height={22}></Image>
            </Link>
          </Box>
        </Typography>
      </Toolbar>
    </>
  )
}