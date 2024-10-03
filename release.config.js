module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        pkgRoot: "./clients/ts-client",
      },
    ],
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: ["./clients/ts-client/package.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};