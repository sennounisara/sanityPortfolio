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
              name:'information',
              title:'Information',
              type:'object',
                fields:[
                  {name:'title',title:'Title ',type:'string'},
                  {name:'value',title:'Value',type:'string'},
              ]
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