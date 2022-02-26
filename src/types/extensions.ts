export type Manifest = overwolf.extensions.Manifest;
export type UpdateExtensionResult = overwolf.extensions.UpdateExtensionResult;
export type CheckForUpdateResult = overwolf.extensions.CheckForUpdateResult;
export type AppLaunchTriggeredEvent = overwolf.extensions.AppLaunchTriggeredEvent;
export type AppInstallationEvent = overwolf.extensions.AppInstallationEvent;
export type StorageSpace = overwolf.extensions.io.enums.StorageSpace;
export type FileType = overwolf.extensions.io.enums.FileType;
export type DirResult = overwolf.extensions.io.DirResult;
export type Info = {
  status?: string;
  id?: string;
  info?: string;
  isRunning?: boolean;
};
