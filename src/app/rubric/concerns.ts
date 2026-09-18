// Response options for the rubric explainer (/rubric) and its API.
// Keys are stored in the database; keep them stable.
export const CONCERNS: { key: string; label: string }[] = [
  { key: "support", label: "I support the new rubric as announced" },
  { key: "timing", label: "It becomes mandatory before the supervisor sessions (start 23 Sep; sessions Oct and Nov)" },
  { key: "unpublished", label: "The full rubric (19 descriptors) and the conversion table have not been shared with supervisors" },
  { key: "fdv", label: "Desirability, feasibility and viability are no longer explicit criteria" },
  { key: "aesthetics", label: "Form and aesthetics are not explicit criteria" },
  { key: "hidden", label: "Hidden points and a computed grade, with written justification required to deviate" },
  { key: "double", label: "Independent double assessment and the external tool add workload" },
  { key: "process", label: "The version in force differs from the February concept without a new review round" },
  { key: "rationale", label: "The rationale and evidence for the new assessment model have not been shared" },
  { key: "informed", label: "No concern, I just want to be kept informed" },
];
export const CONCERN_KEYS = CONCERNS.map((c) => c.key);
