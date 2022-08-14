import { getProducts } from "../redux/admin/productSlice";
import { userRequest } from "../utils/requestMethod";

/**
 * api get all product db
 * @returns response json
 */
export const get_all_order = async () => {
  try {
    const resp = await userRequest.get("orders/");
    return resp.data;
  } catch (err) {
    return err.message;
  }
};
