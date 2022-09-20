export default{
    name: 'education',
    title: 'Education',
    type: 'document',
    fields : [
        {
            name: 'titre',
            title:'Education Catégorie',
            description: 'school , certificat, badget',
            type : 'string',
        },
        {
            title: 'Education Item',
            name: 'educationitem',
            type: 'array',
            of: [
                {
                    title: 'Education',
                    name: 'categorie',
                    type: 'object',
                    fields: [
                      {name: 'nom', type: 'string', title: 'Etablissemt / campany'},
                      {name: 'image', type: 'image', title: 'Logo de catégorie'},
                      {name: 'description', type: 'text', title: 'Description'}
                    ]
                  }
            ]
        }
        
    ]
}