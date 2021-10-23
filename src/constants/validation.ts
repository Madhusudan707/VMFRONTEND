export default {
  emailRegex:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  refcodeRegex: /^[a-z|A-Z|0-9]{1,15}$/,
  nameRequiredHelpText: 'name is required',
  emailRequiredHelpText: 'email is required',
  emailInvalidHelpText: 'provide a valid email',
  genderRequiredHelpText: 'gender is required',
  refcodeInvalidHelpText: 'provide a valid code',
};
