import { IconHome, IconStar, IconHeart, IconBookmark, IconCalendar, IconBell, IconCheck, IconFlag, IconGift, IconMessage, IconMusic, IconCamera, IconChartBar, IconGlobe, IconBriefcase, IconUser } from "@tabler/icons-react";

export const CONSTANTS = {
  IMAGE: {
    AUTH_SIGNUP: "/images/auth_image.png",
    AUTH_LOGIN: "/images/auth_image.png",
  },

  COLOR: {
    DARK_GREY: "#212224",
    LIGHT_GREY: "#666666",
    LIGHT_BLUE_GREY: "#E6EAF0",
    DARKEST_GREY: "#111111",
    TEXT_DARK_GREY: "#4A4A4A",
    TEXT_DARK_GREY_2: "#272729",
  },
};

export const LINKS = {
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
  },
};

export const CHIPS = {
  SEARCH_CHIPS: [
    { title: "all", key: "/" },
    { title: "Voice Notes", key: "/voice-notes" },
    { title: "Notes", key: "/notes" },
    { title: "Images", key: "/images" },
    { title: "Documents", key: "/documents" },
    { title: "Links", key: "/links" },
    { title: "Videos", key: "/videos" },
  ],
};

export const ICONS = {
  COLLECTION_ICONS: [IconHome, IconStar, IconHeart, IconBookmark, IconCalendar, IconBell, IconCheck, IconFlag, IconGift, IconMessage, IconMusic, IconCamera, IconChartBar, IconGlobe, IconBriefcase, IconUser],
};
