# SoftUni HTML and CSS

Solutions for the SoftUni HTML & CSS course. Every exercise is a self-contained folder with its own `package.json`:
the markup is checked with [html-validate](https://html-validate.org/) and a small `node --test` suite checks the
page against the task.

## Lectures

| #   | Lecture | Exercises |
| --- | ------- | --------- |
| 001 | Introduction to HTML & CSS | [Welcome](001-Introduction-To-HTML-CSS/001-Welcome) · [Fruits](001-Introduction-To-HTML-CSS/002-Fruits) · [Wiki Page](001-Introduction-To-HTML-CSS/003-Wiki-Page) · [To Do List](001-Introduction-To-HTML-CSS/004-To-Do-List) · [HTML Lists](001-Introduction-To-HTML-CSS/005-HTML-Lists) · [Definition Lists](001-Introduction-To-HTML-CSS/006-Definition-Lists) · [Reversed List](001-Introduction-To-HTML-CSS/007-Reversed-List) · [Modern JavaScript](001-Introduction-To-HTML-CSS/008-Modern-JavaScript) · [Book Story](001-Introduction-To-HTML-CSS/009-Book-Story) · [World Cup News](001-Introduction-To-HTML-CSS/010-World-Cup-News) |
| 002 | HTML Structure | [Navigation Bar](002-HTML-Structure/001-Navigation-Bar) · [Page Content](002-HTML-Structure/002-Page-Content) · [Semantic Tags](002-HTML-Structure/003-Semantic-Tags) · [Semantic Article Page](002-HTML-Structure/004-Semantic-Article-Page) · [Simple Website](002-HTML-Structure/005-Simple-Website) · [Semantic Blog Layout](002-HTML-Structure/006-Semantic-Blog-Layout) |
| 003 | CSS Typography | [Restaurant Menu](003-CSS-Typography/001-Restaurant-Menu) · [Style Lists](003-CSS-Typography/002-Style-Lists) · [Styling Tables](003-CSS-Typography/003-Styling-Tables) · [Buttons CSS](003-CSS-Typography/004-Buttons-CSS) · [Fonts Specimen](003-CSS-Typography/005-Fonts-Specimen) · [Contrasting Colors](003-CSS-Typography/006-Contrasting-Colors) · [Making Of A CSS Font](003-CSS-Typography/007-Making-Of-A-CSS-Font) · [Font Awesome Icons](003-CSS-Typography/008-Font-Awesome-Icons) · [Icon Font Buttons](003-CSS-Typography/009-Icon-Font-Buttons) · [Icon Font List](003-CSS-Typography/010-Icon-Font-List) · [Typography](003-CSS-Typography/011-Typography) |
| 004 | CSS Box Model | [Box Model Container](004-CSS-Box-Model/001-Box-Model-Container) · [Scrolling Article](004-CSS-Box-Model/002-Scrolling-Article) · [Brazil Coffee](004-CSS-Box-Model/003-Brazil-Coffee) · [Article](004-CSS-Box-Model/004-Article) · [Blog Article](004-CSS-Box-Model/005-Blog-Article) · [Navigation Inline Block](004-CSS-Box-Model/006-Navigation-Inline-Block) · [Make Your Own Website](004-CSS-Box-Model/007-Make-Your-Own-Website) · [Photo Gallery Inline Block](004-CSS-Box-Model/008-Photo-Gallery-Inline-Block) · [Blog Layout Inline Block](004-CSS-Box-Model/009-Blog-Layout-Inline-Block) |
| 005 | Position and Float | [Simple Site Layout](005-Position-And-Float/001-Simple-Site-Layout) · [Position Playground](005-Position-And-Float/002-Position-Playground) · [Center Position And Transform](005-Position-And-Float/003-Center-Position-And-Transform) · [Navigation](005-Position-And-Float/004-Navigation) · [New Offer](005-Position-And-Float/005-New-Offer) · [Social Media Icons](005-Position-And-Float/006-Social-Media-Icons) · [Interior Design Studio](005-Position-And-Float/007-Interior-Design-Studio) · [Jewellery Website](005-Position-And-Float/008-Jewellery-Website) |
| 006 | Flexbox | [Flexbox Layout](006-Flexbox/001-Flexbox-Layout) · [FlexModel Articles](006-Flexbox/002-FlexModel-Articles) · [ABC Game](006-Flexbox/003-ABC-Game) · [Calendar](006-Flexbox/004-Calendar) · [Navigation Flexbox](006-Flexbox/005-Navigation-Flexbox) · [Photo Gallery Flexbox](006-Flexbox/006-Photo-Gallery-Flexbox) · [Blog Layout Flexbox](006-Flexbox/007-Blog-Layout-Flexbox) · [Sticky Footer Flexbox](006-Flexbox/008-Sticky-Footer-Flexbox) · [Center Flexbox](006-Flexbox/009-Center-Flexbox) · [Expanding Flex Cards](006-Flexbox/010-Expanding-Flex-Cards) · [Cards Columns Flexbox](006-Flexbox/011-Cards-Columns-Flexbox) |
| 007 | Media Queries | [Responsive Site Layout](007-Media-Queries/001-Responsive-Site-Layout) · [Responsive Top Menu](007-Media-Queries/002-Responsive-Top-Menu) · [Media Queries In Typography](007-Media-Queries/003-Media-Queries-In-Typography) · [Responsive Forms](007-Media-Queries/004-Responsive-Forms) · [Responsive Media Boxes](007-Media-Queries/005-Responsive-Media-Boxes) · [Landing Page](007-Media-Queries/006-Landing-Page) · [Responsive Tables](007-Media-Queries/007-Responsive-Tables) · [Responsive Vertical Timeline](007-Media-Queries/008-Responsive-Vertical-Timeline) · [Company Website](007-Media-Queries/009-Company-Website) · [Task Board Website](007-Media-Queries/010-Task-Board-Website) |

## HTML & CSS mini course

Each task keeps the original `Requirements-and-Resources` next to its `Solution`.

| Part | Exercises |
| ---- | --------- |
| HTML | [My First Page](000-HTML-And-CSS-Mini-Course/001-HTML/001) · [Navigation Bar](000-HTML-And-CSS-Mini-Course/001-HTML/002) · [Page Content](000-HTML-And-CSS-Mini-Course/001-HTML/003) · [Paragraphs](000-HTML-And-CSS-Mini-Course/001-HTML/004) · [Description List](000-HTML-And-CSS-Mini-Course/001-HTML/005) · [Simple Website](000-HTML-And-CSS-Mini-Course/001-HTML/006) · [Exam Results](000-HTML-And-CSS-Mini-Course/001-HTML/007) · [Reversed List](000-HTML-And-CSS-Mini-Course/001-HTML/008) · [Table](000-HTML-And-CSS-Mini-Course/001-HTML/009) · [Navigation Bar](000-HTML-And-CSS-Mini-Course/001-HTML/010) |
| CSS | [Fitness Site](000-HTML-And-CSS-Mini-Course/002-CSS/001) · [Monkeys](000-HTML-And-CSS-Mini-Course/002-CSS/002) · [My Home](000-HTML-And-CSS-Mini-Course/002-CSS/003) · [Portfolio](000-HTML-And-CSS-Mini-Course/002-CSS/004) · [Mountain Form](000-HTML-And-CSS-Mini-Course/002-CSS/005) · [Flowers](000-HTML-And-CSS-Mini-Course/002-CSS/006) |

## Run an exercise

Open the `.html` file in a browser, or check it the way CI does:

```bash
cd 006-Flexbox/004-Calendar
npm install
npm test        # html-validate + node --test
```

## Certificate

[SoftUni · HTML & CSS, May 2022](Resources/Certificate.pdf)

## License

[MIT](LICENSE)

## Course materials

Slides, task sheets and lecture videos for each lesson.

| Lesson | Materials | Video |
| ------ | --------- | ----- |
| [001-Introduction-To-HTML-CSS](001-Introduction-To-HTML-CSS) | [Introduction-To-Html-And-Css-Exercise.pdf](001-Introduction-To-HTML-CSS/Resources/Introduction-To-Html-And-Css-Exercise.pdf) · [Introduction-To-Html-And-Css.pdf](001-Introduction-To-HTML-CSS/Resources/Introduction-To-Html-And-Css.pdf) | [Video](https://youtu.be/GVkNqiXwb9c) |
| [002-HTML-Structure](002-HTML-Structure) | [Html-Structure-Exercise.pdf](002-HTML-Structure/Resources/Html-Structure-Exercise.pdf) · [Html-Structure.pdf](002-HTML-Structure/Resources/Html-Structure.pdf) | [Video](https://youtu.be/J5FYdEsXTzA) |
| [003-CSS-Typography](003-CSS-Typography) | [Css-And-Thypography-Exercise.pdf](003-CSS-Typography/Resources/Css-And-Thypography-Exercise.pdf) · [Css-And-Thypography.pdf](003-CSS-Typography/Resources/Css-And-Thypography.pdf) | [Video](https://youtu.be/y6udZikvtus) |
| [004-CSS-Box-Model](004-CSS-Box-Model) | [Css-Box-Model-Exercise.pdf](004-CSS-Box-Model/Resources/Css-Box-Model-Exercise.pdf) · [Css-Box-Model.pdf](004-CSS-Box-Model/Resources/Css-Box-Model.pdf) | [Video](https://youtu.be/yStOgz3GJRs) |
| 004-Exercise-HHTML-And-CSS | — | [Video](https://youtu.be/_MncSiV2jEE) |
| [005-Position-And-Float](005-Position-And-Float) | [Position-Grid-Exercise.pdf](005-Position-And-Float/Resources/Position-Grid-Exercise.pdf) · [Position-Grid.pdf](005-Position-And-Float/Resources/Position-Grid.pdf) | — |
| [006-Flexbox](006-Flexbox) | [Flexbox-Exercise.pdf](006-Flexbox/Resources/Flexbox-Exercise.pdf) · [Flexbox.pdf](006-Flexbox/Resources/Flexbox.pdf) | [Video](https://youtu.be/hKcOsh24FvE) |
| 006- Exercise-CSS Box Model | — | [Video](https://youtu.be/FTEnYS_w5cQ) |
| [007-Media-Queries](007-Media-Queries) | [Media-Queries-Exercise.pdf](007-Media-Queries/Resources/Media-Queries-Exercise.pdf) · [Media-Queries.pdf](007-Media-Queries/Resources/Media-Queries.pdf) | [Video](https://youtu.be/Tu_FaUzCZKs) |
| 007-Position-And-Grid | — | [Video](https://youtu.be/M1tYnxsHqZ8) |
| 008- Exercise-Position-And-Grid | — | [Video](https://youtu.be/OOXdt4cOGzU) |
| 010- Exercise-Flexbox | — | [Video](https://youtu.be/CvlqwoNQ9go) |
| 012-Exam-Preparation | — | [Video](https://youtu.be/BUOGlCMsJLA) |
