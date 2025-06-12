import { useCallback, useEffect, useMemo, useState } from "react";
import { ConnectionProvider } from "..";
import { useNetworkRequest } from "./useNetworkRequest";

export type PermissionType = "create" | "read" | "write" | "unlink";

export type PermissionsMap = Record<PermissionType, boolean>;

export const usePermissions = () => {
  const [fetchRequest, cancelRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().checkPermission,
  );

  useEffect(() => {
    return () => {
      cancelRequest();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkPermissions = useCallback(
    async (
      model: string,
      permissions: PermissionType[],
    ): Promise<PermissionsMap> => {
      try {
        // Create parallel requests for all permissions
        const permissionPromises = permissions.map(async (permission) => {
          const hasPermission = await fetchRequest({
            model,
            type: permission,
          });
          return { permission, hasPermission };
        });

        // Wait for all requests to complete
        const results = await Promise.all(permissionPromises);

        // Convert results to a map
        const permissionsMap: PermissionsMap = {} as PermissionsMap;
        results.forEach(({ permission, hasPermission }) => {
          permissionsMap[permission] = hasPermission;
        });

        return permissionsMap;
      } catch (error) {
        console.error("Error checking permissions:", error);
        throw error;
      }
    },
    [fetchRequest],
  );

  return { checkPermissions, cancelRequest };
};
export type UsePermissionsStateResult = {
  permissions: PermissionsMap | null;
  loading: boolean;
  error: Error | null;
};

export type UsePermissionsStateOptions = {
  model: string;
  permissions: PermissionType[];
  enabled?: boolean;
};

export const usePermissionsState = ({
  model,
  permissions,
  enabled = true,
}: UsePermissionsStateOptions): UsePermissionsStateResult => {
  const [permissionsResult, setPermissionsResult] =
    useState<PermissionsMap | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const { checkPermissions, cancelRequest } = usePermissions();

  const fetchPermissions = useCallback(async () => {
    if (!enabled || !model || !permissions.length) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await checkPermissions(model, permissions);
      setPermissionsResult(result);
    } catch (err) {
      const error =
        err instanceof Error ? err : new Error("Unknown error occurred");
      setError(error);
      setPermissionsResult(null);
    } finally {
      setLoading(false);
    }
  }, [checkPermissions, enabled, model, permissions]);

  // Fetch permissions on mount and when dependencies change
  useEffect(() => {
    fetchPermissions();

    return () => {
      cancelRequest();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Memoize the result to prevent unnecessary re-renders
  const memoizedResult = useMemo(
    () => ({
      permissions: permissionsResult,
      loading,
      error,
    }),
    [permissionsResult, loading, error],
  );

  return memoizedResult;
};
