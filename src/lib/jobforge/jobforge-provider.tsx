import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { getWorkspaceState } from "@/lib/jobforge/api";
import { demoWorkspace } from "@/lib/jobforge/demo";
import type { ConnectionState, DataMode, WorkspaceState } from "@/lib/jobforge/types";

interface JobForgeContextValue {
  mode: DataMode;
  connection: ConnectionState;
  snapshot: WorkspaceState | null;
  error: string | null;
  theme: "dark" | "light";
  lastSynced: Date | null;
  setMode: (mode: DataMode) => void;
  toggleTheme: () => void;
  refresh: () => Promise<void>;
  announce: (message: string) => void;
  notice: string | null;
}

const JobForgeContext = createContext<JobForgeContextValue | null>(null);

export function JobForgeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<DataMode>("demo");
  const [connection, setConnection] = useState<ConnectionState>("demo");
  const [snapshot, setSnapshot] = useState<WorkspaceState | null>(demoWorkspace);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [hydrated, setHydrated] = useState(false);
  const [lastSynced, setLastSynced] = useState<Date | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedMode = window.localStorage.getItem("jobforge:data-mode");
      const savedTheme = window.localStorage.getItem("jobforge:theme");
      if (savedMode === "demo" || savedMode === "live") setMode(savedMode);
      if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("jobforge:theme", theme);
  }, [theme]);

  const refresh = useCallback(async () => {
    if (mode === "demo") {
      setSnapshot(demoWorkspace);
      setConnection("demo");
      setError(null);
      setLastSynced(new Date());
      return;
    }

    setConnection("connecting");
    setSnapshot(null);
    setError(null);
    try {
      const value = await getWorkspaceState();
      setSnapshot(value);
      setConnection("connected");
      setLastSynced(new Date());
    } catch (requestError) {
      setSnapshot(null);
      setConnection("disconnected");
      setError(requestError instanceof Error ? requestError.message : "Could not connect to JobForge.");
    }
  }, [mode]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem("jobforge:data-mode", mode);
    void refresh();
  }, [hydrated, mode, refresh]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const announce = useCallback((message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(null), 4200);
  }, []);

  const value = useMemo(
    () => ({ mode, connection, snapshot, error, theme, lastSynced, setMode, toggleTheme, refresh, announce, notice }),
    [mode, connection, snapshot, error, theme, lastSynced, toggleTheme, refresh, announce, notice],
  );

  return <JobForgeContext.Provider value={value}>{children}</JobForgeContext.Provider>;
}

export function useJobForge() {
  const value = useContext(JobForgeContext);
  if (!value) throw new Error("useJobForge must be used within JobForgeProvider.");
  return value;
}