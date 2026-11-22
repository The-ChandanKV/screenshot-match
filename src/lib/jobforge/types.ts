export type DataMode = "demo" | "live";
export type ConnectionState = "demo" | "connecting" | "connected" | "disconnected";

export interface MatchResult {
  score?: number | null;
  eligibility?: string;
  reasons?: string[];
  matching_skills?: string[];
  missing_skills?: string[];
  [key: string]: unknown;
}

export interface JobAutomation {
  state?: string;
  stage?: string;
  error?: string;
  attempts?: number;
  [key: string]: unknown;
}

export interface JobRecord {
  id: string;
  company: string;
  role: string;
  status: string;
  created?: string;
  verified?: boolean;
  available?: boolean;
  location?: string;
  work_mode?: string;
  salary?: string;
  experience?: string;
  source?: string;
  posted?: string;
  url?: string;
  match?: number | MatchResult | null;
  eligibility?: string;
  automation?: JobAutomation | null;
  skills?: string[];
  description?: string;
  responsibilities?: string[];
  required_skills?: string[];
  preferred_qualifications?: string[];
  [key: string]: unknown;
}

export interface ApplicationSummary {
  checkpoint?: string;
  eligibility?: string;
  simulation?: boolean;
  [key: string]: unknown;
}

export interface ApplicationRecord {
  id: string;
  job_id: string;
  resume_id?: string | null;
  mode?: string;
  status: string;
  confirmation?: string | null;
  created?: string;
  review_status?: string;
  summary?: ApplicationSummary;
}

export interface ProfileFact {
  id: string;
  category: string;
  label: string;
  value: string;
  verified?: boolean;
  source?: string;
  excerpt?: string;
}

export interface ProfilePreferences {
  roles?: string[];
  locations?: string[];
  work_modes?: string[];
  levels?: string[];
  min_salary?: number | null;
  salary_currency?: string;
  [key: string]: unknown;
}

export interface ProfileRecord {
  facts: ProfileFact[];
  preferences: ProfilePreferences;
}

export interface RunRecord {
  id: string;
  status: string;
  trigger?: string;
  started?: string;
  finished?: string;
  canceled?: boolean;
  attempts?: number;
  report?: Record<string, number>;
  created?: string;
}

export interface LogRecord {
  id: string;
  kind: string;
  message: string;
  detail?: Record<string, unknown>;
  created?: string;
}

export interface WorkerRecord {
  running?: boolean;
  status?: string;
  stage?: string;
  last_run?: string;
  last_success?: string;
  queue_size?: number;
  [key: string]: unknown;
}

export interface WorkspaceState {
  profile: ProfileRecord;
  options: Record<string, unknown>;
  provider?: string | null;
  model?: string;
  authorized_board?: string | null;
  worker: WorkerRecord;
  daily: Record<string, number>;
  resume_count: number;
  unread_notifications: number;
  next_run?: string | null;
  jobs: JobRecord[];
  applications: ApplicationRecord[];
  runs: RunRecord[];
  logs: LogRecord[];
}

export interface ResumeVersion {
  id: string;
  job_id: string;
  parent_id?: string | null;
  template?: string;
  tex?: string;
  report?: Record<string, unknown>;
  created?: string;
}

export interface ApplicationReview {
  application: ApplicationRecord;
  job: JobRecord;
  payload: Record<string, unknown>;
  payload_hash: string | null;
  resume: { id: string; template?: string; created?: string };
  original_description?: string | null;
  readiness: string;
  approvable: boolean;
  refusal?: string | null;
  task?: Record<string, unknown> | null;
}