let tableFields = [
  { label: "First Name", name: "firstName" },
  { label: "Last Name", name: "lastName" },
  { label: "Middle Name", name: "middleName" },
  { label: "Primary Ref", name: "ref" },
  { label: "Email", name: "email" },
  { label: "Date of Birth", name: "dob" },
  { label: "Adviser", name: "adviser" },
  { label: "Credited Group", name: "creditedGroup" },
];

let inputFields = [
  [
    {
      groupName: "names",
      fields: [
        {
          name: "firstName",
          label: "First Name",
        },
        {
          name: "lastNameName",
          label: "Last Name",
        },
        {
          name: "middleName",
          label: "Middle Name",
        },
      ],
    },
    {
      groupName: "corporate",
      fields: [
        {
          name: "corporateName",
          label: "Corporate Name",
        },
      ],
    },
  ],
  [
    {
      groupName: "reference",
      fields: [
        {
          name: "primeRef",
          label: "Primary Ref",
        },
      ],
    },
    {
      groupName: "contact",
      fields: [
        {
          name: "email",
          label: "Email",
        },
        {
          name: "phoneNo",
          label: "Phone Number",
        },
        {
          name: "postcode",
          label: "Postcode",
        },
      ],
    },
  ],
  [
    {
      groupName: "servicing",
      fields: [
        {
          name: "adviser",
          label: "Adviser",
        },
        {
          name: "serviceStatus",
          label: "Service Status",
        },
      ],
    },
    {
      groupName: "servicing2",
      fields: [
        {
          name: "organisationalUnit",
          label: "Organisational Unit",
        },
        {
          name: "creditedGroup",
          label: "Credited Group",
        },
      ],
    },
  ],
];

export { tableFields, inputFields };
