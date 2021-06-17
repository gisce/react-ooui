import iconMapper from "../helpers/iconMapper";
import * as Icons from "@ant-design/icons";

describe("A IconMapper instance", () => {
  test("should return the default icon when key not found", () => {
    const defaultIcon = Icons.RightOutlined;
    const icon = iconMapper("RANDOM_KEY");
    expect(icon).toBe(defaultIcon);
  });
  test("should return proper help icon when requested", () => {
    const helpIcon = Icons.QuestionOutlined;
    const icon = iconMapper("STOCK_HELP");
    expect(icon).toBe(helpIcon);
  });
});
