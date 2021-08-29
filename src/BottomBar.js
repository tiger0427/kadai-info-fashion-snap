import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, Typography, Box, Grid } from "@material-ui/core";
import { BodoniFont, SmallFont } from "./theme";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({}));

const bottomBarColor = "#707070";
const bottomBarTextColor = "white";

export default function BottomBar() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Box
            pl={2}
            pt={2}
            pr={2}
            color={bottomBarTextColor}
            bgcolor={bottomBarColor}
          >
            <Box pb={1}>
              <ThemeProvider theme={BodoniFont}>
                <Typography>CODE by KADAI INFO</Typography>
              </ThemeProvider>
            </Box>
            <Box pl={1} pt={1}>
              <Link href="/">
                <Typography variant="body2">-Top</Typography>
              </Link>
              <Link href="https://kadai-info.com">
                <Typography variant="body2">-KADAI INFO</Typography>
              </Link>
              <Link href="https://twitter.com/kadai_info">
                <Typography variant="body2">-Contact</Typography>
              </Link>
            </Box>
          </Box>
          <Box
            color={bottomBarTextColor}
            bgcolor={bottomBarColor}
            pb={1}
            pr={1}
          >
            <ThemeProvider theme={SmallFont}>
              <Typography align="right">
                @KADAI INFO All Rights Reserved
              </Typography>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
