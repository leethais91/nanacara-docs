// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/config/*.scss')
      ],
    })
}

const collections = [
  {
    query: `{
      allDoc {
        edges {
          node {
            id
            title
            excerpt
            content
            date
            slug
            headings {
              value
              anchor
            }
          }
        }
      }
    }`,
    transformer: ({ data }) => data.allDoc.edges.map(({ node }) => node),
    indexName: process.env.ALGOLIA_INDEX_NAME || 'posts', // Algolia index name
    itemFormatter: (item) => {
      return {
        objectID: item.id,
        title: item.title,
        slug: item.slug,
        date: String(item.date),
        headings: item.headings.map(heading => heading.value).join(' - '),
      }
    }, // optional
    matchFields: ['headings', 'modified'], // Array<String> required with PartialUpdates
  },
];

module.exports = {
  siteName: 'NanaDocs',
  siteUrl: 'https://nanacara-docs.netlify.app',
  templates: {
    Doc: '/:slug',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'docs/**/*.md',
        typeName: 'Doc',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'G-H8RVMP2CG6')
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    },
    {
      use: `gridsome-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        collections,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, // default: false
      },
    },
  ],
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}

