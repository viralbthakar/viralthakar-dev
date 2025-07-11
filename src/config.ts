export const SITE = {
  website: "https://www.viralthakar.com", // replace this with your deployed domain
  author: "Viral Thakar",
  profile: "",
  desc: "A growing collection of projects and writings, blending engineering, learning, and everyday reflections.",
  title: "Viral Thakar",
  ogImage: "viralthakar-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 3,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: false,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Toronto", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
