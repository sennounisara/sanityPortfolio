export default {
    name:'contact',
    title:'Contact',
    type:'document',
    fields:[
        {
            name: 'titleBlock',
            title: 'Block Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Block Description',
            type: 'string',
        },
        {
            name : 'objectContact',
            title: 'Object Contact',
            type : 'array',
            of : [
              {
                name: 'blockTitle',
                title: 'Block Title',
                type: 'blockContent',
              }
            ]
        }
    ]
}