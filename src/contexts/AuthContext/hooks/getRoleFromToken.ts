export const getRoleFromToken = () => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return null;
  }

  try {
    const base64Payload = token.split('.')[1];
    const decodedPayload = atob(base64Payload);
    const roles = JSON.parse(decodedPayload).roles;

    return roles.length > 0 ? roles : null;
  } catch (error) {
    console.error('Ошибка при декодировании токена:', error);
    return null;
  }
};
