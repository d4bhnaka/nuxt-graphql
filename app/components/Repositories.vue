<template>
  <div id="repos">
    <ul>
      <li v-for="repo in items" :key="repo.id">
        <a :href="repo.url">{{ repo.name }}</a>
        <span class="star"> ⭐️{{ repo.stargazers.totalCount }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      items: {}
    }
  },
  apollo: {
    items: {
      query: gql`
        {
          organization(login: "apollographql") {
            repositories(first: 10) {
              nodes {
                id
                name
                url
                viewerHasStarred
                stargazers {
                  totalCount
                }
              }
            }
          }
        }
      `,
      update: ({ organization }) => organization.repositories.nodes
    }
  }
}
</script>

<style lang="scss" scoped>
#repos {
  ul {
    list-style: none;
    margin: 3rem auto;
    padding: 0;
    li {
      margin-bottom: 1rem;
      a {
        color: rgb(3, 51, 15);
      }
    }
  }
}
</style>
