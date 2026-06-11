# Artificial Intelligence Fundamentals - Learning Platform

A beginner-friendly static educational website for students. It includes pages for instructions, lectures, and practical tasks. Materials are stored in JSON and loaded dynamically, so you can add new resources without editing the page HTML.

## Pages

- `index.html` - Home page with an Apple-inspired hero and exactly three horizontal cards.
- `instructions.html` - Video materials, YouTube embeds, Google Drive links, file viewing, and downloads.
- `lectures.html` - Lecture cards with PDF previews and download buttons.
- `practicals.html` - Practical tasks with Jupyter Notebook, PDF, GitHub, and download support.

## Project Structure

```text
.
├── index.html
├── instructions.html
├── lectures.html
├── practicals.html
├── README.md
├── assets
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   ├── main.js
│   │   └── materials.js
│   └── materials
│       ├── instructions
│       │   └── student-guide.pdf
│       ├── lectures
│       │   ├── lecture-01-introduction.pdf
│       │   └── lecture-02-machine-learning.pdf
│       └── practicals
│           ├── practical-01-ai-basics.ipynb
│           └── practical-02-ai-ethics.pdf
└── data
    └── materials.json
```

## How Materials Work

All course content is listed in:

```text
data/materials.json
```

The website reads this JSON file and creates the cards automatically.

## How to Preview Locally

Because the pages use `fetch()` to read JSON, open the project with a local web server.

One simple option:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## How to Upload to GitHub

1. Create a new repository on GitHub.
2. Open Terminal in this project folder.
3. Run these commands:

```bash
git init
git add .
git commit -m "Initial learning platform website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your GitHub account and repository name.

## How to Enable GitHub Pages

1. Open your repository on GitHub.
2. Go to **Settings**.
3. Open **Pages** in the left sidebar.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch: `main`.
6. Select folder: `/root`.
7. Click **Save**.
8. Wait a minute. GitHub will show your website link at the top of the Pages settings.

## How to Add a New Lecture

1. Put your PDF file inside:

```text
assets/materials/lectures/
```

Example:

```text
assets/materials/lectures/lecture-03-search.pdf
```

2. Open `data/materials.json`.
3. Add a new item inside the `lectures` list:

```json
{
  "title": "Lecture 3: Search Algorithms",
  "description": "Introduction to search problems, state spaces, and basic AI search methods.",
  "type": "pdf",
  "week": "Week 3",
  "tags": ["search", "algorithms"],
  "previewUrl": "assets/materials/lectures/lecture-03-search.pdf",
  "viewUrl": "assets/materials/lectures/lecture-03-search.pdf",
  "downloadUrl": "assets/materials/lectures/lecture-03-search.pdf"
}
```

4. Save the file.
5. Commit and push your changes to GitHub.

## Replacing Sample Files

The included PDF files are simple sample files. Replace them with real PDF files using the same filenames, or update the filenames in `data/materials.json`.

For Google Drive folders, replace `FOLDER_ID` in `googleDrivePreviewUrl` with your real folder ID.

For YouTube, use the embed format:

```text
https://www.youtube.com/embed/VIDEO_ID
```
