# Remove all node_modules

```shell
find . -name "package-lock.json" -type f -prune -exec rm -rf '{}' +;

find . -type d \( -name "dist" -o -name "storybook-static" -o -name 'node_modules' \) -prune -exec rm -rf '{}' +;
```

```shell 

    npx lerna version --conventional-commits --conventional-prerelease --preid beta --yes

    npx lerna version --conventional-commits --conventional-graduate --yes

```
        