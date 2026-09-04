import { test, expect } from '@playwright/test'

test('API GET Method', async ({ request }) => {
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