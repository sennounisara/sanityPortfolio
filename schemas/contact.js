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
            type: 'text',
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
        },
        {
            name:'BlockContact',
            title:'Block Contact',
            type:'object',
            fields:[
                {name:'name',title:'Name ',type:'string'},
                {name:'namePlaceHolder',title:'name PlaceHolder',type:'string'},
                {name:'email',title:'Email',type:'string'},
                {name:'emailPlaceHolder',title:'Email Placeholder',type:'string'},
                {name:'subject',title:'Subject ',type:'string'},
                {name:'subjectPlaceHolder',title:'subject PlaceHolder',type:'string'},
                {name:'message',title:'Message ',type:'string'},
                {name:'messagePlaceHolder',title:'message PlaceHolder',type:'string'},
                {name:'sendbutton',title:'Send Button ',type:'string'}
            ]

        }
    ]
}