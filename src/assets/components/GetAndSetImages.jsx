import axios from "axios";
import toast from "react-hot-toast";

export default async function GetAndSetImages(
  url,
  setLoading,
  setImages,
  more = false
) {
  setLoading(true);
  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.results.lenght === 0) {
      toast.error("Nothing to find with this value, please try something else");
    } else {
      more
        ? setImages((prevImages) => [...prevImages, ...data.results])
        : setImages([...data.results]);
    }
  } catch (eror) {
    toast.error(eror.message);
  } finally {
    setLoading(false);
  }
}
