import ConnectionProvider from "@/ConnectionProvider";
import showInfo from "@/ui/InfoDialog";

async function showLogInfo(
  model: string,
  currentId: number | string,
  translateFn: Function,
) {
  const logInfo = (
    (await ConnectionProvider.getHandler().getLogInfo({
      model,
      ids: [currentId] as number[],
    })) as any
  )[0];

  const { create_date, create_uid, id, write_date, write_uid } = logInfo;

  showInfo(
    <div>
      {"ID: " + id} <br />
      {translateFn("createdBy") + ": " + create_uid[1]} <br />
      {translateFn("creationDate") + ": " + create_date} <br />
      {translateFn("lastUpdatedBy") + ": " + write_uid[1]} <br />
      {translateFn("lastUpdatedDate") + ": " + write_date}
    </div>,
  );
}

export { showLogInfo };
