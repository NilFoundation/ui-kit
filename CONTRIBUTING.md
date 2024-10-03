# Contributing to UI Kit

## Storybook update

We have storybook components deployed at https://nilfoundation.github.io/ui-kit
To update storybook stand with the latest changes a developer should push the changes to the `gh-pages` branch.
Once the changes are pushed to the `gh-pages` branch, the storybook will be automatically updated.

## How to bump the version of the package?

To bump the version of the package a developer should do it locally using `npm version` command, e.g.

```bash
npm version patch
```

This command will bump the patch version of the package. After that, the developer should add this changes to their pull request. Also, don't forget to push the tags, created by `npm version` command.

```bash
git push --tags
```

## How to create a release?

Create new release at https://github.com/NilFoundation/ui-kit/releases/new
Add auto-generated release notes to the release description.
Use the version number as the release title.
Choose a tag that corresponds to the version number (you should have already pushed it)

## How to publish the package?

The package is published automatically after successful release. The CI/CD pipeline will build the package and publish it to the npm registry.
