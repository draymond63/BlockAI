#!/usr/bin/env sh


if [ -z "$1" ]; then
    COMMIT_NAME="deploy"
else
    COMMIT_NAME="$1"
fi

# build
npm run build
rm -rf build/*.py
cp -ar build/* dist

# *** MAIN
echo "Pushing Vue JS to master"
git add .
git commit -m "$COMMIT_NAME"
git push # Should push to master (just to display vue files)

# *** GH-PAGES
# navigate into the build output directory that is actually getting rendered
cd dist

echo "Pushing to gh-pages"
git add .
git commit -m "$COMMIT_NAME"
git push

cp -ar .git/ ../.git.build 2>/dev/null

# *** HEROKU
cd ../backend
git add .
git commit -m "$COMMIT_NAME"
git push -f origin HEAD:heroku

cd -

# TUTORIAL
# https://cli.vuejs.org/guide/deployment.html#github-pages