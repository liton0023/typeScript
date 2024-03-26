type NoobFDeveloper = {
  name: string;
};

type juniorDevelpoer = NoobFDeveloper & {
  expertise: string;
  experience: number;
};

const newDeveloper: NoobFDeveloper | juniorDevelpoer = {
  name: "Moznu Mia",
  expertise: "javaScript",
  experience: 1,
};
