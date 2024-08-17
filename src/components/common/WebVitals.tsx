"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((bachlers) => {
    console.log(bachlers);
  });

  return null;
}
