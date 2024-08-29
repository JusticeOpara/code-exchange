"use client";

import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { RiMapPinLine} from "@remixicon/react"


interface Props {
  filters: string[];
  otherClasses?: string;
  containerClasses?: string;
}

const JobsFilter = ({ filters, otherClasses, containerClasses }: Props) => {
const FILTER_SEARCH_PARAMS_KEY = "filter";
  const searchParams = useSearchParams();
  const router = useRouter();

  const paramFilter = searchParams.get(FILTER_SEARCH_PARAMS_KEY);

  const handleUpdateParams = useCallback(
    (value: string) => {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: FILTER_SEARCH_PARAMS_KEY,
        value,
      });
      router.push(newUrl, { scroll: false });
    },
    [router, searchParams]
  );

  return (
    <div className={`relative ${containerClasses}`}>
      <Select
        onValueChange={handleUpdateParams}
        defaultValue={paramFilter || undefined}
      >
        <SelectTrigger
          className={`${otherClasses} border-primary text-primary flex items-center gap-3 border px-4 py-2.5`}
        >
          {/* <Image
            src="/assets/icons/carbon-location.svg"
            alt="location"
            width={18}
            height={18}
          /> */}
          <RiMapPinLine/>
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select Location" />
          </div>
        </SelectTrigger>
        <SelectContent className="text-primary small-regular border-none">
          <SelectGroup>
            {filters.length === 0 ? (
              <SelectItem value="No results found">No results found</SelectItem>
            ) : (
              filters.map((item) => (
                <SelectItem
                  key={item}
                  value={item}
                  className="line-clamp-1 cursor-pointer shadow bg-primary"
                >
                  {item}
                </SelectItem>
              ))
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default JobsFilter;
