module.exports = {
  nexus: {
    output: {
      mode: "tags-split",
      target: "entity",
      schemas: "entity/types",
      client: "react-query",
      override: {
        mutator: {
          path: "shared/api/client.ts",
          name: "apiClient",
        },
      },
    },
    input: {
      target: "http://52.231.201.28:4000/swagger-json",
    },
  },
};
