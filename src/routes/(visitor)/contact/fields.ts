type Fields = {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  optional?: boolean;
};
export const [name1, name2, ...fields]: Fields[] = [
  { id: 'firstname', label: 'First Name', placeholder: 'Write your first name (ex: John)' },
  {
    id: 'lastname',
    label: 'Last Name',
    placeholder: 'Write your last name (ex: Doe)',
    optional: true
  },
  { id: 'company', label: 'Company', placeholder: 'The place where you work (ex: ACME Corp)' },
  {
    id: 'email',
    label: 'E-mail',
    placeholder: 'Your valid e-mail address (ex: mail@domain.com)'
  },
  { id: 'phone', label: 'Phone', placeholder: 'Your active phone number (ex: +6281234567890)' },
  {
    id: 'message',
    label: 'Message',
    placeholder: 'Tell anything about your brilliant ideas, let me help to make them come true',
    type: 'textarea'
  }
];