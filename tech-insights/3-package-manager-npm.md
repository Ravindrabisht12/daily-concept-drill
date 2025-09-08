# Package Managers (npm, pnpm, yarn)

## 1. What is a Package Manager?
Tool to install, update, and manage code dependencies (libraries/modules) in your project.

## 2. Why Use One?
- Share and reuse code across projects
- Automatically handle dependency versions
- Easily install tools and libraries
- Manage project dependencies centrally

## 3. Popular JavaScript Package Managers

### npm (Node Package Manager)
- Default with Node.js
- Uses `package.json` and `package-lock.json`
- Large registry: npmjs.com

### yarn
- Created by Facebook (now Meta)
- Faster than old npm versions
- Uses `yarn.lock` file
- Compatible with npm registry

### pnpm
- Fast, disk space efficient
- Uses hard links to save space
- Compatible with npm registry
- Growing popularity

## 4. Basic Commands Comparison

| Action | npm | yarn | pnpm |
|--------|-----|------|------|
| Install all deps | `npm install` | `yarn` | `pnpm install` |
| Add package | `npm install react` | `yarn add react` | `pnpm add react` |
| Add dev dependency | `npm install -D jest` | `yarn add -D jest` | `pnpm add -D jest` |
| Remove package | `npm uninstall react` | `yarn remove react` | `pnpm remove react` |
| Run script | `npm run start` | `yarn start` | `pnpm start` |
| Update packages | `npm update` | `yarn upgrade` | `pnpm update` |

## 5. Key Files

### package.json
Main project file with dependencies, scripts, metadata:
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0"
  },
  "devDependencies": {
    "jest": "^29.0.0"
  },
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  }
}
```

### Lock Files
- `package-lock.json` (npm)
- `yarn.lock` (yarn)  
- `pnpm-lock.yaml` (pnpm)

Lock exact versions for reproducible installs.

## 6. Common Commands (npm focus)

```bash
npm init                    # Create new package.json
npm install                 # Install all dependencies
npm install react          # Add react to dependencies
npm install -D jest         # Add jest to devDependencies
npm install -g typescript   # Install globally
npm uninstall react         # Remove package
npm run start               # Run script from package.json
npm list                    # Show installed packages
npm outdated                # Check for updates
npm update                  # Update packages
```

## 7. Global vs Local Install
- **Local**: In project's `node_modules/` folder
- **Global**: System-wide, accessible from anywhere

Example:
```bash
npm install -g create-react-app  # Global tool
npm install react                # Local dependency
```

## 8. Semantic Versioning (semver)
Version format: `MAJOR.MINOR.PATCH` (e.g., 1.2.3)

| Symbol | Meaning | Example |
|--------|---------|---------|
| `^1.2.3` | Compatible (minor/patch) | 1.2.3 to 1.x.x |
| `~1.2.3` | Patch only | 1.2.3 to 1.2.x |
| `1.2.3` | Exact version | Only 1.2.3 |

## 9. Which One to Choose?

### Use npm if:
- New to JavaScript ecosystem
- Working on simple projects
- Team already uses npm

### Use yarn if:
- Need faster installs (older npm)
- Like yarn's CLI experience
- Working with React projects

### Use pnpm if:
- Managing many projects (saves disk space)
- Want fastest performance
- Working in monorepos

## 10. Quick Setup Example

```bash
# Create new project
mkdir my-app
cd my-app
npm init -y

# Add some packages
npm install express
npm install -D nodemon

# Add script to package.json
# "scripts": { "dev": "nodemon app.js" }

# Run it
npm run dev
```

## 11. Common Issues & Tips

- **node_modules too big**: Delete it, run `npm install` to recreate
- **Package not found**: Check spelling, try `npm cache clean --force`
- **Permission errors**: Don't use `sudo`, configure npm properly
- **Lock file conflicts**: Delete lock file, reinstall

## 12. Security

```bash
npm audit              # Check for vulnerabilities
npm audit fix          # Auto-fix issues
npm audit fix --force  # Force fix (careful!)
```

## 13. Learn More
- [npm docs](https://docs.npmjs.com/)
- [yarn docs](https://yarnpkg.com/)
- [pnpm docs](https://pnpm.io/)

That covers the package manager basics for JavaScript development!
