interface ITestData {
  id: string;
  num: number;
  tag: string[];
}

function createData(): ITestData {
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
