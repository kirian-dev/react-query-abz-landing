export function formData(
  name: string,
  email: string,
  phone: string,
  photo: File,
  positionId: string
) {
  const formData = new FormData();
  formData.append('position_id', positionId);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  const reader = new FileReader();
  reader.readAsDataURL(photo);
  reader.onload = () => {
    formData.append('photo', reader.result as string);
  };
  return formData;
}
