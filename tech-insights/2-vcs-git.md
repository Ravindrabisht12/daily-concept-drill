# Version Control Basics (Git Focus)

## 1. What is VCS?
Version Control System tracks changes to files so you can collaborate, revert, and see history.

## 2. Types of VCS
- Local: Only on one machine (e.g. simple backups)
- Centralized (CVCS): Single server, e.g. Subversion (SVN)
- Distributed (DVCS): Every clone has full history (Git, Mercurial)

Git is a Distributed VCS.

## 3. Git vs GitHub
- Git: The tool/technology installed on your machine to version code.
- GitHub: A hosting platform (remote) for Git repositories + pull requests, issues, CI.

You can use Git without GitHub; GitHub just stores and collaborates on repos.

## 4. Minimal Workflow
1. Clone or init repo
2. Make changes
3. Stage changes
4. Commit snapshot
5. Push to remote / Pull updates

## 5. Core Commands (Memorize These)
```bash
git init                    # Start a repo in current folder
git clone <url>             # Copy remote repo locally
git status                  # See changes
git add <file>              # Stage file
git add .                   # Stage all changes
git commit -m "message"     # Save snapshot
git remote add origin <url> # Link remote (once)
git pull                    # Get latest from remote
git push                    # Upload commits to remote
```

## 6. Basic Mental Model
- Working Directory: Your edits
- Staging Area (Index): What will go in next commit
- Repository (History): Commits already saved

Flow: Edit -> add -> commit -> push

## 7. Common First-Time Setup
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 8. Simple Branch Use (Optional Early Step)
```bash
git branch feature/login   # Create branch
git switch feature/login   # Move to it (or: git checkout feature/login)
git push -u origin feature/login
```

## 9. Git vs GitHub Quick Table
| Thing | Git | GitHub |
|-------|-----|--------|
| What | Tool | Service/platform |
| Where | Local & any remote | Hosted (cloud) |
| Purpose | Version tracking | Collaboration & hosting |

## 10. Quick Tips
- Commit small, logical changes.
- Write clear commit messages (present tense): "add login handler".
- Pull before you start work for the day.

## 11. Learn More (Optional)
- https://git-scm.com/docs
- https://github.com/git-guides

That’s enough to get productive fast.

