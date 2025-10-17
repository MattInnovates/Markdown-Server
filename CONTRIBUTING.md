# Contributing to Markdown Server 🤝

Thank you for your interest in contributing to Markdown Server! We welcome contributions from the community and are excited to see what you'll bring to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Issue Reporting](#issue-reporting)
- [Feature Requests](#feature-requests)
- [Questions](#questions)

## Code of Conduct

By participating in this project, you agree to abide by our community standards:

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect differing viewpoints and experiences
- Show empathy towards other community members

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)
- **Git** for version control
- A code editor (VS Code recommended)

### Development Setup

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/markdown-server.git
   cd markdown-server
   ```

3. **Add the original repository** as upstream:
   ```bash
   git remote add upstream https://github.com/MattInnovates/markdown-server.git
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Verify the setup** by navigating to `http://localhost:3000`

## How to Contribute

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug fixes**
- ✨ **New features**
- 📚 **Documentation improvements**
- 🎨 **UI/UX enhancements**
- ⚡ **Performance optimizations**
- 🧪 **Test additions**
- 🔧 **Code refactoring**

### Before You Start

1. **Check existing issues** to see if your contribution is already being worked on
2. **Create an issue** for significant changes to discuss the approach
3. **Keep changes focused** - one feature or bug fix per pull request

## Pull Request Process

### 1. Create a Branch

Create a descriptive branch name:
```bash
git checkout -b feature/add-syntax-highlighting
git checkout -b fix/markdown-parsing-bug
git checkout -b docs/update-readme
```

### 2. Make Your Changes

- Write clear, readable code
- Follow the existing code style
- Add comments for complex logic
- Update documentation if needed

### 3. Test Your Changes

- Test the server with various markdown files
- Verify the UI works on different screen sizes
- Check that existing functionality still works

### 4. Commit Your Changes

Use clear, descriptive commit messages:
```bash
git add .
git commit -m "feat: add syntax highlighting for code blocks"
git commit -m "fix: resolve markdown table rendering issue"
git commit -m "docs: update installation instructions"
```

### 5. Push and Create Pull Request

```bash
git push origin your-branch-name
```

Then create a pull request on GitHub with:
- A clear title and description
- Reference to any related issues
- Screenshots for UI changes
- List of changes made

### 6. Code Review

- Be open to feedback and suggestions
- Respond promptly to review comments
- Make requested changes in additional commits
- Keep the conversation professional and constructive

## Coding Standards

### JavaScript Style

- Use **ES6+** features where appropriate
- Use **const** and **let** instead of **var**
- Use **semicolons** consistently
- Use **camelCase** for variables and functions
- Use **PascalCase** for classes and constructors

### Code Organization

- Keep functions small and focused
- Use meaningful variable and function names
- Add JSDoc comments for public functions
- Group related functionality together

### Example:
```javascript
/**
 * Recursively finds all markdown files in a directory
 * @param {string} dir - The directory path to search
 * @param {string[]} fileList - Array to store found files
 * @returns {string[]} Array of markdown file paths
 */
function findMarkdownFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    // Implementation...
}
```

### CSS/Styling

- Use **semantic class names**
- Follow **mobile-first** responsive design
- Maintain consistency with existing styles
- Use CSS custom properties for theming

## Testing

Currently, the project uses manual testing. When contributing:

1. **Test core functionality**:
   - Server starts correctly
   - Markdown files render properly
   - File browser navigation works
   - Responsive design functions

2. **Test edge cases**:
   - Empty directories
   - Large markdown files
   - Special characters in filenames
   - Different markdown syntax

3. **Cross-browser testing** (if making UI changes):
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers

## Issue Reporting

When reporting bugs, please include:

### Bug Reports

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
What you expected to happen.

**Environment:**
- OS: [e.g., Windows, macOS, Linux]
- Node.js version: [e.g., 18.0.0]
- Browser: [e.g., Chrome 91.0]

**Additional context**
Any other context about the problem.
```

## Feature Requests

For new features, please provide:

- **Clear description** of the feature
- **Use case** - why is this needed?
- **Proposed implementation** (if you have ideas)
- **Alternatives considered**

## Questions

If you have questions about contributing:

1. **Check existing issues** and discussions
2. **Create a new issue** with the `question` label
3. **Be specific** about what you need help with

## Recognition

Contributors will be recognized in:
- The project README
- Release notes for significant contributions
- GitHub contributors list

## Getting Help

- 📖 Read the [README.md](README.md) for project overview
- 🐛 Check [Issues](https://github.com/MattInnovates/markdown-server/issues) for known problems
- 💬 Start a [Discussion](https://github.com/MattInnovates/markdown-server/discussions) for questions

## License

By contributing to Markdown Server, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

Thank you for contributing to Markdown Server! 🚀✨