import Image from 'next/image'
import { Button, Container, Typography, Box } from "@material-ui/core"
import { ThemeProvider } from '@material-ui/styles';

import { getAllPageIds, getPageInfo } from "../../lib/page"

import { Header } from '../../src/Header';
import TopBar from "../../src/TopBar"
import { BodoniFont } from '../../src/theme';
import PersonImageList from "../../src/PersonImageList"
import BottomBar from '../../src/BottomBar'
import { PersonBottomBar } from '../../src/PersonBottomBar';

export async function getStaticPaths() {
  const paths = await getAllPageIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const pageData = await getPageInfo(params.id)
  const buttonTitle = pageData.pageTitle.split('INFO ')[1];
  const personImages = pageData.personPictureList
  const eyeCatch = pageData.eyeCatch
  return {
    props: {
      pageData,
      buttonTitle,
      personImages,
      eyeCatch,
    }
  }
}

export default function Page({ pageData, buttonTitle, personImages, eyeCatch }) {
  return (
    <>
      <Header pageTitle={buttonTitle} pageImg={eyeCatch.url} pageImgWidth={eyeCatch.width} pageImgHeight={eyeCatch.height} />
      <TopBar />
      <Container maxWidth="sm" align="center">
        <Box m={2} pb={1}>
          <ThemeProvider theme={BodoniFont}>
            <Typography variant="h5">CODE</Typography>
          </ThemeProvider>
        </Box>
        <Button variant="outlined" disableRipple="true">{buttonTitle}</Button>
        <Box px={2}>
          <Image src={pageData.brandPicture.url} alt="topImage" width={pageData.brandPicture.width / 3} height={pageData.brandPicture.height / 3} />
        </Box>
        <Box>
          <PersonImageList personImages={personImages} ></PersonImageList>
        </Box>
        <PersonBottomBar />
      </Container>
      <BottomBar />
    </>
  )
}