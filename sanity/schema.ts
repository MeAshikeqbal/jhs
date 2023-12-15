import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      title: 'Poster',
      name: 'poster',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
          placeholder: 'Title',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'text',
          placeholder: 'Information about the poster',
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          title: 'tags',
          name: 'tags',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],

    },
    {
      title: 'Teachers',
      name: 'teachers',
      type: 'document',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
          placeholder: 'Name',
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          title: 'Qalification',
          name: 'qualification',
          type: 'string',
        },
        {
          title:'Date of Appointment',
          name:'date',
          type:'date',
        },
        {
          title:'Title',
          name:'title',
          type:'string',
          options:{
            list:[
              {title:'Headmaster',value:'Headmaster'},
              {title:'Assistant  Headmaster',value:'Assistant Headmaster'},
              {title:'Assistant Teacher',value:'Assistant Teacher'},
              {title:'Para Teacher',value:'Para Teacher'},
            ]
          },
          initialValue:'Assistant Teacher',
        }
      ],
    }
  ],
}
