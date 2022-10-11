export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name : 'title',
        title: 'Title',
        type : 'string',
      },
      {
        name : 'technologie',
        title: 'Technologie',
        type : 'string',
      },
      {
        name : 'description',
        title: 'Description',
        type : 'text',
      },
      {
        name :'image',
        title:"Image",
        type :'array',
        of:[
          {
            title: "Room Image",
            name : "roomImage",
            type : "image",
          }
        ]
      },
    ],
}