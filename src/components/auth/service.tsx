async function loginUser(data: {
  username: string;
  password: string;
}): Promise<Response> {
  const response = await fetch(`http://localhost:8080/api/v1/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.json();
}

export { loginUser };

export interface Response {
  type: string;
  accessToken: string;
  refreshToken: string;
}
