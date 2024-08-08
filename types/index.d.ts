import React from "react";

import { BADGE_CRITERIA } from "@/constants/constants";

export interface Author {
  name: string;
  avatar: string;
  username: string;
}

export interface Question {
  _id: string;
  title: string;
  tags: {
    id: number;
    name: string;
  }[];
  author: Author;
  upVotes: string[];
  downVotes: string[];
  views: number;
  answers: string[];
  createdAt: Date;
  glow?: string;
}

export interface Answer {
  _id: string;
  author: Author;
  content: string;
  upVotes: string[];
  downVotes: string[];
  createdAt: Date;
}

export interface Tag {
  name: string;
  questions: string[];
}

export interface SidebarLink {
  route: string;
  label: string;
  icon: React.ElementType;
  iconFilled: React.ElementType;
}

export interface Job {
  id?: string;
  employerName?: string;
  employerLogo?: string | undefined;
  employerWebsite?: string;
  jobEmploymentType?: string;
  jobTitle?: string;
  jobDescription?: string;
  jobApplyLink?: string;
  jobCity?: string;
  jobState?: string;
  jobCountry?: string;
}

export interface Country {
  name: {
    common: string;
  };
}

export interface ParamsProps {
  params: { id: string };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface BadgeCounts {
  GOLD: number;
  SILVER: number;
  BRONZE: number;
}

export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;
