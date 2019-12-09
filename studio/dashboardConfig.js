export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5deea629ed21390197d14102',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-f1swz73y',
                  apiId: 'c617e35b-9649-4375-ab29-d02558bf8476'
                },
                {
                  buildHookId: '5deea62aeebf9f017ec58b4e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-d4aems5s',
                  apiId: '1c6289fe-e197-4bc1-8cd8-fcd56a152c72'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bjsorrentino/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-d4aems5s.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
