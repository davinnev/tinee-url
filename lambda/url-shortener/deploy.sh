zip -r src.zip node_modules index.mjs
#zip -r src.zip index.mjs
aws lambda update-function-code --function-name url-shortener --zip-file fileb://src.zip
rm src.zip