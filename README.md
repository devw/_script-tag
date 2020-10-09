# Account Popup

## Development

1 Clone the repository
```
git clone git@github.com:devw/script-tag.git 
cd script-tag/
```

2. Edit/change the variables set in `config.js` and `.env` file.

3. Install the dependencies
```
yarn install
```

4. Run the tests
```
yarn test
```



## Production

1. create a minified bundle.js
```
yarn build // to create the minified bundle.js
```

2. Deploy the bundle.js in your github-pages 

3. add the scriptTag to your store
```
yarn start // to add the scriptTag to your store 
```
