import axios from "axios";

export const fetchExternalData = async (req, res) => {
  try {
    //our external API endpoint
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    const response = await axios.get(apiUrl);

    res.status(200).json({
      status: "success",
      message: "Data fetched successfully",
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
};
