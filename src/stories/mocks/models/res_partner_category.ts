export default {
  model: "res.partner.category",
  exampleValues: {
    id: 1,
    name: "foo",
  },
  form: {
    fields: {
      name: {
        string: "Name",
        type: "char",
      },
    }
  }
}