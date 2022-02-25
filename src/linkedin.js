// Given
const endorsements = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" }
];
const skills = [];
const populateSkills = (endos) => {

  const hash = {}

  for (let element of endos) {
    if (!hash.hasOwnProperty(element.skill)) {
      hash[element.skill] = {
        skill: element.skill,
        users: [element.user],
        count: 1
      };
      skills.push(hash[[element.skill]]);
    } else {
      hash[element.skill].users.push[element.user]
      hash[element.skill].conunt += 1
    }
  }


  return skills.sort((a, b) => b.count - a.count)
}

populateSkills(endorsements);
// Result
console.log(skills); // should work!
// [
//   { skill: ‘javascript’, users: [‘Chad’, ‘Bill’, ‘Sue’], count: 3 },
//   { skill: ‘css’, users: [‘Bill’, ‘Sue’], count: 2 },
//   { skill: ‘html’, users: [‘Sue’], count: 1 },
// ];