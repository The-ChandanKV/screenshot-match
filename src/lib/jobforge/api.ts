import type { ApplicationReview, ResumeVersion, WorkspaceState } from "./types";

const configuredBase = import.meta.env.VITE_JOBFORGE_API_URL?.trim().replace(/\/$/, "") ?? "";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status = 0) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export function apiUrl(path: string) {
  return `${configuredBase}${path.startsWith("/") ? path : `/${path}`}`;
}

export async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const headers = new Headers(init?.headers);
  if (init?.body && !headers.has("Content-Type") && !(init.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  let response: Response;
  try {
    response = await fetch(apiUrl(path), {
      ...init,
      headers,
      credentials: "include",
      cache: "no-store",
    });
  } catch {
    throw new ApiError("Could not reach the configured JobForge service.");
  }

  const payload: unknown = await response.json().catch(() => null);
  if (!response.ok) {
    const detail =
      payload && typeof payload === "object" && "detail" in payload && typeof payload.detail === "string"
        ? payload.detail
        : `JobForge returned an error (${response.status}).`;
    throw new ApiError(detail, response.status);
  }
  return payload as T;
}

export const getWorkspaceState = () => apiRequest<WorkspaceState>("/api/state");
export const getJobDetail = (jobId: string) => apiRequest<Record<string, unknown>>(`/api/jobs/${encodeURIComponent(jobId)}`);
export const getResumeVersions = (jobId: string) => apiRequest<ResumeVersion[]>(`/api/jobs/${encodeURIComponent(jobId)}/resumes`);
export const getApplicationReview = (applicationId: string) =>
  apiRequest<ApplicationReview>(`/api/applications/${encodeURIComponent(applicationId)}/review`);
export const getApplicationEvents = (applicationId: string) =>
  apiRequest<Record<string, unknown>[]>(`/api/applications/${encodeURIComponent(applicationId)}/events`);
export const runAutomation = () => apiRequest<Record<string, unknown>>("/api/runs", { method: "POST" });
export const retryJob = (jobId: string) =>
  apiRequest<Record<string, unknown>>(`/api/jobs/${encodeURIComponent(jobId)}/retry`, { method: "POST" });
export const approveAndSubmit = (applicationId: string, payloadHash: string) =>
  apiRequest<Record<string, unknown>>(`/api/applications/${encodeURIComponent(applicationId)}/approve-submit`, {
    method: "POST",
    body: JSON.stringify({ application_id: applicationId, payload_hash: payloadHash }),
  });
export const updateJobStatus = (jobId: string, status: "SHORTLISTED" | "SKIPPED" | "DISCOVERED") =>
  apiRequest<Record<string, unknown>>(`/api/jobs/${encodeURIComponent(jobId)}/status`, {
    method: "PUT",
    body: JSON.stringify({ status }),
  });