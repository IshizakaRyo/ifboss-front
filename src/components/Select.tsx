import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  names: any;
  placeholder: string;
}

export default function SelectScrollable({ names, placeholder }: Props) {
  return (
    <Select>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {names.map((name: any) => {
            return <SelectItem value={name.name}>{name.name}</SelectItem>;
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
