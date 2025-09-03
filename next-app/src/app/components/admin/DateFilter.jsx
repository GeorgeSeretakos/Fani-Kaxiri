"use client";
import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { el } from "date-fns/locale";

export default function DateFilter({ setDateFilter }) {
  const [from, setFrom] = React.useState(null);
  const [to, setTo] = React.useState(null);

  // Update parent when dates change
  React.useEffect(() => {
    setDateFilter((prev) => ({
      ...prev,
      from: from ? from.toISOString().split("T")[0] : undefined,
      to: to ? to.toISOString().split("T")[0] : undefined,
    }));
  }, [from, to, setDateFilter]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={el}>
      <div className="flex items-center gap-4 bg-white rounded px-4 py-2">
        <DatePicker
          label="Από"
          value={from}
          onChange={(newValue) => setFrom(newValue)}
          slotProps={{
            textField: {
              size: "small",
              fullWidth: true,
            },
          }}
        />
        <DatePicker
          label="Έως"
          value={to}
          onChange={(newValue) => setTo(newValue)}
          slotProps={{
            textField: {
              size: "small",
              fullWidth: true,
            },
          }}
        />
      </div>
    </LocalizationProvider>
  );
}