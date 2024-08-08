import { type ClassValue, clsx } from "clsx";
import qs from "query-string";
import { twMerge} from "tailwind-merge";
import {  Job } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatLargeNumber = (
  firstLength: number,
  secondLength: number = 0
): string => {
  const diff = firstLength - secondLength;
  if (diff >= 1000000) {
    const formattedNum = (diff / 1000000).toFixed(1);
    return `${formattedNum}M`;
  } else if (diff >= 1000) {
    const formattedNum = (diff / 1000).toFixed(1);
    return `${formattedNum}K`;
  } else {
    return diff.toString();
  }
};

export function getTimeAgo(date: Date) {
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours());
  currentDate.setHours(currentDate.getHours());
  const createdAt = new Date(date);
  const timeDiff = currentDate.getTime() - createdAt.getTime();
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
}

interface UrlQueryParams {
  params: string;
  key: string;
  value: string | null;
}
export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export const removeKeysFromQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};
export function processJobTitle(title: string | undefined | null): string {
  if (title === undefined || title === null) {
    return "No Job Title";
  }
  // Split the title into words
  const words = title.split(" ");
  // Filter out undefined or null and other unwanted words
  const validWords = words.filter((word) => {
    return (
      word !== undefined &&
      word !== null &&
      word.toLowerCase() !== "undefined" &&
      word.toLowerCase() !== "null"
    );
  });
  // If no valid words are left, return the general title
  if (validWords.length === 0) {
    return "No Job Title";
  }
  // Join the valid words to create the processed title
  const processedTitle = validWords.join(" ");
  return processedTitle;
}

export function formatJobApiResponse(job: any): Job {
  return {
    id: job.job_id,
    employerName: job.employer_name,
    employerLogo: job.employer_logo,
    employerWebsite: job.employer_website,
    jobEmploymentType: job.job_employment_type,
    jobTitle: job.job_title,
    jobDescription: job.job_description,
    jobApplyLink: job.job_apply_link,
    jobCity: job.job_city,
    jobState: job.job_state,
    jobCountry: job.job_country,
  };
}
