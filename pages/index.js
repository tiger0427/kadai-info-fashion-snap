import React from "react";
import Image from "next/image";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from "@material-ui/styles";

import { MicroCmsClient } from "../lib/client";

import TopBar from "../src/TopBar";
import TypeTabs from "../src/TypeTabs";
import ThumbnailImageList from "../src/ThumbnailImageList";
import BottomBar from "../src/BottomBar";
import { Header } from "../src/Header";
import {
  getTopPagePicture,
  getAllPageThumbnails,
  getGirlsPageThumbnails,
  getBoysPageThumbnails,
  getPublishDates,
} from "../lib";
import { getAllPageIds, getBoysPageIds, getGirlsPageIds } from "../lib/page";

import { BodoniFont, SmallFont } from "../src/theme";

export async function getStaticProps() {
  const topPicture = await getTopPagePicture(MicroCmsClient);
  const allThumbnails = await getAllPageThumbnails(MicroCmsClient);
  const girlsThumbnails = await getGirlsPageThumbnails(MicroCmsClient);
  const boysThumbnails = await getBoysPageThumbnails(MicroCmsClient);
  const publishDates = await getPublishDates(MicroCmsClient);

  const allPageIds = await getAllPageIds();
  const girlsPageIds = await getGirlsPageIds();
  const boysPageIds = await getBoysPageIds();

  return {
    props: {
      topPicture: topPicture,
      allThumbnails: allThumbnails,
      girlsThumbnails: girlsThumbnails,
      boysThumbnails: boysThumbnails,
      allPageIds: allPageIds,
      girlsPageIds: girlsPageIds,
      boysPageIds: boysPageIds,
      publishDates: publishDates,
    },
  };
}

export default function Index({
  topPicture,
  allThumbnails,
  girlsThumbnails,
  boysThumbnails,
  allPageIds,
  girlsPageIds,
  boysPageIds,
  publishDates,
}) {
  return (
    <>
      <Header
        pageImg={topPicture.url}
        pageImgWidth={topPicture.width}
        pageImgHeight={topPicture.height}
      />
      <TopBar />
      <Container maxWidth="sm">
        <Box my={4}>
          <Box px={2} align={"center"}>
            <Image
              src={topPicture.url}
              alt="topImage"
              width={topPicture.width / 4}
              height={topPicture.height / 4}
              loading={"eager"}
            />
          </Box>
          <Box my={6}>
            <ThemeProvider theme={BodoniFont}>
              <Typography align="center" variant="h4">
                CODE
              </Typography>
            </ThemeProvider>
            <ThemeProvider theme={SmallFont}>
              <Typography align="center" variant="body2">
                KADAI INFOが運営している、{<br />}
                鹿大生による鹿大生のためのファッション紹介コンテンツ。{<br />}
                週に2コーデずつ公開しています。
              </Typography>
            </ThemeProvider>
          </Box>
          <TypeTabs labels={["All", "Girls", "Boys"]}>
            <ThumbnailImageList
              thumbnails={allThumbnails}
              pageIds={allPageIds}
              type={"all"}
              publishDates={publishDates}
              key={"ThumbnailImageList-1"}
            ></ThumbnailImageList>
            <ThumbnailImageList
              thumbnails={girlsThumbnails}
              pageIds={girlsPageIds}
              type={"girls"}
              publishDates={publishDates}
              key={"ThumbnailImageList-2"}
            ></ThumbnailImageList>
            <ThumbnailImageList
              thumbnails={boysThumbnails}
              pageIds={boysPageIds}
              type={"boys"}
              publishDates={publishDates}
              key={"ThumbnailImageList-3"}
            ></ThumbnailImageList>
          </TypeTabs>
        </Box>
      </Container>
      <BottomBar />
    </>
  );
}
