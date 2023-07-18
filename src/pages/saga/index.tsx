import CreateRegion from "@/components/CreateRegion";
import UpdateRegion from "@/components/UpdateRegion";
import {
  DeleteRegionReq,
  GetRegionReq,
} from "@/redux-saga/action/regionAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RegionSaga() {
  const dispatch = useDispatch();
  const [create, setCreate] = useState(false);
  const [update, setUpdate] = useState({
    open: false,
    region: {},
  });
  const [refresh, setRefresh] = useState(false);

  const { regions } = useSelector((state: any) => state.regionState);
  useEffect(() => {
    dispatch(GetRegionReq());
  }, [refresh]);

  const onDelete = async (id: number) => {
    dispatch(DeleteRegionReq(id));
    window.alert("Data successfully deleted");
    setRefresh(true);
  };

  return (
    <div className="m-5">
      {create ? (
        <CreateRegion setCreate={setCreate} setRefresh={setRefresh} />
      ) : update.open ? (
        <UpdateRegion
          update={update}
          setUpdate={setUpdate}
          setRefresh={setRefresh}
        />
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-2">List Region</h2>
          <button
            className="px-3 py-1 bg-indigo-500 hover:bg-indigo-700 rounded-md mb-2"
            onClick={() => setCreate(true)}
          >
            Add Region
          </button>
          <table>
            <thead>
              <tr>
                <th>Region ID</th>
                <th>Region Name</th>
                <th>Region Photo</th>
              </tr>
            </thead>
            <tbody>
              {regions &&
                regions.map((item: any) => {
                  return (
                    <tr key={item.regionId}>
                      <th>{item.regionId}</th>
                      <td>{item.regionName}</td>
                      <td>{item.photo}</td>
                      <td>
                        <button
                          className="bg-sky-500 hover:bg-sky-700 me-1 px-3 py-1 rounded-md"
                          onClick={() =>
                            setUpdate({ open: true, region: item })
                          }
                        >
                          Update
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 py-1 px-3 rounded-md"
                          onClick={() => onDelete(item.regionId)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
