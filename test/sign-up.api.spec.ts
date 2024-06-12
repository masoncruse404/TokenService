import * as request from 'supertest';
 describe('sign-up', () => {
   it('should have the response', async () => {
    const baseURL = 'http://localhost:3000/';
    const apiRequest = request(baseURL);
    const data = await apiRequest.post("/authentication/sign-up").send({"email" : "test1@email.com", "password" : "testtest"});
    expect(data.status).toBe(200);
    expect(data.body.data).toHaveProperty("accessToken")
   });
 });