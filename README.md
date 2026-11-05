# Max Ma — Personal website

A personal homepage for my projects, small experiments, and everyday interests. An introduction about games, music, and everyday life comes before the projects. Three project stories pair screenshots with descriptions and links; a separate section points to my game and study notes. A collapsed experience section follows, with contact links in a separate section at the bottom.

**Website:** [xyma2003.github.io](https://xyma2003.github.io/). GitHub Pages publishes the site from the root of the `main` branch.

## Preview locally

From the repository root, use Python 3 to serve the static files:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000). Press `Ctrl+C` to stop the server. No package installation, build step, API key, or model service is required.

## Contents

- `index.html` — introduction, project stories, personal links, and an optional background section.
- `site.css` — responsive layout and visual styles.
- `site.js` — language switching and page interactions.
- `assets/` — three project screenshots copied from my project repositories. See [asset sources, demo boundaries, and licenses](assets/README.md).
- Three language versions: 简体中文 / 繁體中文 / English.

The site uses plain HTML, CSS, and JavaScript with no build dependencies. To publish an update, check the local preview, push to `main`, and confirm that the GitHub Pages deployment succeeds.

Typography prefers the device's installed **YouYuan (幼圆)** font. No YouYuan font file is currently bundled; devices without it use the sans-serif fallback. The current Mac preview does not have YouYuan installed, so its appearance still needs verification with the actual font before this change is considered visually accepted.

## Featured work and interests

- Project stories: [Critter](https://github.com/xyma2003/critter), [Multi-Agent Debate](https://github.com/xyma2003/multi-agent-debate), and [WorkDiary](https://github.com/xyma2003/workdiary-agent).
- Personal links: [Laugh Runner](https://github.com/xyma2003/laugh-runner-prototype) and [study notes](https://github.com/xyma2003/interview-bagu).

The project screenshots use synthetic or offline demonstration content. Their sources, licenses, and demonstration boundaries are documented in [assets/README.md](assets/README.md).

## License

[MIT License](LICENSE), Copyright (c) 2026 Ma Xinyue. Copied assets retain the same source copyright and license notice.
