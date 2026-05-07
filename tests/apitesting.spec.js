import { test, expect } from "@playwright/test";
import { request } from "node:http";
test("GET Request", async ({ request }) => {
  // 'request' is the fixture used to support api testing
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users",
  );
  //request.get() method is used to send a GET api request
  expect(response.ok()).toBeTruthy();
  //response.ok() will give the result and toBeTruthy comapre the result
  const body = await response.json();
  // json() method convert the api response into json format.
  console.log(body);
  expect(body.length).toBeGreaterThan(0); // verify that response is not empty
});
test("POST Request", async ({ request }) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/users",
    {
      data: {
        name: "Varna",
        email: "varnatest@gmail.com",
      },
    },
  );
  expect(response.status()).toBe(201);
  const responsebody = await response.json();
  console.log(responsebody);
  expect(responsebody.name).toBe("Varna");
  expect(responsebody.email).toBe("varnatest@gmail.com");
});
test("PATCH request", async ({ request }) => {
  const response = await request.patch(
    "https://jsonplaceholder.typicode.com/users/11",
    {
      data: {
        name: "Varna PK",
      },
    },
  );
  expect(response.status()).toBe(200);
  const responsebody = await response.json();
  console.log(responsebody);
});
test("PUT Request", async ({ request }) => {
  const response = await request.put("https://jsonplaceholder.typicode.com/users/10",
    {
      data: {
         "id": 10,
        name: "Clementina DuBuque Test",
        username: "Moriah.Stanton Test",
        email: "TestRey.Padberg@karina.biz",
        address: {
          street: "Kattie Turnpike Test",
          suite: "Suite 198 Test",
          city: "Lebsackbury Test",
          zipcode: "31428-2261111",
          geo: {
            lat: "-38.238666",
            lng: "57.2232222",
          },
        },
        "phone":"024-648-3804444",
    "website": "testambrose.net",
  "company": {
    "name": "Hoeger LLC test",
    "catchPhrase": "Centralized empowering task-force test",
    "bs": "target end-to-end models test"
  }
      },
    },
  );
  expect(response.status()).toBe(200)
});
test.only('Delete Request',async({request})=>{
    const response= await request.delete("https://jsonplaceholder.typicode.com/users/10",{

    })
    expect(response.status()).toBe(200)
})
