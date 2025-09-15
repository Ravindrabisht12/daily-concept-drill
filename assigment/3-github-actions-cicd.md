# Assignment: Create a CI/CD Pipeline in Your Personal GitHub Repository

## Objective
Set up a basic CI/CD pipeline using GitHub Actions in your own GitHub repository. Optionally, add a code review job to the workflow.

---

### Steps

1. **Fork or Create a Personal Repository**
   - Use your own GitHub account to create a new repository or use an existing one.

2. **Add a GitHub Actions Workflow**
   - In your repository, create a directory called `.github/workflows`.
   - Add a file named `ci-cd-pipeline.yml` with the following sample content:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test

  # Optional: Code Review Job
  code-review:
    runs-on: ubuntu-latest
    needs: build
    if: github.event_name == 'pull_request'
    steps:
      - uses: actions/checkout@v4
      - name: Run ESLint for code review
        run: |
          npm install
          npx eslint .
```

3. **Commit and Push**
   - Commit your workflow file and push it to your repository.

4. **Verify**
   - Create a pull request or push to `main` to see the workflow run in the Actions tab.

---

### Resources
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)

---

**Bonus:**
- Explore adding more jobs, such as deployment or notifications.
- Try integrating other code quality tools (e.g., Prettier, Jest, etc.).
