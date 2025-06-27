import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { ConnectionProvider } from "..";
import { useNetworkRequest } from "./useNetworkRequest";
import { useDeepCompareEffect } from "use-deep-compare";

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
        // Use the existing checkPermission method with array of permissions
        const permissionsResult = await fetchRequest({
          model,
          type: permissions,
        });

        // If single permission was passed, convert to PermissionsMap
        if (typeof permissionsResult === "boolean") {
          const permissionsMap: PermissionsMap = {} as PermissionsMap;
          permissionsMap[permissions[0]] = permissionsResult;
          return permissionsMap;
        }

        // Convert the result to PermissionsMap type
        const permissionsMap: PermissionsMap = {} as PermissionsMap;
        permissions.forEach((permission) => {
          permissionsMap[permission] = permissionsResult[permission] || false;
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
  const isFetchingRef = useRef(false);

  const { checkPermissions, cancelRequest } = usePermissions();

  // Fetch permissions on mount and when dependencies change
  useDeepCompareEffect(() => {
    if (!enabled || !model || !permissions.length) {
      return;
    }

    const fetchPermissions = async () => {
      if (isFetchingRef.current) return;

      isFetchingRef.current = true;
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
        isFetchingRef.current = false;
      }
    };

    fetchPermissions();

    return () => {
      cancelRequest();
    };
  }, [model, permissions, enabled]);

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
