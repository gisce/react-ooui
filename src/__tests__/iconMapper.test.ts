import iconMapper from "../helpers/iconMapper";
import * as Icons from "@ant-design/icons";

describe("A IconMapper instance", () => {
  test("should return undefined when key not found", () => {
    const icon = iconMapper("foo-bar");
    expect(icon).toBe(undefined);
  });
  test("should return proper help icon when requested", () => {
    const helpIcon = Icons.QuestionOutlined;
    const icon = iconMapper("gtk-help");
    expect(icon).toBe(helpIcon);
  });
  test("should replace all - for _", () => {
    const findAndReplaceIcon = Icons.FileSearchOutlined;
    const icon = iconMapper("gtk-find-and-replace");
    expect(icon).toBe(findAndReplaceIcon);
  })
});
