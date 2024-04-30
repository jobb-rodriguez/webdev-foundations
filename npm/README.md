# Outline
- Package management
  - Package script
  - Package dependencies
    > development vs production dependencies
- Package version
    > refer to SemVer docs (Semantic Versioning)

# npm version
When you install Node, npm is automatically installed.

Check the version.

```bash
npm -v
````

> [!NOTE]
> The npm version influences the package versions you can install and update.

# Package Mangement
## Package Script
### Create a package.json file
1. Ensure you're in your intended directory
2. Run this command

```bash
npm init
```

3. Answer the questions prompted by npm.

### Using npm scripts
1. You can update your scripts in package.json.
2. You can run a single command.
3. You can also run multiple commands by using ```&&```.
4. Example
 - ```prod```: ```node index.js```
 - ```dev```:  ```nodemon index.js```
5. Run the script

```bash
# npm run prod
npm run <script-name>
```

## Package Dependencies
### Dependencies
def. Packages required by your application in production.


```bash
npm install <package-name> [--save-prod]
```

> [!NOTE]
> Example is installing ```express```.

### DevDependencies
def. Packages that are only needed for local development and testing.

```bash
npm install <package-name> --save-dev
```

> [!NOTE]
> Example is installing ```nodemon```.

# Package Version (semantic versioning)
| Code status | Stage | Rule | Example Version |
| -- | -- | -- | -- |
| First release | New product | Start with 1.0.0 | 1.0.0 |
| Backward compatible bug fixes | Patch release | Increment the third digit | 1.0.1 |
| Backward compatible new features | Minor release | Increment the middle digit and reset last digit to zero | 1.1.0 |
| Changes that break backward compatibilty | Major release | Increment the first digit and reset middle and last digits to zero | 2.0.0 |

> [!NOTE]
> You can read more on [npm's semantic versioning guide](https://docs.npmjs.com/about-semantic-versioning) or [the original semantic versioning guide](https://semver.org/).