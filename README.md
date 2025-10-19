# Markdown Server 🚀

A simple, lightweight Node.js server that renders Markdown files as beautiful HTML in your web browser. Perfect for viewing documentation, notes, and markdown files with a clean, responsive interface.

## Features

- ✅ **Markdown Rendering**: Converts `.md` files to beautiful HTML
- ✅ **GitHub Flavored Markdown**: Full GFM support including tables, code blocks, and more
- ✅ **File Browser**: Navigate and browse all markdown files in your project
- ✅ **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- ✅ **Live Preview**: Instant rendering of markdown content
- ✅ **Clean Typography**: Readable, professional styling

## Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/Mattinnovates/markdown-server.git
cd markdown-server
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Development Mode

For development with auto-restart:
```bash
npm run dev
```

## Usage

1. Place your `.md` files in the project directory or subdirectories
2. Start the server using `npm start`
3. Browse to `http://localhost:3000` to see a list of all markdown files
4. Click on any file to view it rendered as HTML

## Project Structure

```
markdown-server/
├── server.js          # Main server application
├── package.json       # Project dependencies and scripts
├── public/
│   └── style.css      # Styling for rendered pages
└── www/               # Example markdown files
    ├── README.md      # Demo content
    ├── sample.md      # Sample markdown file
    └── SETUP.md       # Setup documentation
```

## Configuration

The server runs on port 3000 by default. You can change this by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## API

- `GET /` - Home page with file browser
- `GET /:filename` - Render specific markdown file

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**MattInnovates**

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

This tool is intentionally Docker-free — it's meant to be lightweight, filesystem-native and instantly usable without containers or orchestration overhead.

---

**Happy Markdown Serving!** 📝✨