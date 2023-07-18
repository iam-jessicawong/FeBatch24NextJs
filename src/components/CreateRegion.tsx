import { CreateRegionReq } from "@/redux-saga/action/regionAction";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";

export default function CreateRegion({ setCreate, setRefresh }: any) {
  const dispatch = useDispatch();
  const [previewImg, setPreviewImg] = useState<string>();
  const [upload, setUpload] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      file: "",
    },
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("name", values.name);
      payload.append("file", values.file);
      dispatch(CreateRegionReq(payload));
      setCreate(false);
      window.alert("Data successfully created");
      setRefresh(true);
    },
  });

  const uploadConfig = (name: string) => (event: any) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = () => {
      formik.setFieldValue("file", file);
      setPreviewImg(reader.result as string);
    };
    reader.readAsDataURL(file);
    setUpload(true);
  };
  const onClear = (event: any) => {
    event.preventDefault();
    setPreviewImg("");
    setUpload(false);
  };
  return (
    <>
      <h2 className="text-xl font-semibold">Create new region</h2>
      <div className="my-3">
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
        <div className="flex gap-3 mb-3">
          <label>Photo</label>
          <input
            id="file"
            name="file"
            type="file"
            accept="image/*"
            onChange={uploadConfig("file")}
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          />
        </div>
        <div className="mb-3">
          {upload && (
            <>
              <Image
                src={previewImg || ""}
                alt="img"
                width={500}
                height={500}
              />
              <button
                className="border border-gray-600 rounded px-3 py-1 mt-1"
                onClick={onClear}
              >
                Remove
              </button>
            </>
          )}
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
            onClick={() => setCreate(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
