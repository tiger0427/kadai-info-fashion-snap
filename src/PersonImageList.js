import React from "react";
import Image from "next/image";
import { useMediaQuery, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

function PersonImageTile({ personImages, separateNum, division }) {
  return (
    <Grid item xs={6} sm={6} md={4}>
      {personImages.map((personImage, i) => {
        if (i % separateNum === division) {
          const image = personImage.personPicture;
          return (
            <Image
              src={image.url}
              width={image.width / 3}
              height={image.height / 3}
            ></Image>
          );
        }
      })}
    </Grid>
  );
}

export default function PersonImageList(props) {
  const theme = useTheme();
  const classes = useStyles();
  const flag = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
  const separateNum = flag ? 2 : 3;
  return (
    <>
      <Grid container spacing={2}>
        <PersonImageTile
          personImages={props.personImages}
          separateNum={separateNum}
          division={0}
        ></PersonImageTile>
        <PersonImageTile
          personImages={props.personImages}
          separateNum={separateNum}
          division={1}
        ></PersonImageTile>
        {flag ? (
          flag
        ) : (
          <PersonImageTile
            personImages={props.personImages}
            separateNum={separateNum}
            division={2}
          ></PersonImageTile>
        )}
      </Grid>
    </>
  );
}
