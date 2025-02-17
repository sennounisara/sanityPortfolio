export default{
    name: 'education',
    title: 'Education',
    type: 'document',
    fields : [
        {
            name: 'titreCategorie',
            title:'Education Catégorie',
            description: 'school , certificat, badget',
            type : 'string',
        },
        {
            name : 'logoCategorie', 
            type : 'image', 
            title: 'Logo de catégorie'
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
                      {
                        name: 'etablissemnt', type: 'string', title: 'Etablissemt / campany'
                      },
                      {
                        name: 'logo', type: 'image', title: 'Logo de catégorie'
                      },
                      {
                        name: 'title', type: 'string', title: 'Title'
                      },
                      {
                        name: 'description', type: 'text', title: 'Description'
                      }
                    ]
                  }
            ]
        }
        
    ]
}