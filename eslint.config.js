import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'] },
  {
    files: [],
    rules: { 'no-console': 'off' },
  },
)
