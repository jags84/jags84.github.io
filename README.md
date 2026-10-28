# jags84.com

Personal website of Juan Gonzalez, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

Content lives in `src/data/`, sections in `src/components/`.

## Deployment

Every push to `master` builds the site and publishes it through GitHub Actions (`.github/workflows/deploy.yml`).
