<template>
  <ClientOnly>
    <ais-instant-search
      :search-client="searchClient"
      index-name="posts"
    >
      <ais-configure
        :hits-per-page.camel="100"
        :distinct="true"
      />
      <ais-search-box placeholder="Search" :show-loading-indicator="true" ref="search"></ais-search-box>
      <ais-hits>
        <div class="results" slot-scope="{ items }" @click="toggle(false)">
          <template v-for="item in items">
            <g-link :key="item.objectId" :to="item.slug" class="card">
              <g-image :src="item.image" width="200"></g-image>
              <p>{{item.title}}</p>
            </g-link>
          </template>
          <ais-pagination />
        </div>
      </ais-hits>
      <ais-powered-by />
    </ais-instant-search>
  </ClientOnly>
</template>

<script>
import algoliasearch from 'algoliasearch/lite'
import 'instantsearch.css/themes/algolia-min.css'

const algoliaClient = algoliasearch(
  'ZQK8DTLNSM',
  '103ce1852e0b96e56d64cef2b5af7068'
);

const searchClient = {
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          processingTimeMS: 0,
        })),
      });    
    }
    return algoliaClient.search(requests);
  }
}

function onCatch(err) {
  console.warn(err)
}

export default {
  data: () => {
    return {
      searchClient,
    };
  },
  components: {
    AisInstantSearch: () =>
      import ('vue-instantsearch')
      .then(a => a.AisInstantSearch)
      .catch(onCatch),
    AisConfigure: () =>
      import ('vue-instantsearch')
      .then(a => a.AisConfigure)
      .catch(onCatch),
    AisSearchBox: () =>
      import ('vue-instantsearch')
      .then(a => a.AisSearchBox)
      .catch(onCatch),
    AisHits: () =>
      import ('vue-instantsearch')
      .then(a => a.AisHits)
      .catch(onCatch),
    AisPagination: () =>
      import ('vue-instantsearch')
      .then(a => a.AisPagination)
      .catch(onCatch),
    AisPoweredBy: () =>
      import ('vue-instantsearch')
      .then(a => a.AisPoweredBy)
      .catch(onCatch)
  }
}
</script>

<style>
.ais-SearchBox-input {
  background-color: '#f7f9f8';
  width: 50px;
}

.ais-SearchBox-input:focus {
    outline: none !important;
    border:2px solid #00a672;
    box-shadow: 0 0 2px #a0e6d0;
    width: 200px;
}

.results {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
}

.card {
  min-width: 200px;
  max-width: 300px;
  flex: 1;
  text-align: center;
  padding: 10px;
}

.card img {
  width: 100%;
}
</style>