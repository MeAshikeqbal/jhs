import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
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
          placeholder: "Information about notice",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
          options:{
            hotspot: true,
          },
        },
        {
          title: "Date",
          name: "date",
          type: "date",
          options: {
            dateFormat: "DD-MM-YYYY",
            calendarTodayLabel: "Today",
          },
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
          title: "Venue",
          name: "venue",
          type: "string",
        },
        {
          title: "Description",
          name: "description",
          type: "text",
          placeholder: "Information about the event",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
          options:{
            hotspot: true,
          },
        },
        {
          title: "Date of Event",
          name: "date",
          type: "date",
          options: {
            dateFormat: "DD-MM-YYYY",
            calendarTodayLabel: "Today",
          },
        },
      ],
    },
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
          title: "Image",
          name: "image",
          type: "image",
          options:{
            hotspot: true,
          },
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
          options:{
            hotspot: true,
          },
        },
        {
          title: "Qalification",
          name: "qualification",
          type: "string",
        },
        {
          title: "Date of joining",
          name: "date",
          type: "date",
          options: {
            dateFormat: "DD-MM-YYYY",
            calendarTodayLabel: "Today",
          },
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
          options:{
            hotspot: true,
          },
        },
        {
          title: "Date",
          name: "date",
          type: "date",
          options: {
            dateFormat: "DD-MM-YYYY",
            calendarTodayLabel: "Today",
          },
        },
      ],
    },
    {
      title: "HM Dask",
      name: "hmdesk",
      type: "document",
      fields: [
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
          options:{
            hotspot: true,
          },
        },
        {
          title: "Name",
          name: "name",
          type: "string",
          validation: (Rule) => Rule.required().min(3).max(50),
        },
        {
          title: "Year of Passing",
          name: "batch",
          type: "number",
          validation: (Rule) => Rule.required().min(1900).max(2099),
          placeholder: "2021",
        },
      ],
    },
    {
      title: "About Us",
      name: "aboutus",
      type: "document",
      fields: [
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

  ],
};
