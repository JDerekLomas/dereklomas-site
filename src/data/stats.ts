/**
 * Headline numbers that appear on more than one page.
 *
 * These used to be typed inline wherever they were needed, which meant the
 * homepage, the CV, the job posting and the talks page all drifted apart —
 * at one point Source Library was described as 2,517, 12,347 and 15,000
 * books on three pages of the same site. Import from here instead.
 *
 * Source Library grows continuously; re-check sourcelibrary.org and
 * sourcelibrary.org/languages when updating.
 */

export const SOURCE_LIBRARY = {
  books: "22,069",
  translations: "17,814",
  firstTranslations: "5,813",
  languages: "114",
  /** Verified against sourcelibrary.org on this date. */
  asOf: "August 2026",
} as const;

export const PLAYPOWER = {
  /** Students reached across Playpower Labs deployments. */
  studentsReached: "5M+",
} as const;
