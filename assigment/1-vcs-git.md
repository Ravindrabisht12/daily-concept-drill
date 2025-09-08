# Git & GitHub Assignment

## Objective
Learn Git basics and GitHub workflow by creating repositories, managing visibility, and using essential files.

## Prerequisites
- Complete reading: [Git Basics Guide](../tech-insights/2-vcs-git.md)
- Have a computer with internet access

## Tasks

### Task 1: GitHub Account Setup
1. **Create GitHub Account**
   - Go to [github.com](https://github.com)
   - Sign up with your email
   - Choose a professional username (you'll use this for work)

2. **Enable Two-Factor Authentication (2FA)**
   - Go to Settings → Security
   - Enable 2FA using authenticator app or SMS
   - Save backup codes in a safe place

### Task 2: Create 4 Repositories

#### Repository 1: Public Repository
- **Name**: `my-first-public-repo`
- **Visibility**: Public
- **Description**: "Learning Git and GitHub basics"
- **Initialize with**: README.md

#### Repository 2: Private Repository #1
- **Name**: `personal-notes`
- **Visibility**: Private
- **Description**: "My private learning notes"
- **Initialize with**: README.md

#### Repository 3: Private Repository #2
- **Name**: `secret-project`
- **Visibility**: Private
- **Description**: "Practice private repository"
- **Initialize with**: README.md

#### Repository 4: Fork an Existing Repository
- Find a popular repository (suggestions below)
- Click "Fork" to create your own copy
- Popular repositories to fork:
  - `microsoft/vscode` (if you want something big)
  - `github/docs` (GitHub's documentation)
  - Any interesting project you find

### Task 3: Add Essential Files

For **each of your 3 created repositories** (not the fork), add:

#### .gitignore File
Create `.gitignore` with appropriate content:

**For Node.js projects:**
```
node_modules/
npm-debug.log*
.env
dist/
*.log
```

**For general projects:**
```
# OS generated files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/
*.swp

# Logs
*.log

# Environment
.env
```

#### README.md File
Update each README.md with:

```markdown
# [Repository Name]

## Description
Brief description of what this repository is for.

## Getting Started
Steps to use or run this project.

## Author
Your name and contact info.

## License
MIT License (or specify other)
```

### Task 4: Practice Git Commands

Using one of your repositories:

1. **Clone to local machine:**
   ```bash
   git clone https://github.com/yourusername/my-first-public-repo.git
   ```

2. **Make changes locally:**
   - Create a new file: `hello.txt`
   - Add some content to it

3. **Basic Git workflow:**
   ```bash
   git status
   git add hello.txt
   git commit -m "add hello.txt file"
   git push origin main
   ```

## Deliverables

Submit the following:

1. **Screenshots or links showing:**
   - Your GitHub profile with 4 repositories visible
   - 2FA enabled (screenshot of security settings)
   - Each repository with .gitignore and README.md files

2. **Repository URLs:**
   - Public repo: `https://github.com/yourusername/my-first-public-repo`
   - Private repo 1: `https://github.com/yourusername/personal-notes`
   - Private repo 2: `https://github.com/yourusername/secret-project`
   - Forked repo: `https://github.com/yourusername/[forked-repo-name]`

## Bonus Tasks (Optional)

1. **Create a simple website** in your public repo using GitHub Pages
2. **Add collaborators** to one private repository
3. **Create issues** in your public repository
4. **Make a pull request** to the original repository you forked

## Evaluation Criteria

- [ ] GitHub account created with professional username
- [ ] 2FA authentication enabled
- [ ] 4 repositories created with correct visibility
- [ ] All repositories have appropriate .gitignore files
- [ ] All repositories have well-written README.md files
- [ ] Successfully demonstrated basic Git commands (add, commit, push)

## Resources

- [GitHub Hello World Guide](https://guides.github.com/activities/hello-world/)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [About READMEs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)

## Time Estimate
2-3 hours for complete beginners, 1 hour if familiar with basics.