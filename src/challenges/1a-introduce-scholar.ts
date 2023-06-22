interface Scholar {
  firstName: string;
  lastName: string;
  cohortNumber: number;
}

function introduceScholar({firstName, lastName,cohortNumber }: Scholar): string {
  //let {firstName, lastName, cohortNumber} = scholar;
  // use object destructuring, for practice!
  return `${firstName} ${lastName} is an Academy Scholar, on Cohort ${cohortNumber}.`;
}

export default introduceScholar;
