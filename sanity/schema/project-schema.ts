const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      // fields: [
      //   {
      //     name: "alt",
      //     title: "Alt",
      //     type: "string"
      //   }
      // ]
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url"
    },
    {
      name: "githublink",
      title: "Github Link",
      type: "url"
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }]
    }
  ]
}

export default project;