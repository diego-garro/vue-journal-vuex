export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(), // 12345875966325
      date: new Date().toDateString(), // sat, 23, julio
      text:
        "Ipsum veniam ipsum minim laborum fugiat officia laborum quis sunt id qui sunt Lorem ipsum.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000, // 12345875966325
      date: new Date().toDateString(), // sat, 23, julio
      text:
        "Veniam proident reprehenderit amet anim incididunt ullamco esse ipsum cupidatat commodo nisi ipsum officia aliquip.",
      picture: null,
    },
    {
      id: new Date().getTime() + 3000, // 12345875966325
      date: new Date().toDateString(), // sat, 23, julio
      text:
        "Eu et irure do consectetur ut deserunt fugiat aliqua ea ex esse incididunt nisi.",
      picture: null,
    },
  ],
})
