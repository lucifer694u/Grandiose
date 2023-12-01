export default  {
    title: 'Categories',
    name: 'category',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
     
      },
  
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
  
      {
        name: 'prod',
        title: 'Prod',
        type: 'array',
        of: [{type: 'reference', to: {type: 'product'}}],
      },
    ],
    
  }
  
