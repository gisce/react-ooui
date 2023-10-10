import { fileTypeFromBuffer } from "file-type-buffer-browser";

export function getFilesize(base64string: string) {
  const buffer = Buffer.from(base64string, "base64");
  const inKbs = buffer.length / 1e3;
  return `${Math.round((inKbs + Number.EPSILON) * 100) / 100} KB`;
}

export async function getMimeType(base64string: string) {
  const mimeInfo = await fileTypeFromBuffer(
    Buffer.from(base64string, "base64"),
  );
  if (!mimeInfo) {
    return {
      mime: "text/plain",
      ext: "txt",
    };
  }

  return mimeInfo;
}

export const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => resolve(e.target.result.split(",")[1]);
    reader.onerror = (error) => reject(error);
  });

export function openBase64InNewTab(data: string, mimeType: string) {
  const byteCharacters = atob(data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const file = new Blob([byteArray], { type: mimeType + ";base64" });
  const fileURL = URL.createObjectURL(file);
  window.open(fileURL);
}
