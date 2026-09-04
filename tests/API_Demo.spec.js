import { test, expect } from '@playwright/test'

test('API GET Method Demo', async ({ request }) => {
    // Get Method
    const response = await request.get("https://jsonplaceholder.typicode.com/posts");
    const body = await response.json();

    // Check Status code is 200 or not
    expect(response.status()).toBe(200);
    // Check the retrun item count is 100 or not
    expect(body.length).toBe(100);
    // Check the field and their data type
    body.forEach((item) => {
        expect(item).toHaveProperty('userId');
        expect(typeof item.userId).toBe('number');
        expect(item).toHaveProperty('id');
        expect(typeof item.id).toBe('number');
        expect(item).toHaveProperty('title');
        expect(typeof item.title).toBe('string');
        expect(item).toHaveProperty('body');
        expect(typeof item.body).toBe('string');
    })
})

test('API POST Method Demo', async ({ request }) => {
    // Create a new constant for new Data
    const newData = {
        userId: 1,
        title: "Learning Postman",
        body: "Understanding HTTP POST Method"
    }

    // POST Method with new data
    const response = await request.post("https://jsonplaceholder.typicode.com/posts", {
        data: newData,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    // Check Status code is 201 or not
    expect(response.status()).toBe(201);
    // Check the return id is 101 or not
    // Check the userId, title and body are same with new data
    const body = await response.json();
    expect(body.id).toBe(101);
    expect(body.userId).toBe(newData.userId);
    expect(body.title).toBe(newData.title);
    expect(body.body).toBe(newData.body);
})

test('API PUT Method Demo', async ({ request }) => {
    // Create a new constant to update Data
    const newData = {
        userId: 1,
        title: "Learning Postman Again",
        body: "Understanding HTTP PUT Method"
    }

    // PUT Method with new data
    const response = await request.put("https://jsonplaceholder.typicode.com/posts/1", {
        data: newData,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    // Check Status code is 200 or not
    expect(response.status()).toBe(200);
    // Check the retun id is 1 or not
    // Check the userId, title and body are same with new data
    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body.userId).toBe(newData.userId);
    expect(body.title).toBe(newData.title);
    expect(body.body).toBe(newData.body);
})

test('API PATCH Method Demo', async ({ request }) => {
    // Create a new constant to update data by partially
    const newData = {
        title: "Learning Postman (PATCH Method)",
    }

    // POST Method with new data
    const response = await request.patch("https://jsonplaceholder.typicode.com/posts/10", {
        data: newData,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    // Check Status code is 200 or not
    expect(response.status()).toBe(200);
    // Check the retun id is 1 or not
    // Check the title is same with new data's title
    const body = await response.json();
    expect(body.title).toBe(newData.title);
})

test.only('API DELETE Method Demo', async ({ request }) => {
    // DELETE Method
    const response = await request.delete("https://jsonplaceholder.typicode.com/posts/10");
    const body = await response.json();

    // Check Status code is 200 or not
    expect(response.status()).toBe(200);
})