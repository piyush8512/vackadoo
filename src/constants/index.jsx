import { Palette } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { MonitorPlay } from "lucide-react";
import { Podcast } from "lucide-react";

export const navItems = [
  { label: "SERVICES", href: "/service" },
  { label: "INFO", href: "/info" },
];

export const features = [
  {
    icon: <Palette />,
    text: "CREATION",
    description: (
      <ul className="list-disc pl-6">
        <li>Tailored Content creation</li>
        <li>User Generated Content</li>
        <li>Explainer Videos</li>
        <li>Editing</li>
        <li>Photography</li>
        <li>videography</li>
      </ul>
    ),
  },
  {
    icon: <TrendingUp />,
    text: "MARKETING",
    description: (
      <ul className="list-disc pl-6">
        <li>Micro-content</li>
        <li>Creative Copywriting</li>
        <li>Media Buys</li>
        <li>Product Placement</li>
        <li>Meta Marketing</li>
        <li>Influencer Marketing</li>
        <li>SEO & Google Marketing </li>
        <li>Direct Marketing</li>
      </ul>
    ),
  },
  {
    icon: <NotebookPen />,
    text: "MANAGEMENT",
    description: (
      <ul className="list-disc pl-6">
        <li>Social Media</li>
        <li>Consistent Content Posting</li>
        <li>Maintaing Branding Indentity</li>
        <li>Content Strategy</li>
        <li>Content Planning Publishing</li>
      </ul>
    ),
  },
  {
    icon: <BriefcaseBusiness />,
    text: "BRANDING",
    description: (
      <ul className="list-disc pl-6">
        <li>Social Media</li>
        <li>Consistent Content Posting</li>
        <li>Maintaing Branding Indentity</li>
        <li>Content Strategy</li>
        <li>Content Planning Publishing</li>
        <li>Influencer Marketing</li>
        <li>SEO & Google Marketing </li>
        <li>Direct Marketing</li>
      </ul>
    ),
  },
  {
    icon: <MonitorPlay />,
    text: "MOTION GRAPHIC",
    description: "",
  },
  {
    icon: <Podcast />,
    text: "PODACASTE",
    description: "",
  },
];
