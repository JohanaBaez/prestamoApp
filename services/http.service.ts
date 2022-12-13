const baseUrl = 'http://localhost:3000';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxR000UE1EOTBFTjRHRFRKR0NCNzY4VEQ2IiwiaWF0IjoxNjcwOTAwMjM4LCJleHAiOjIyNzA5MDAyMzh9.mDYSvDjDn4jWMPBSd0icbRAzxmnn16y0oibK5xP0d1c";

export class HttpClient {
    
    async get<T>(endPoint = "prestamos") {
        const response = await fetch(`${baseUrl}/${endPoint}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data: T = await response.json();

        return data;
    }
}