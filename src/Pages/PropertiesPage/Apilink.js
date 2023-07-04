const API_URL = "http://localhost:8222";

export const ApiLink = async () => {
  try {
    const response = await fetch(`${API_URL}/getAllProperty`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch properties");
  }
};

export const getPropertyById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/getAllProperty/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch property by ID");
  }
};
