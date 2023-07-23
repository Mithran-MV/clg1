import { uniqueId } from "lodash";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconAperture,
} from "@tabler/icons-react";

const Menuitems: MenuitemsType[] = [
 
  {
    navlabel: true,
    subheader: "Personal details",
  },
  {
    id: uniqueId(),
    title: "Basic Information",
    icon: IconAward,
    href: "/student/basic_student_info/edit",
  },
{
  navlabel: true,
  subheader: "Academics",
},
{
  id: uniqueId(),
  title: "Time Table",
  icon: IconAward,
  href: "/people/faculty",
},
{
  id: uniqueId(),
  title: "Attendance",
  icon: IconAward,
  href: "",
},
{
  id: uniqueId(),
  title: "Courses & Syllabus",
  icon: IconAward,
  href: "/academics/courses",
},
{
  id: uniqueId(),
  title: "Results",
  icon: IconAward,
  href: "/academics/programs",
},
{
  id: uniqueId(),
  title: "Notifications",
  icon: IconAward,
  href: "",
}

];

export default Menuitems;


