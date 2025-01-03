import studio from '@sanity/eslint-config-studio'

export default [
    ...studio,
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
        },
    },
]
