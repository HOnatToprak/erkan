import { config, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: "HOnatToprak",
      name: "erkan",
    }
  },
  collections: {
  },
  singletons: {
    home: singleton({
      path: 'src/content/home/',
      label: 'Home Page',
      schema: {
        title: fields.text({
          label: 'Title',
          description: 'The main title of the home page',
        }),
        subtitle: fields.text({
          label: 'Subtitle',
          description: 'A subtitle for the home page',
        }),
        summary: fields.text({
          label: 'Summary',
          description: 'A brief summary for the home page',
          multiline: true,
        }),
        heroImage: fields.image({
          label: 'Hero Image',
          description: 'The main image displayed on the home page',
          validation: {
            isRequired: true,
          }
        }),
        socialLinks: fields.blocks({
          instagram: {
            label: "Instagram", schema: fields.text({
              label: 'Instagram Profile',
              description: 'Instagram profile id',
            })
          },
          email: {
            label: "Email", schema: fields.text({
              label: 'Email Address',
              description: 'Contact email address',
            })
          },
        }, { label: 'Social Links' })
      },
    })
  }
});
