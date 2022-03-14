import Butter from "buttercms";

let butter;

const previewSetting = process.env.PREVIEW;
// make preview mode by default
const preview =
  previewSetting === "true" || previewSetting === undefined ? 1 : 0;

try {
  butter = Butter(process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY, preview);
} catch (e) {
  console.log(e);
}

const defaultPageSize = 100;
const defaultPostCount = 10;

export async function getDepartmentPage(slug) {
  try {
    const page = await butter.page.retrieve("*", slug);

    return page?.data?.data;
  } catch (e) {
    throw e.response.data.detail;
  }
}

export async function getAllAnnouncements() {
  try {
    const announcements = await butter.content.retrieve(["announcements"]);

    return announcements?.data?.data?.announcements;
  } catch (e) {
    throw e.response.data.detail;
  }
}

export async function getAnnouncement(id) {
  try {
    const announcements = await butter.content.retrieve([
      `announcements[_id=${id}]`,
    ]);

    console.log(announcements, id);

    return announcements?.data?.data?.announcements[0];
  } catch (e) {
    throw e.response.data.detail;
  }
}
