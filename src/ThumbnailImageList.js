import React from "react";
import Image from "next/image";
import Link from "./Link";

import Grid from "@material-ui/core/Grid";
import { Badge } from "@material-ui/core";

import NewBadge from "./NewBadge";

export default function ThumbnailImageList({
  thumbnails,
  pageIds,
  type,
  publishDates,
}) {
  return (
    <>
      <Grid container spacing={3}>
        {thumbnails.map((thumbnail, index) => {
          const pageId = pageIds[index].params.id;
          let FLAG = false;
          publishDates.map((publishDate) => {
            if(publishDate.id === pageId && publishDate.newFlag === true) FLAG = true;
          });
          return (
            <Grid item xs={6} sm={6} md={4} key={pageId}>
              <Link href={`/${type}/${pageId}`}>
                <Badge
                  badgeContent={FLAG && <NewBadge />}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <Image
                    src={thumbnail.url}
                    width={thumbnail.width / 4}
                    height={thumbnail.height / 4}
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
