# Markdown Server Setup Guide

## Prerequisites

Before running the Markdown server, you need to install Node.js:

1. **Download Node.js** from https://nodejs.org/
2. **Install Node.js** (this includes npm)
3. **Verify installation** by opening a terminal and running:
   ```bash
   node --version
   npm --version
   ```

## Installation & Usage

1. **Navigate to the project directory:**
   ```bash
   cd "path\to\Markdown-Server"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Open your browser** and go to:
   ```
   http://localhost:3000
   ```

## What You'll See

- **Home page** with a list of all `.md` files in the directory
- **Click any file** to view it rendered as beautiful HTML
- **Clean, responsive design** that works on desktop and mobile

## Adding Your Own Files

1. Create new `.md` files in the `Markdown-Server` directory
2. Refresh the browser to see them in the file list
3. Click to view them rendered as HTML

## Features

✅ **Automatic file discovery** - Finds all `.md` files in the directory  
✅ **GitHub Flavored Markdown** - Supports tables, task lists, syntax highlighting  
✅ **Responsive design** - Looks great on all devices  
✅ **File browser** - Easy navigation between markdown files  
✅ **Clean typography** - Optimized for reading  

## Project Structure

```
Markdown-Server/
├── server.js          # Express server that handles routing and markdown rendering
├── package.json       # Dependencies and scripts
├── public/
│   └── style.css     # CSS styles for the web interface
├── README.md         # Project documentation
├── sample.md         # Sample content
└── SETUP.md          # This setup guide
```

## Troubleshooting

**Server won't start?**
- Make sure Node.js is installed
- Check that port 3000 isn't already in use
- Try running on a different port: `PORT=8080 npm start`

**Files not showing up?**
- Make sure your `.md` files are in the same directory as `server.js`
- Refresh the browser page
- Check that files have the `.md` extension

**Styling looks broken?**
- Make sure the `public/style.css` file exists
- Check browser console for any error messages

## Customization

**Change the port:**
```bash
PORT=8080 npm start
```

**Modify styling:**
Edit `public/style.css` to customize the appearance

**Add features:**
The server code in `server.js` is well-commented and easy to extend

---

🚀 **Ready to start?** Install Node.js and run `npm install` then `npm start`!