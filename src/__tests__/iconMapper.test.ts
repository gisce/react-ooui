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
  });
  test("should return gtk-go", () => {
    const findAndReplaceIcon = Icons.FileSearchOutlined;
    const icon = iconMapper("gtk-find-and-replace");
    expect(icon).toBe(findAndReplaceIcon);
  });
  describe("If key doesn't exist in iconMapper", () => {
    test("should return undefined", () => {
      const icon = iconMapper("gtk-foo-bar");
      expect(icon).toBe(undefined);
    });
  });
});
