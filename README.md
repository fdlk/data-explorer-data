# data-explorer-data

This repo takes a look at Vue state management where part of the state is stored in the URL so it can be shared as a link.

![Event flow](https://yuml.me/949cbf7e.png)

The vue router is source of truth for the state stored in the URL:
* menu selection
* entity type ID
* page number
* page size
* sort order

The vuex store contains application state:
* error message toasts

And functions as server cache plus loading state for
* metadata
* data

vue-router-sync is used to add a route module to the vuex store.
Typed vuex getters interpret the route parameters and provide sensible defaults

The data explorer view watches the getters to trigger fetching of data and metadata.
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
