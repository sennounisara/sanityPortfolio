export default {
    name:'about',
    title:'About',
    type:'document',
    fields:[
        {
            name: 'titleBlock',
            title: 'Block Title',
            type: 'string',
        },
        {
            name : 'listeDetail',
            title: 'Detail',
            type : 'array',
            of : [
              {
                name: 'title',
                title: 'Title',
                type: 'text',
              },
              {
                name: 'content',
                title: 'Content',
                type: 'text',
              }
            ]
        },
        {
            name: 'button',
            title: 'Button resume',
            type: 'string',
        }
    ]
}