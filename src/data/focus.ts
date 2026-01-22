export type FocusLens = "all" | "data-platforms" | "analytics-bi";

export const focusOptions: { label: string; value: FocusLens }[] = [
  { label: "All", value: "all" },
  { label: "Data Platforms", value: "data-platforms" },
  { label: "Analytics and BI", value: "analytics-bi" },
];
