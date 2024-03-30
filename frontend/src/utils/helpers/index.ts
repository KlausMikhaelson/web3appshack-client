export const fileToBase64 = (file: any, callback: any) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => callback(reader.result);
  reader.onerror = (error) => {
    console.error("Error converting file to base64!", error);
  };
};


