# Жасанды интеллект негіздері - Оқу платформасы

Бұл студенттерге арналған қарапайым статикалық оқу сайты. Сайтта нұсқаулықтар, дәрістер және практикалық тапсырмалар беттері бар. Барлық материалдар `data/materials.json` файлы арқылы жүктеледі, сондықтан жаңа материал қосу үшін HTML беттерін өзгертудің қажеті жоқ.

## Беттер

- `index.html` - Apple стиліне жақын заманауи басты бет және дәл 3 көлденең карточка.
- `instructions.html` - YouTube бейнелері, Google Drive сілтемелері, файл қарау және жүктеу.
- `lectures.html` - Дәріс карточкалары, PDF алдын ала қарау және жүктеу батырмалары.
- `practicals.html` - Jupyter Notebook, PDF, GitHub сілтемелері және жүктеу мүмкіндігі.

## Жоба құрылымы

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

## Материалдар қалай жұмыс істейді?

Барлық курс материалдары мына файлда сақталады:

```text
data/materials.json
```

Сайт осы JSON файлды оқып, карточкаларды автоматты түрде жасайды.

## Сайтты компьютерде көру

JSON файлын оқу үшін сайтты жергілікті сервер арқылы ашқан дұрыс.

Терминалда жоба папкасында мына команданы орындаңыз:

```bash
python3 -m http.server 8000
```

Содан кейін браузерден ашыңыз:

```text
http://localhost:8000
```

## GitHub-қа қалай жүктеу керек?

1. GitHub-та жаңа repository жасаңыз.
2. Терминалды осы жоба папкасында ашыңыз.
3. Мына командаларды орындаңыз:

```bash
git init
git add .
git commit -m "Initial learning platform website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

`YOUR-USERNAME` және `YOUR-REPOSITORY` орнына өз GitHub атыңызды және repository атауын жазыңыз.

## GitHub Pages қалай қосылады?

1. GitHub-та repository бетін ашыңыз.
2. **Settings** бөліміне кіріңіз.
3. Сол жақ мәзірден **Pages** бөлімін таңдаңыз.
4. **Build and deployment** бөлімінде **Deploy from a branch** таңдаңыз.
5. Branch ретінде `main` таңдаңыз.
6. Folder ретінде `/root` таңдаңыз.
7. **Save** батырмасын басыңыз.
8. Бірнеше минуттан кейін GitHub Pages сілтемесі дайын болады.

## Кейін жаңа дәріс қалай қосылады?

1. Жаңа PDF файлын мына папкаға салыңыз:

```text
assets/materials/lectures/
```

Мысалы:

```text
assets/materials/lectures/lecture-03-search.pdf
```

2. `data/materials.json` файлын ашыңыз.
3. `"lectures"` тізімінің ішіне жаңа объект қосыңыз:

```json
{
  "title": "3-дәріс: Іздеу алгоритмдері",
  "description": "Іздеу есептері, күй кеңістігі және негізгі ЖИ іздеу әдістері.",
  "type": "pdf",
  "week": "3-апта",
  "tags": ["іздеу", "алгоритмдер"],
  "previewUrl": "assets/materials/lectures/lecture-03-search.pdf",
  "viewUrl": "assets/materials/lectures/lecture-03-search.pdf",
  "downloadUrl": "assets/materials/lectures/lecture-03-search.pdf"
}
```

4. Файлды сақтаңыз.
5. Өзгерістерді GitHub-қа жіберіңіз:

```bash
git add .
git commit -m "Add lecture 3"
git push
```

## Үлгі файлдарды ауыстыру

Жобадағы PDF файлдар тек үлгі ретінде берілген. Оларды нақты PDF файлдармен ауыстырыңыз немесе `data/materials.json` ішіндегі файл атауларын өзгертіңіз.

Google Drive папкасын қосу үшін `googleDrivePreviewUrl` ішіндегі `FOLDER_ID` орнына өз папкаңыздың ID нөмірін қойыңыз.

YouTube бейнесін қосу үшін embed форматын қолданыңыз:

```text
https://www.youtube.com/embed/VIDEO_ID
```
