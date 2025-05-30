import { useCallback, useEffect } from "react";
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
