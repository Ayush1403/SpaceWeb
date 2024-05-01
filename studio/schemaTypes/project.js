export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "description",
            type: "string",
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            optioms: {
                list : [
                    {value: "android", title: "Android"},
                    {value: "web", title: "Web"},
                    {value: "spline", title: "Spline"},
                ],
            },
        },
        {
            name: "link",
            type: "url"
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string"
                }
            ]
        }
        

    ]
}