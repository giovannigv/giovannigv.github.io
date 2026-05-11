# giovannigv.github.io

Personal portfolio website of **Giovanni Vicário** — Fullstack Node.js Developer based in Lisbon, Portugal.

Live at: **https://giovannigv.github.io/**

## About

Single-page portfolio built with React and Vite, deployed automatically to GitHub Pages.
The site presents:

- **Hero / About** — short bio and current role at Hubexo
- **Skills** — full stack (Node.js, NestJS, Angular, GraphQL, .NET, OpenSearch, etc.)
- **Experience** — career timeline (Hubexo, Siemens, IBM, Mackenzie) and education
- **Beyond the Code** — certifications, published novel, and scouting
- **Game Development** — indie games published on Steam and itch.io (hobby section)
- **Contact** — email, LinkedIn, GitHub, itch.io

## Tech stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- CSS Modules (no UI framework)
- GitHub Actions for CI/CD
- GitHub Pages for hosting

## Project structure

```
src/
  App.jsx              entry point — composes the page sections
  main.jsx             React root
  index.css / App.css  global styles and layout primitives
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Experience.jsx
    Highlights.jsx     certifications, book, scouting
    Projects.jsx       game development section
    Contact.jsx
    Footer.jsx
```

Each component has a co-located `*.module.css` file.

## Local development

Requires Node.js 24+.

```bash
npm install
npm run dev      # starts Vite dev server
npm run build    # builds to dist/
npm run preview  # serves the production build locally
```

## Deployment

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which builds the project and publishes `dist/` to GitHub Pages.

To enable (one-time setup): **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## License

Personal project — content (text, CV data, book references) © Giovanni Vicário.
Code is provided as-is for reference.
