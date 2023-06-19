export const parseError = (errorResponse: string) => {
  let message;
  let type;
  let title;

  if (
    typeof errorResponse === "string" &&
    errorResponse.indexOf(" -- ") !== -1 &&
    errorResponse.indexOf("\n\n") !== -1
  ) {
    const splitted = errorResponse.split("\n\n");
    message = splitted[1].replace(/\n/g, "<br />");
    const args = splitted[0].split(" -- ");
    type = args[0];
    title = args[1];
  } else {
    message = errorResponse;
    type = "error";
    title = "Error";
  }

  return {
    type,
    message,
    title,
  };
};
