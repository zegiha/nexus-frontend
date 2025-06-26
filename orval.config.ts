import { defineConfig } from 'orval';

export default defineConfig({
  petstore: {
    // input: 'https://nexus.backend.zegiha.work/swagger/json',
    // input: 'http://localhost:4000/swagger/json',
    output: {
      mode: 'tags-split',
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
      target: './entity/api',
      schemas: './entity/const',
      client: 'react-query',
      headers: true,
      override: {
        useTypeOverInterfaces: true,
        mutator: {
          path: './shared/axios/lib/customInstance.ts',
          name: 'customInstance',
        },
      },
      clean: true,
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write "./entity/**/*.{ts,tsx}"',
    },
  },
})