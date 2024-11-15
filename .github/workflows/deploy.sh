name: Deploy React App to GitHub Pages using Docker and Jekyll

on:
  push:
    branches:
      - main  # Trigger the action on push to the main branch

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js 18
        uses: actions/setup-node@v2
        with:
          node-version: '18'  # Set to Node.js 18

      - name: Install dependencies
        run: npm install

      - name: Build the React app
        run: npm run build  # This will generate the build files in /build

      - name: Build and Deploy to GitHub Pages with Jekyll
        run: |
          docker run --rm -v ${{ github.workspace }}:/usr/src/app -w /usr/src/app jekyll/jekyll:latest bash -c "jekyll build --destination /usr/src/app/_site && cp -r /usr/src/app/build/* /usr/src/app/_site"
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site  # Set the directory where the build is located
