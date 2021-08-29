import React from "react";
import Image from "next/image";
import Link from "./Link";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Badge } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export async function getStaticProps() {}

export default function ThumbnailImageList(props) {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        {props.thumbnails.map((thumbnail, index) => {
          return (
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              key={props.pageIds[index].params.id}
            >
              <Link href={`/${props.type}/${props.pageIds[index].params.id}`}>
                <Badge
                  badgeContent={"New!"}
                  color="secondary"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <Image
                    src={thumbnail.url}
                    width={thumbnail.width / 4}
                    height={thumbnail.height / 4}
                    loading={"eager"}
                  ></Image>
                </Badge>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
