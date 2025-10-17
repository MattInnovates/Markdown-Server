const express = require('express');
const { marked } = require('marked');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, images, etc.)
app.use('/static', express.static(path.join(__dirname, 'public')));

// Configure marked options for better rendering
marked.setOptions({
  breaks: true,
  gfm: true
});

// Home route - list all markdown files
app.get('/', (req, res) => {
  const markdownFiles = [];
  
  function findMarkdownFiles(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'public') {
        findMarkdownFiles(filePath);
      } else if (file.endsWith('.md')) {
        const relativePath = path.relative(__dirname, filePath).replace(/\\/g, '/');
        markdownFiles.push({
          name: file,
          path: relativePath,
          size: stat.size,
          modified: stat.mtime.toLocaleDateString()
        });
      }
    });
  }
  
  try {
    findMarkdownFiles(__dirname);
    
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Markdown Server</title>
        <link rel="stylesheet" href="/static/style.css">
    </head>
    <body>
        <div class="container">
            <h1>📚 Markdown Files</h1>
            <p>Available markdown files in this directory:</p>
            
            ${markdownFiles.length === 0 ? 
              '<p class="no-files">No markdown files found. Create some .md files to get started!</p>' :
              `<div class="file-list">
                ${markdownFiles.map(file => `
                  <div class="file-item">
                    <a href="/view/${encodeURIComponent(file.path)}" class="file-link">
                      📄 ${file.name}
                    </a>
                    <div class="file-meta">
                      Size: ${(file.size / 1024).toFixed(1)} KB | Modified: ${file.modified}
                    </div>
                  </div>
                `).join('')}
              </div>`
            }
            
            <div class="footer">
              <p>🚀 Server running on port ${PORT}</p>
            </div>
        </div>
    </body>
    </html>`;
    
    res.send(html);
  } catch (error) {
    res.status(500).send(`Error reading directory: ${error.message}`);
  }
});

// Route to view a specific markdown file
app.get('/view/*', (req, res) => {
  const filePath = decodeURIComponent(req.params[0]);
  const fullPath = path.join(__dirname, filePath);
  
  // Security check - ensure the file is within the project directory
  if (!fullPath.startsWith(__dirname)) {
    return res.status(403).send('Access denied');
  }
  
  try {
    // Check if file exists and is a markdown file
    if (!fs.existsSync(fullPath) || !filePath.endsWith('.md')) {
      return res.status(404).send('Markdown file not found');
    }
    
    // Read and parse the markdown file
    const markdownContent = fs.readFileSync(fullPath, 'utf8');
    const htmlContent = marked(markdownContent);
    
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${path.basename(filePath)} - Markdown Server</title>
        <link rel="stylesheet" href="/static/style.css">
    </head>
    <body>
        <div class="container">
            <div class="header">
                <a href="/" class="back-link">← Back to Files</a>
                <h1>📖 ${path.basename(filePath)}</h1>
            </div>
            
            <div class="markdown-content">
                ${htmlContent}
            </div>
            
            <div class="footer">
                <p>File: ${filePath}</p>
            </div>
        </div>
    </body>
    </html>`;
    
    res.send(html);
  } catch (error) {
    res.status(500).send(`Error reading file: ${error.message}`);
  }
});

// Raw markdown route (optional - for viewing source)
app.get('/raw/*', (req, res) => {
  const filePath = decodeURIComponent(req.params[0]);
  const fullPath = path.join(__dirname, filePath);
  
  if (!fullPath.startsWith(__dirname)) {
    return res.status(403).send('Access denied');
  }
  
  try {
    if (!fs.existsSync(fullPath) || !filePath.endsWith('.md')) {
      return res.status(404).send('Markdown file not found');
    }
    
    const content = fs.readFileSync(fullPath, 'utf8');
    res.setHeader('Content-Type', 'text/plain');
    res.send(content);
  } catch (error) {
    res.status(500).send(`Error reading file: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Markdown server running at http://localhost:${PORT}`);
  console.log(`📁 Serving markdown files from: ${__dirname}`);
  console.log(`📖 Place your .md files in the www directory to view them`);
});