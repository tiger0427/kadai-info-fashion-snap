import { createClient } from "microcms-js-sdk";

export const MicroCmsClient = createClient({
    serviceDomain: 'kadai-info',
    apiKey: process.env.MICROCMS_API_KEY
    // apiKey: '0ad5fa10-3a3c-41d5-bb0b-3fbdd5d4c088'
})