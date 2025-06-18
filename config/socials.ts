import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@HasnawiH",
    icon: Icons.gitHub,
    link: "https://github.com/HasnawiH",
  },
  {
    name: "LinkedIn",
    username: "Hasnawi Haeba",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/hasnawi-haeba-8058b097/",
  },
  {
    name: "Contact",
    username: "@hasnawi",
    icon: Icons.contact,
    link: "https://wa.me/082348595521",
  },
  {
    name: "Gmail",
    username: "hasnawi.haeba",
    icon: Icons.gmail,
    link: "mailto:hasnawihaeba@gmail.com",
  },
];
