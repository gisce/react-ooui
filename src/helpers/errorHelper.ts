export const parseError = (errorResponse: any) => {
  let message;
  let type;
  let title;

  if (!errorResponse) {
    message = "Error";
    type = "error";
    title = "Error";
  } else if (
    typeof errorResponse === "object" &&
    errorResponse.type &&
    errorResponse.body &&
    errorResponse.title
  ) {
    message = errorResponse.body;
    type = errorResponse.type;
    title = errorResponse.title;
  } else if (
    typeof errorResponse.exception === "string" &&
    errorResponse.exception.indexOf(" -- ") !== -1 &&
    errorResponse.exception.indexOf("\n\n") !== -1
  ) {
    const splitted = errorResponse.exception.split("\n\n");
    message = splitted[1].replace(/\n/g, "<br />");
    const args = splitted[0].split(" -- ");
    type = args[0];
    title = args[1];
  } else if (typeof errorResponse === "string") {
    message = errorResponse;
    type = "error";
    title = "Error";
  } else {
    message = JSON.stringify(errorResponse);
    type = "error";
    title = "Error";
  }

  return {
    type,
    message,
    title,
  };
};
