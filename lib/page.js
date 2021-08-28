import { MicroCmsClient } from "./client";

export async function getAllPageIds() {
  const page = await MicroCmsClient.get({ endpoint: 'page' })
  const allPage = page.contents.map((content) => {
    if(content.pageType[0] !== 'all') return
    return {
      params: {
        id: content.id
      }
    }
  })
  return allPage.filter(page => page != null)
}

export async function getBoysPageIds() {
  const page = await MicroCmsClient.get({ endpoint: 'page' })
  const boysPage  = page.contents.map((content) => {
    if(content.pageType[0] !== 'boys') return
    return {
      params: {
        id: content.id
      }
    }
  })
  return boysPage.filter(page => page != null)
}

export async function getGirlsPageIds() {
  const page = await MicroCmsClient.get({ endpoint: 'page' })
  const girlsPage =  page.contents.map((content) => {
    if(content.pageType[0] !== 'girls') return
    return {
      params: {
        id: content.id
      }
    }
  })
  return girlsPage.filter(page => page != null)
}

export async function getPageInfo(pageId) {
  const pages = await MicroCmsClient.get({ endpoint: 'page' })
  let page = {};
  pages.contents.map(content => {
    if(content.id === pageId) page = content
  })
  return page
}