export async function getTopPagePicture(MicroCmsClient) {
  const topPicture = await MicroCmsClient.get({ endpoint: "top-page-picture" });
  return topPicture.contents[0].topPagePicture;
}

export async function getAllPageThumbnails(MicroCmsClient) {
  const page = await MicroCmsClient.get({ endpoint: "page" });
  const allThumbnails = page.contents.map((content) => {
    if (content.pageType[0] !== "all") return;
    return content.thumbnail;
  });
  const allThumbnailsFilterd = allThumbnails.filter(
    (content) => content != null
  );
  return allThumbnailsFilterd;
}

export async function getBoysPageThumbnails(MicroCmsClient) {
  const page = await MicroCmsClient.get({ endpoint: "page" });
  const boysThumbnails = page.contents.map((content) => {
    if (content.pageType[0] !== "boys") return;
    return content.thumbnail;
  });
  return boysThumbnails.filter((content) => content != null);
}

export async function getGirlsPageThumbnails(MicroCmsClient) {
  const page = await MicroCmsClient.get({ endpoint: "page" });
  const girlsThumbnails = page.contents.map((content) => {
    if (content.pageType[0] !== "girls") return;
    return content.thumbnail;
  });
  return girlsThumbnails.filter((content) => content != null);
}

export async function getPublishDates(MicroCmsClient) {
  const page = await MicroCmsClient.get({ endpoint: "page" });
  const utcNow = new Date(
    Date.now() + new Date().getTimezoneOffset() * 60 * 1000
  ).getTime();
  const publishDates = page.contents.map((content) => {
    const publishTime = new Date(content.publishedAt).getTime();
    return {
      id: content.id,
      publishedAt: content.publishedAt,
      newFlag: 7 * 24 * 60 * 60 * 1000 > utcNow - publishTime ? true : false,
    };
  });
  return publishDates;
}
