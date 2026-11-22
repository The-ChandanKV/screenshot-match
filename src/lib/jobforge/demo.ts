import type { WorkspaceState } from "./types";

// These fixtures are intentionally separate from live API responses and always shown with a Demo label.
export const demoWorkspace: WorkspaceState = {
  profile: {
    facts: [
      { id: "demo-fact-1", category: "experience", label: "Product design", value: "Designed onboarding and workspace flows for a three-person product team.", verified: true, source: "Demo resume" },
      { id: "demo-fact-2", category: "skill", label: "Research", value: "Usability interviews, synthesis, and prototype testing.", verified: true, source: "Demo resume" },
      { id: "demo-fact-3", category: "education", label: "Education", value: "B.Des. in Interaction Design.", verified: false, source: "Needs review" },
    ],
    preferences: { roles: ["Product Designer", "UX Designer"], locations: ["Remote", "New York"], work_modes: ["remote", "hybrid"], levels: ["Early career"] },
  },
  options: { enabled: true, interval_minutes: 60, min_match_score: 80, max_applications_per_day: 5, dry_run: true, require_approval: true, automation_mode: "AUTONOMOUS_PREPARATION", timezone: "America/New_York" },
  provider: "rules",
  model: "demo-matching",
  authorized_board: null,
  worker: { running: true, status: "RUNNING", stage: "AI matching", last_success: "2026-11-21T17:42:00Z", queue_size: 8 },
  daily: { scanned: 42, filtered: 27, discovered: 8, compiled: 4, prepared: 3, submitted: 0, runs: 2, failed_runs: 0, new_jobs: 8, confirmed_today: 0 },
  resume_count: 4,
  unread_notifications: 3,
  next_run: "2026-11-22T20:00:00Z",
  jobs: [
    { id: "demo-job-01", company: "Northstar Studio", role: "Product Designer", status: "DISCOVERED", created: "2026-11-22T14:20:00Z", verified: true, available: true, location: "Remote · US", work_mode: "Remote", salary: "$105k–$132k", experience: "2–4 years", source: "Greenhouse", posted: "2 hours ago", url: "https://example.com/jobs/northstar-product-designer", match: { score: 96, eligibility: "ELIGIBLE", reasons: ["Product discovery and interaction design experience", "Research methods match role requirements"], matching_skills: ["Figma", "Research", "Prototyping"], missing_skills: ["Design systems at scale"] }, automation: { state: "COMPLETED" }, skills: ["Figma", "Research", "Prototyping"] },
    { id: "demo-job-02", company: "Fieldnotes", role: "UX Designer, Growth", status: "SHORTLISTED", created: "2026-11-22T11:12:00Z", verified: true, available: true, location: "New York, NY", work_mode: "Hybrid", salary: "$98k–$124k", experience: "2+ years", source: "Ashby", posted: "Today", url: "https://example.com/jobs/fieldnotes-ux-growth", match: { score: 92, eligibility: "ELIGIBLE", reasons: ["Strong experimentation and funnel-design overlap"], matching_skills: ["Figma", "A/B testing", "Prototyping"], missing_skills: [] }, automation: { state: "COMPLETED" }, skills: ["Figma", "A/B testing", "Prototyping"] },
    { id: "demo-job-03", company: "Orbit Labs", role: "Associate Product Designer", status: "RESUME_READY", created: "2026-11-21T15:40:00Z", verified: true, available: true, location: "Remote · North America", work_mode: "Remote", salary: "$92k–$118k", experience: "1–3 years", source: "Lever", posted: "Yesterday", url: "https://example.com/jobs/orbit-associate-designer", match: { score: 89, eligibility: "ELIGIBLE", reasons: ["Portfolio evidence aligns with core responsibilities"], matching_skills: ["UX research", "Figma", "Information architecture"], missing_skills: ["Mobile analytics"] }, automation: { state: "COMPLETED" }, skills: ["UX research", "Figma", "Information architecture"] },
    { id: "demo-job-04", company: "Cairn Systems", role: "Senior Product Designer", status: "NEEDS_REVIEW", created: "2026-11-21T13:10:00Z", verified: true, available: true, location: "Boston, MA", work_mode: "Hybrid", salary: "$145k–$176k", experience: "6+ years", source: "Company site", posted: "Yesterday", match: { score: 71, eligibility: "NEEDS_REVIEW", reasons: ["Senior scope exceeds the stated target level"], matching_skills: ["Figma", "Research"], missing_skills: ["Team leadership"] }, automation: { state: "EXCEPTION", error: "Experience requirement needs review", attempts: 2 }, skills: ["Figma", "Research"] },
    { id: "demo-job-05", company: "Meridian Health", role: "UX Researcher", status: "DISCOVERED", created: "2026-11-20T16:25:00Z", verified: true, available: true, location: "Remote · US", work_mode: "Remote", salary: "$110k–$140k", experience: "2–5 years", source: "Greenhouse", posted: "2 days ago", match: { score: 87, eligibility: "ELIGIBLE", reasons: ["Interviewing and synthesis experience are evidenced"], matching_skills: ["Interviewing", "Synthesis", "Usability testing"], missing_skills: ["Healthcare domain"] }, automation: { state: "COMPLETED" }, skills: ["Interviewing", "Synthesis", "Usability testing"] },
    { id: "demo-job-06", company: "Tandem Works", role: "Product Designer, Platform", status: "DISCOVERED", created: "2026-11-20T10:30:00Z", verified: true, available: true, location: "Brooklyn, NY", work_mode: "Hybrid", salary: "$115k–$148k", experience: "3+ years", source: "Ashby", posted: "2 days ago", match: { score: 84, eligibility: "ELIGIBLE", reasons: ["Platform workflow experience is a relevant match"], matching_skills: ["Figma", "Systems thinking"], missing_skills: ["B2B administration"] }, automation: { state: "COMPLETED" }, skills: ["Figma", "Systems thinking"] },
  ],
  applications: [
    { id: "demo-app-01", job_id: "demo-job-02", resume_id: "demo-resume-02", mode: "ASSISTED", status: "APPLICATION_PREPARED", confirmation: null, created: "2026-11-22T15:00:00Z", review_status: "READY_FOR_REVIEW", summary: { checkpoint: "FORM_PREPARED", eligibility: "ELIGIBLE" } },
    { id: "demo-app-02", job_id: "demo-job-03", resume_id: "demo-resume-03", mode: "ASSISTED", status: "APPLICATION_PREPARED", confirmation: null, created: "2026-11-21T16:10:00Z", review_status: "READY_FOR_REVIEW", summary: { checkpoint: "FORM_PREPARED", eligibility: "ELIGIBLE" } },
    { id: "demo-app-03", job_id: "demo-job-05", resume_id: "demo-resume-01", mode: "ASSISTED", status: "SUBMITTED", confirmation: "DEMO-RECEIPT-2041", created: "2026-11-20T13:00:00Z", review_status: "VERIFIED", summary: { checkpoint: "SUBMISSION_VERIFIED", simulation: false } },
    { id: "demo-app-04", job_id: "demo-job-06", resume_id: "demo-resume-04", mode: "ASSISTED", status: "INTERVIEW", confirmation: "DEMO-RECEIPT-2014", created: "2026-11-18T10:20:00Z", review_status: "VERIFIED", summary: { checkpoint: "INTERVIEW", simulation: false } },
    { id: "demo-app-05", job_id: "demo-job-01", resume_id: null, mode: "ASSISTED", status: "NEEDS_REVIEW", confirmation: null, created: "2026-11-22T09:55:00Z", review_status: "NEEDS_REVIEW", summary: { checkpoint: "ELIGIBILITY_REVIEW", eligibility: "NEEDS_REVIEW" } },
    { id: "demo-app-06", job_id: "demo-job-04", resume_id: null, mode: "ASSISTED", status: "FAILED", confirmation: null, created: "2026-11-21T12:05:00Z", review_status: "NEEDS_REVIEW", summary: { checkpoint: "AUTOMATION_EXCEPTION", eligibility: "NEEDS_REVIEW" } },
  ],
  runs: [
    { id: "demo-run-04", status: "COMPLETED", trigger: "scheduled", started: "2026-11-22T17:40:00Z", finished: "2026-11-22T17:42:00Z", attempts: 1, report: { scanned: 24, discovered: 4, prepared: 1 } },
    { id: "demo-run-03", status: "COMPLETED_WITH_ERRORS", trigger: "manual", started: "2026-11-22T12:10:00Z", finished: "2026-11-22T12:13:00Z", attempts: 1, report: { scanned: 18, discovered: 4, prepared: 2 } },
    { id: "demo-run-02", status: "COMPLETED", trigger: "scheduled", started: "2026-11-21T18:00:00Z", finished: "2026-11-21T18:02:00Z", attempts: 1, report: { scanned: 20, discovered: 3, prepared: 1 } },
  ],
  logs: [
    { id: "demo-log-04", kind: "match", message: "New high-match role discovered", created: "2026-11-22T14:20:00Z", detail: { company: "Northstar Studio" } },
    { id: "demo-log-03", kind: "review", message: "Application package ready for human review", created: "2026-11-22T15:00:00Z", detail: { company: "Fieldnotes" } },
    { id: "demo-log-02", kind: "worker", message: "Scheduled discovery run completed", created: "2026-11-22T17:42:00Z", detail: { jobs: 24 } },
  ],
};