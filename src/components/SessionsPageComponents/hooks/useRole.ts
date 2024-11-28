export const useToken = () => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    console.error('Токен не найден в localStorage.');
    return null;
  }

  const base64Payload = token.split('.')[1];
  const decodedPayload = atob(base64Payload);
  const roles = JSON.parse(decodedPayload).roles;
  return (
    roles.find((role: string) => role === 'STUDENT' || role === 'TEACHER') ||
    null
  );
};
