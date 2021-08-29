import { MicroCmsClient } from "./client";

export async function getTopPagePicture() {
  const topPicture = await MicroCmsClient.get({ endpoint: "top-page-picture" });
  return topPicture.contents[0].topPagePicture;
}

export async function getAllPageThumbnails() {
  const page = await MicroCmsClient.get({ endpoint: "page" });
  const allThumbnails = page.contents.map((content) => {
    if (content.pageType[0] !== "all") return;
    return content.thumbnail;
  });
  return allThumbnails.filter((content) => content != null);
}

export async function getBoysPageThumbnails() {
  const page = await MicroCmsClient.get({ endpoint: "page" });
  const boysThumbnails = page.contents.map((content) => {
    if (content.pageType[0] !== "boys") return;
    return content.thumbnail;
  });
  return boysThumbnails.filter((content) => content != null);
}

export async function getGirlsPageThumbnails() {
  const page = await MicroCmsClient.get({ endpoint: "page" });
  const girlsThumbnails = page.contents.map((content) => {
    if (content.pageType[0] !== "girls") return;
    return content.thumbnail;
  });
  return girlsThumbnails.filter((content) => content != null);
}
