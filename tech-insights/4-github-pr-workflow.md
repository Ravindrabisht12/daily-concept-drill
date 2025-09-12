# GitHub Operations & Pull Request Workflow

## Table of Contents
1. [Working with Branches](#working-with-branches)
2. [Creating Pull Requests](#creating-pull-requests)
3. [Pull Request Review Process](#pull-request-review-process)
4. [Assigning Pull Requests](#assigning-pull-requests)
5. [Commenting on Pull Requests](#commenting-on-pull-requests)
6. [Resolving Pull Request Conflicts](#resolving-pull-request-conflicts)
7. [Merging Pull Requests](#merging-pull-requests)
8. [Closing and Cleaning Up](#closing-and-cleaning-up)

---

## Working with Branches

### Creating and Switching Branches

```bash
# Create a new branch from current branch
git checkout -b feature/new-feature

# Switch to an existing branch
git checkout main
git checkout feature/existing-feature

# Create branch from specific commit
git checkout -b hotfix/bug-fix abc1234

# Push new branch to remote
git push -u origin feature/new-feature
```

### Branch Management Best Practices

```bash
# List all branches
git branch -a

# Delete local branch
git branch -d feature/completed-feature

# Delete remote branch
git push origin --delete feature/completed-feature

# Rename current branch
git branch -m new-branch-name
```

### Branch Naming Conventions

- **Feature branches**: `feature/feature-name` or `feat/feature-name`
- **Bug fixes**: `bugfix/issue-description` or `fix/issue-description`
- **Hotfixes**: `hotfix/critical-fix`
- **Releases**: `release/v1.0.0`
- **Documentation**: `docs/update-readme`

---

## Creating Pull Requests

### Prerequisites
1. Push your branch to the remote repository
2. Ensure your changes are committed and pushed

### Creating PR via GitHub Web Interface

1. **Navigate to Repository**
   - Go to your GitHub repository
   - Click "Pull requests" tab
   - Click "New pull request"

2. **Select Branches**
   - Base branch: `main` (or target branch)
   - Compare branch: Your feature branch

3. **Fill PR Details**
   ```markdown
   ## Description
   Brief description of changes made

   ## Changes Made
   - [ ] Added new feature X
   - [ ] Fixed bug Y
   - [ ] Updated documentation

   ## Testing
   - [ ] Unit tests pass
   - [ ] Manual testing completed
   - [ ] No breaking changes

   ## Screenshots (if applicable)
   [Add screenshots here]

   ## Related Issues
   Fixes #123
   Closes #456
   ```

### Creating PR via GitHub CLI

```bash
# Install GitHub CLI first
brew install gh

# Login to GitHub
gh auth login

# Create PR from current branch
gh pr create --title "Add new feature" --body "Description of changes"

# Create PR with template
gh pr create --title "Feature: User authentication" \
  --body-file .github/pull_request_template.md

# Create draft PR
gh pr create --draft --title "WIP: New feature"
```

---

## Pull Request Review Process

### Requesting Reviews

#### Via GitHub Web Interface
1. Open your PR
2. Click "Reviewers" in the right sidebar
3. Select team members or individual reviewers
4. Add review comments if needed

#### Via GitHub CLI
```bash
# Request review from specific users
gh pr create --reviewer username1,username2

# Request review from team
gh pr create --reviewer org/team-name
```

### Review Types

1. **Approve**: Changes look good, ready to merge
2. **Request Changes**: Issues found, changes needed before merge
3. **Comment**: General feedback without blocking merge

### Review Best Practices

#### For Reviewers
- **Check Code Quality**
  - Logic correctness
  - Code style consistency
  - Performance implications
  - Security considerations

- **Provide Constructive Feedback**
  ```markdown
  # Good feedback
  Consider using a Map instead of nested loops for better performance here.

  # Less helpful
  This is wrong.
  ```

- **Test the Changes**
  ```bash
  # Checkout PR branch locally
  gh pr checkout 123
  
  # Or manually
  git fetch origin pull/123/head:pr-123
  git checkout pr-123
  ```

#### For PR Authors
- **Respond to Feedback**
  - Address all comments
  - Make requested changes
  - Reply to comments explaining your approach

- **Keep PRs Small and Focused**
  - Single responsibility
  - Easy to review
  - Faster merge times

---

## Assigning Pull Requests

### Assigning via Web Interface
1. Open the PR
2. Click "Assignees" in right sidebar
3. Select yourself or team members
4. Multiple assignees can be added

### Assigning via GitHub CLI
```bash
# Assign PR to specific users
gh pr edit 123 --add-assignee username1,username2

# Assign to yourself
gh pr edit 123 --add-assignee @me
```

### Assignment Best Practices
- **Assign to PR author** for tracking ownership
- **Assign to reviewers** when their action is needed
- **Use team assignments** for shared responsibility

---

## Commenting on Pull Requests

### Types of Comments

#### 1. General Comments
```markdown
# Overall feedback on the PR
Great work on this feature! The implementation looks solid.
Just a few minor suggestions below.
```

#### 2. Line-specific Comments
- Click on line number in file diff
- Add specific feedback about that code

#### 3. Review Comments
- Part of formal review process
- Can approve, request changes, or just comment

### Comment Features

#### Code Suggestions
```markdown
# Suggest specific code changes
```suggestion
const result = items.filter(item => item.active);
```

#### Markdown Support
```markdown
**Bold text**
*Italic text*
`code snippets`
[Links](https://example.com)

```javascript
// Code blocks
function example() {
  return "formatted code";
}
```
```

#### Mentioning Users and Teams
```markdown
@username Can you review this part?
@org/team-name Please take a look at the security implications
```

### Comment Management via CLI
```bash
# View PR comments
gh pr view 123

# Add comment to PR
gh pr comment 123 --body "LGTM! Ready to merge."
```

---

## Resolving Pull Request Conflicts

### Understanding Merge Conflicts
Conflicts occur when:
- Same lines modified in different branches
- File deleted in one branch, modified in another
- Binary file conflicts

### Resolving Conflicts Locally

```bash
# Update your branch with latest main
git checkout feature/your-branch
git fetch origin
git merge origin/main

# If conflicts occur, resolve them
# Edit conflicted files, remove conflict markers
git add .
git commit -m "Resolve merge conflicts"
git push origin feature/your-branch
```

### Conflict Resolution Process

1. **Identify Conflicted Files**
   ```bash
   git status
   # Shows files with conflicts
   ```

2. **Edit Conflicted Files**
   ```diff
   <<<<<<< HEAD
   Your changes
   =======
   Incoming changes
   >>>>>>> main
   ```

3. **Choose Resolution Strategy**
   - Keep your changes
   - Accept incoming changes
   - Combine both changes
   - Write completely new solution

4. **Test and Commit**
   ```bash
   # After resolving conflicts
   git add resolved-file.js
   git commit -m "Resolve conflicts in resolved-file.js"
   ```

### Using GitHub Web Interface
1. GitHub will show "This branch has conflicts"
2. Click "Resolve conflicts"
3. Edit files in web editor
4. Mark as resolved
5. Commit merge

---

## Merging Pull Requests

### Merge Strategies

#### 1. Merge Commit (Default)
```bash
# Creates merge commit preserving history
git checkout main
git merge feature/branch-name
```
- **Pros**: Preserves complete history
- **Cons**: Can create cluttered history

#### 2. Squash and Merge
```bash
# Combines all commits into single commit
gh pr merge 123 --squash
```
- **Pros**: Clean linear history
- **Cons**: Loses individual commit history

#### 3. Rebase and Merge
```bash
# Replays commits on top of main
gh pr merge 123 --rebase
```
- **Pros**: Linear history without merge commits
- **Cons**: Can be complex with conflicts

### Merge Requirements

#### Branch Protection Rules
- Required status checks
- Required reviews
- Dismiss stale reviews
- Require linear history
- Administrator enforcement

#### Pre-merge Checklist
```markdown
- [ ] All CI checks pass
- [ ] Required reviews approved
- [ ] No merge conflicts
- [ ] Branch is up to date
- [ ] Documentation updated
- [ ] Tests added/updated
```

### Merging via Web Interface
1. Open approved PR
2. Click "Merge pull request"
3. Choose merge strategy
4. Add merge commit message
5. Confirm merge

### Merging via CLI
```bash
# Merge with default strategy
gh pr merge 123

# Squash and merge
gh pr merge 123 --squash --delete-branch

# Rebase and merge
gh pr merge 123 --rebase --delete-branch
```

---

## Closing and Cleaning Up

### Deleting Branches

#### After Successful Merge
```bash
# Delete local branch
git branch -d feature/completed-feature

# Delete remote branch (if not auto-deleted)
git push origin --delete feature/completed-feature

# Using GitHub CLI
gh pr merge 123 --delete-branch
```

#### Cleaning Up Local Branches
```bash
# Remove tracking branches that no longer exist on remote
git remote prune origin

# List merged branches
git branch --merged main

# Delete all merged branches (except main)
git branch --merged main | grep -v main | xargs -n 1 git branch -d
```

### Closing PRs Without Merging

#### Via Web Interface
1. Open PR
2. Click "Close pull request"
3. Add comment explaining why

#### Via CLI
```bash
# Close PR without merging
gh pr close 123 --comment "Closing due to change in requirements"
```

### Post-Merge Actions

1. **Update Local Repository**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Create Release Notes** (if applicable)
   ```markdown
   ## Version 1.2.0
   
   ### New Features
   - Added user authentication (#123)
   - Improved search functionality (#124)
   
   ### Bug Fixes
   - Fixed memory leak in data processing (#125)
   
   ### Breaking Changes
   - Updated API endpoint structure (#126)
   ```

3. **Deploy Changes** (if automated deployment)
   - Verify deployment status
   - Monitor for issues
   - Rollback if necessary

---

## Best Practices Summary

### For Pull Requests
- Keep PRs small and focused
- Write clear, descriptive titles
- Include comprehensive descriptions
- Add tests for new features
- Update documentation
- Request appropriate reviewers

### For Reviews
- Review promptly
- Be constructive and helpful
- Test changes locally when needed
- Approve only when confident
- Use suggestions for specific fixes

### For Branch Management
- Use descriptive branch names
- Keep branches up to date
- Delete merged branches
- Follow team naming conventions

### For Collaboration
- Communicate changes clearly
- Respond to feedback promptly
- Use draft PRs for work in progress
- Tag relevant team members
- Document complex decisions

---

## Common GitHub CLI Commands Quick Reference

```bash
# PR Management
gh pr create                    # Create new PR
gh pr list                      # List PRs
gh pr view 123                  # View specific PR
gh pr checkout 123              # Checkout PR locally
gh pr merge 123                 # Merge PR
gh pr close 123                 # Close PR
gh pr ready 123                 # Mark draft PR as ready

# Review Management
gh pr review 123 --approve      # Approve PR
gh pr review 123 --request-changes --body "Comments"
gh pr comment 123 --body "Comment text"

# Repository Management
gh repo view                    # View repo details
gh repo clone owner/repo        # Clone repository
gh issue list                   # List issues
gh issue create                 # Create new issue
```

---

This comprehensive guide covers the complete GitHub Pull Request workflow from branch creation to cleanup. Following these practices will help maintain a clean, organized, and collaborative development process.