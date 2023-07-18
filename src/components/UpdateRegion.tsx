import { UpdateRegionReq } from "@/redux-saga/action/regionAction";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

export default function UpdateRegion({ update, setUpdate, setRefresh }: any) {
  const dispatch = useDispatch();
  const { region } = update;

  const formik = useFormik({
    initialValues: {
      name: region.regionName || "",
    },
    onSubmit: async (values) => {
      const payload = {
        name: values.name,
      };

      console.log(payload);

      dispatch(UpdateRegionReq({ id: region.regionId, payload }));
      setUpdate({ open: false });
      window.alert("Data successfully updated");
      setRefresh(true);
    },
  });

  return (
    <>
      <h2 className="text-xl font-semibold">Update region</h2>
      <form className="my-3">
        <div className="flex gap-3 mb-3">
          <label htmlFor="name">Region name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="text-black p-1 rounded"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex gap-1">
          <button
            className="bg-green-600 px-3 py-1 rounded"
            type="submit"
            onClick={() => formik.handleSubmit()}
          >
            Submit
          </button>
          <button
            className="bg-gray-600 px-3 py-1 rounded"
            type="button"
            onClick={() => setUpdate({ open: false })}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
