# arkitect - Static HTML Site

A clean, minimalist architecture and design blog built with static HTML, CSS, and JavaScript.

## Structure

```
arkitect-site/
├── index.html              # Homepage (latest posts)
├── category.html           # Category listing template
├── post.html               # Single post template (reference)
├── about.html              # About page
├── assets/
│   ├── css/
│   │   └── main.css        # All styles (Arkitect design system)
│   ├── js/
│   │   └── main.js         # Menu and interactions
│   └── img/
│       └── hero.jpg        # Hero images
└── posts/
    ├── the-llm-revolution.html
    ├── the-ai-powered-economy.html
    ├── startup-funding-in-the-age-of-ai.html
    ├── the-future-of-work.html
    └── ...                 # More posts
```

## Design System

The site uses the Arkitect design system with:
- **Fonts**: Playfair Display (headings), Inter (body)
- **Colors**: White paper background, dark ink text
- **Layout**: Centered white shell with rounded corners and shadow
- **Navigation**: Black pill menu with white text

## Usage

Simply open `index.html` in a web browser or serve with any static file server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# Or any other static server
```

## Adding New Posts

1. Copy `post.html` as a template
2. Replace the placeholder variables:
   - `{{TITLE}}` - Post title
   - `{{DESCRIPTION}}` - Post description
   - `{{CATEGORY}}` - Post category
   - `{{DATE}}` - Publication date
   - `{{AUTHOR}}` - Author name
   - `{{READ_TIME}}` - Reading time in minutes
   - `{{HERO_IMAGE}}` - Path to hero image
   - `{{CONTENT}}` - HTML content of the post
3. Save as `posts/your-post-slug.html`
4. Add a link to the post in `index.html` or `category.html`

## Styling

All styles are in `assets/css/main.css`. The design follows the Arkitect aesthetic:
- Minimalist and clean
- Generous whitespace
- Rounded corners (3xl on shell, 2xl on images)
- Subtle shadows
- Left-aligned body content
- Centered titles and metadata

