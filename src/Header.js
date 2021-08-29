import Head from "next/head";

export function Header({
  pageTitle,
  pageDescription,
  pageImg,
  pageImgWidth,
  pageImgHeight,
}) {
  const defaultTitle = "CODE by KADAI INFO";
  const defaultDescription =
    "KADAI INFOが運営している、鹿大生による鹿大生のためのファッション紹介コンテンツ。週に2コーデずつ公開しています。";

  const title =
    typeof pageTitle === "string"
      ? `${pageTitle} | ${defaultTitle}`
      : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const imgUrl = pageImg;
  const imgWidth = pageImgWidth ? pageImgWidth : 1280;
  const imgHeight = pageImgHeight ? pageImgHeight : 640;
  return (
    <Head>
      <title>{title}</title>
      {/* <meta name="viewport" content="width=device-width,initial-scale=1.0" /> */}
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <meta
        name="twitter:card"
        key="twitterCard"
        content="summary_large_image"
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" key="twitterImage" content={imgUrl} />
    </Head>
  );
}
