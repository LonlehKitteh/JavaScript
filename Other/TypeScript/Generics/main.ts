function getFirstElement<T>(array: T[]) {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);

const strings = ["aca", "baa", "cba"];
const fisrtString = getFirstElement(strings);

const map = new Map<string, number>([["bye", 4]]);

map.set("hi", 3);

type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

type UserResponse = ApiResponse<{
  name: string;
  age: number;
}>;

type BlogResponse = ApiResponse<{
  title: string;
}>;

const response: UserResponse = {
  data: {
    name: "Chris",
    age: 22,
  },
  isError: false,
};

const responseBlog: BlogResponse = {
  data: {
    title: "Hi",
  },
  isError: false,
};

type TypeWithDefaultValue<Data = { status: number }> = {
  data: Data;
  isError: boolean;
};

const res: TypeWithDefaultValue = {
  data: {
    status: 200,
  },
  isError: false,
};

type TypeWithDefaultValue2<Data extends object> = {
  data: Data;
  isError: boolean;
};

const res2: TypeWithDefaultValue2<{ name: string }> = {
  data: {
    name: "Hi",
  },
  isError: false,
};
