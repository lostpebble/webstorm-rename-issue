interface IRenameMyIdProperty {
  id: string;
  num: number;
  tag: string[];
}

function createData(): IRenameMyIdProperty {
  return {
    id: "123",
    num: 123,
    tag: ["what"],
  }
}

function useData() {
  const data = createData();
  console.log(data);
  console.log(`ID is : ${data.id}`);
}
