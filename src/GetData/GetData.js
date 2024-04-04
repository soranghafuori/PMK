

const GetData = async () => {
    try {
      const response = await fetch('http://193.57.136.149:3001/admin/newbook');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  export default GetData;
  