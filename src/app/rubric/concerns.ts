// Response options for the rubric explainer (/rubric) and its API.
// Keys are stored in the database; keep them stable.
export const CONCERNS: { key: string; label: string }[] = [
  { key: "support", label: "I support the new rubric" },
  { key: "timing", label: "Mandatory before the training sessions" },
  { key: "unpublished", label: "The full rubric has not been shared" },
  { key: "criteria", label: "Desirability, feasibility, viability, form and aesthetics are no longer explicit criteria" },
  { key: "hidden", label: "Hidden points and a computed grade" },
  { key: "workload", label: "Independent double assessment adds workload" },
  { key: "process", label: "Changed since the February concept without a new review" },
  { key: "informed", label: "No concern, keep me informed" },
];
export const CONCERN_KEYS = CONCERNS.map((c) => c.key);
