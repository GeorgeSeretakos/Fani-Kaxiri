"use client";
import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { el } from "date-fns/locale";
import { format } from "date-fns";

function ymdLocal(date) {
  // Returns YYYY-MM-DD in local timezone
  return format(date, "yyyy-MM-dd");
}

export default function DateFilter({ setDateFilter }) {
  const [from, setFrom] = React.useState(null);
  const [to, setTo] = React.useState(null);

  React.useEffect(() => {
    setDateFilter((prev) => ({
      ...prev,
      from: from ? ymdLocal(from) : undefined,
      to: to ? ymdLocal(to) : undefined,
    }));
  }, [from, to, setDateFilter]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={el}>
      <div className="flex flex-col sm:flex-row gap-4 bg-white rounded w-full max-w-lg mx-auto">
        <DatePicker
          label="Από"
          value={from}
          onChange={setFrom}
          slotProps={{ textField: { size: "small", fullWidth: true } }}
        />
        <DatePicker
          label="Έως"
          value={to}
          onChange={setTo}
          slotProps={{ textField: { size: "small", fullWidth: true } }}
        />
      </div>
    </LocalizationProvider>
  );
}
