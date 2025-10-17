# Sample Documentation

This is another sample markdown file to demonstrate the server's capabilities.

## Project Structure

```
Markdown-Server/
├── server.js          # Main server file
├── package.json       # Project dependencies
├── www/               # Markdown web directory
├── public/
│   └── style.css     # Styling for the web interface
├── README.md         # Project documentation
└── sample.md         # This file
```

## API Endpoints

The server provides several useful endpoints:

### File Browser
- **GET** `/` - Lists all available markdown files

### View Markdown
- **GET** `/view/{filepath}` - Renders markdown file as HTML

### Raw Content
- **GET** `/raw/{filepath}` - Returns raw markdown content

## Configuration

The server runs on port 3000 by default. You can change this by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## Supported Markdown Features

- [x] Headers (H1-H6)
- [x] **Bold** and *italic* text
- [x] `Inline code`
- [x] Code blocks with syntax highlighting
- [x] Lists (ordered and unordered)
- [x] Tables
- [x] Links
- [x] Images
- [x] Blockquotes
- [x] Horizontal rules
- [x] Line breaks
- [x] Task lists

## Tips for Writing Markdown

1. **Use descriptive headers** to organize your content
2. **Add code examples** to make technical documentation clear
3. **Include tables** for structured data
4. **Use lists** to break down complex information
5. **Add links** to reference external resources

---

*Created with ❤️ using Node.js and Express*