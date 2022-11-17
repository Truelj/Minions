export default function MinionDescription({name, title, salary, weaknesses}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Title: {title}</p>
      <p>Salary: {salary}</p>
      <p>Weaknesses: {weaknesses}</p>
    </div>
  );
  }
