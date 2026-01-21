/**
 * Mock data for BigInt integer field test
 *
 * This test reproduces the issue where BigInt values (> Number.MAX_SAFE_INTEGER)
 * are not displayed correctly in integer fields due to:
 * 1. parseFloat() losing precision with large numbers
 * 2. Math.trunc() not working with BigInt type
 * 3. toLocaleString() not handling BigInt
 *
 * The problematic code is in useLocalizedInput.ts formatter function.
 */

// BigInt value that exceeds Number.MAX_SAFE_INTEGER (9007199254740991)
export const BIGINT_ID = "4614634274427387912";

// What parseFloat returns for this value (precision loss!)
export const BIGINT_ID_PARSED_FLOAT = 4614634274427388000;

export const mockBigIntFormFields = {
  id: {
    type: "integer",
    string: "ID",
    readonly: true,
  },
  name: {
    type: "char",
    string: "Name",
    size: 128,
  },
  big_number: {
    type: "integer",
    string: "Big Number",
  },
};

export const mockBigIntFormView = {
  view_id: 5001,
  type: "form",
  arch: `<?xml version="1.0"?>
<form string="BigInt Test">
  <group>
    <field name="id"/>
    <field name="name"/>
    <field name="big_number"/>
  </group>
</form>`,
  fields: mockBigIntFormFields,
};

export const mockBigIntTreeView = {
  view_id: 5002,
  type: "tree",
  arch: `<?xml version="1.0"?>
<tree string="BigInt Test">
  <field name="id"/>
  <field name="name"/>
  <field name="big_number"/>
</tree>`,
  fields: mockBigIntFormFields,
};

// Mock record with BigInt values
// Note: The server returns these as BigInt when using json-with-bigint
export const mockBigIntRecord = {
  id: BigInt(BIGINT_ID),
  name: "Test Record with BigInt ID",
  big_number: BigInt("9223372036854775807"), // Max int64 value
};

// Alternative mock with BigInt as string (for JSON compatibility in tests)
export const mockBigIntRecordAsStrings = {
  id: BIGINT_ID,
  name: "Test Record with BigInt ID",
  big_number: "9223372036854775807",
};
