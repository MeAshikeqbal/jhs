import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      title: "Poster",
      name: "poster",
      type: "document",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          placeholder: "Title",
        },
        {
          title: "Description",
          name: "description",
          type: "text",
          placeholder: "Information about the poster",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
        },
        {
          title: "tags",
          name: "tags",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      title: "Teachers",
      name: "teachers",
      type: "document",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
          placeholder: "Name",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
        },
        {
          title: "Qalification",
          name: "qualification",
          type: "string",
        },
        {
          title: "Date of Appointment",
          name: "date",
          type: "date",
        },
        {
          title: "Designation",
          name: "designation",
          type: "string",
          options: {
            list: [
              { title: "Headmaster", value: "Headmaster" },
              { title: "Assistant  Headmaster", value: "Assistant Headmaster" },
              { title: "Assistant Teacher", value: "Assistant Teacher" },
              { title: "Para Teacher", value: "Para Teacher" },
            ],
          },
          initialValue: "Assistant Teacher",
        },
      ],
    },
    {
      title: "Gallery",
      name: "gallery",
      type: "document",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          placeholder: "Title",
        },
        {
          title: "Description",
          name: "description",
          type: "text",
          placeholder: "Information about the poster",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
        },
        {
          title: "Date",
          name: "date",
          type: "date",
        },
      ],
    },
    {
      title: "Notice",
      name: "notice",
      type: "document",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          placeholder: "Title",
        },
        {
          title: "Description",
          name: "description",
          type: "text",
          placeholder: "Information about the poster",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
        },
        {
          title: "tags",
          name: "tags",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      title: "Events",
      name: "events",
      type: "document",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          placeholder: "Title",
        },
        {
          title: "Description",
          name: "description",
          type: "text",
          placeholder: "Information about the poster",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
        },
        {
          title: "tags",
          name: "tags",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      title: "Achievements",
      name: "achievements",
      type: "document",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          placeholder: "Title",
        },
        {
          title: "Description",
          name: "description",
          type: "text",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
        },
        {
          title: "tags",
          name: "tags",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      title: "HM Dask",
      name: "hmdesk",
      type: "document",
      fields: [
        {
          title: "Image",
          name: "image",
          type: "image",
        },
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Designation",
          name: "designation",
          type: "string",
        },
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Content",
          name: "content",
          type: "array",
          of: [
            {
              type: "block",
            },
          ],
        },
      ],
    },
    {
      title: "Alumni",
      name: "alumni",
      type: "document",
      fields: [
        {
          title: "Image",
          name: "image",
          type: "image",
        },
        {
          title: "Year of Passing",
          name: "batch",
          type: "date",
          options: {
            dateFormat: "YYYY",
          },
        },
        {
          title: "Content",
          name: "content",
          type: "text",
          placeholder:"Shrort description about the alumni"
        },
      ],
    },
  ],
};
