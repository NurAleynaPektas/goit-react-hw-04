import axios from "axios";
import toast from "react-hot-toast";

export default async function getAndSetImages(
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
      toast.eror("Nothing to find with this value, please try something elseé");
    } else {
      more
        ? setImages((prevImages) => [...prevImages, ...data.results])
        : setImages([...data.results]);
    }
  } catch (eror) {
    toast.eror(eror.message);
  } finally {
    setLoading(false);
  }
}
