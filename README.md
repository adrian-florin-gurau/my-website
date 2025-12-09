# 🗂️ My Portofolio Website

**🔗 Link: https://www.adrian-florin-gurau.com/**
> I created this website as a way to present myself to individuals and companies interested in my skills and talent.

## 🛠️ Technologies used

As there is no Back-End involved, I am only going to list the main tech used for Front-End:
- **Next.js** -> a Full-Stack framework based on React.
- **tailwind.css** -> a CSS library for easier styling.
- **framer-motion** -> a library for complex animations made easier.

## 📑 Pages

1. [Homepage](https://www.adrian-florin-gurau.com/): has details mostly included inside a CV, like experience, summary, skills, contact details, etc.
2. [Projects](https://www.adrian-florin-gurau.com/projects): a list with my featured projects, with a friendly and brief description.

## ⚙️Flow

- The Homepage has its content exported from JSON Objects (i.e. `en.json` and `ro.json`), thus supporting English and Romanian languages, picked by `loadLanguage()` function exported from `lang.js`, with respect to the `lang` attribute in the `localStorage`.
- The `constants.json` includes content that is not translatable (e.g. my name, links, labels, etc.).
- The `routes.json` contains links and labels to all paths (esentially two) and a JSON Array of projects to be displayed in the list from the Projects page. Example:
  ```json
  {
    "home": "/",
    "projectsLabel": "Projects",
    "projectsRoute": "/projects",
    "projects": [
      {
        "name": "Project 1",
        "description": "<description1>",
        "link": "https://github.com/adrian-florin-gurau/<link1>",
        "langs": [
          "TypeScript"
        ],
        "tools": [
          "Next.js",
          "PostgreSQL"
        ],
        "content": "Some content here..."
      },
      {
        "name": "Project 2",
        "description": "<description2>",
        "link": "https://github.com/adrian-florin-gurau/<link2>",
        "langs": [
            "Python"
        ],
        "tools": [
            "Sockets",
            "Threads"
        ],
        "content": "Some content here..."
      }
    ]
  }

  ```

## 🎨 Styling

- The `AnimatedBackground.tsx` component is responsible for the grid-styled background on the Homepage, using a `<canvas>` element and JavaScript logic to handle the drawing.
- The `Title.tsx` component displays an array of strings through a 'type and delete' animation, along with a cursor flashing animation.

## 🚀 Deployment

1. Domain Name:
- bought from **Namecheap**.
2. Storage:
- uploaded the files inside a bucket, as a static website in **AWS S3**.
3. DNS / Routing:
- made correspondece with the domain name using **AWS Route 53**.
4. CDN / Delivery:
- hosting my website through **AWS CloudFront**.
