const mockList = [
  { id: 1, name: "tom", age: 18, address: "Beijing", phone: 123456789 },
  { id: 2, name: "jerry", age: 18, address: "Beijing", phone: 123456789  },
  { id: 3, name: "mike", age: 18, address: "Beijing", phone: 123456789  },
  { id: 4, name: "jack", age: 18, address: "Beijing", phone: 123456789  },
  { id: 5, name: "larry", age: 18, address: "Beijing", phone: 123456789 },
  { id: 6, name: "white", age: 18, address: "Beijing", phone: 123456789 },
  { id: 7, name: "peter", age: 18, address: "Beijing", phone: 123456789 },
  { id: 8, name: "james", age: 18, address: "Beijing", phone: 123456789 },
  { id: 9, name: "wuhudsm", age: 18, address: "Beijing", phone: 123456789 },
];

module.exports = [
  {
    url: "/api/getUser",
    type: "get",
    response: () => {
      return {
        code: 20000,
        data: { id: 1, name: "tom", age: 18, address: "Beijing" },
      };
    },
  },
  {
    url: "/api/getUsers",
    type: "get",
    response: (config) => {
      // 从查询参数中获取分页、过滤关键词等参数
      const { page = 1, limit = 5 } = config.query;

      // 分页
      const data = mockList.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      );

      return {
        code: 20000,
        data,
        total: mockList.length,
      };
    },
  },
  {
    url: "/api/deleteUser",
    type: "get",
    response: () => {
      return {
        code: 20000,
      };
    },
  },
];
