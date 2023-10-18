import { ConnectionProviderType } from "@/types";

export default class ConnectionProvider {
  private static handler: ConnectionProviderType;

  public static init(handler: ConnectionProviderType): void {
    ConnectionProvider.handler = handler;
  }

  public static getHandler(): ConnectionProviderType {
    if (!ConnectionProvider.handler) {
      throw "Must call init() first with a valid ConnectionProvider instance";
    }
    return ConnectionProvider.handler;
  }
}
