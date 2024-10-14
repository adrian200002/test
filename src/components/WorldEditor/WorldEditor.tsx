import { useEffect, useState } from "react";
import "./WorldEditor.scss";
import PresetEditor from "../PresetEditor/PresetEditor";
import { Preset } from "../../types/Preset";

const WorldEditor = () => {
  const [presets, setPresets] = useState<Preset[]>([
    {
      id: 1,
      name: "Random named preset #5",
      obj: [
        {
          id: 1,
          name: "xs_prop_trophy_bandito_01a",
        },
        {
          id: 2,
          name: "xs_prop_trophy_bandito_01a",
        },
        {
          id: 3,
          name: "xs_prop_trophy_bandito_01a",
        },
      ],
    },
    {
      id: 2,
      name: "Random named preset #6",
      obj: [
        {
          id: 1,
          name: "xs_prop_trophy_bandito_02a",
        },
        {
          id: 2,
          name: "xs_prop_trophy_bandito_02a",
        },
        {
          id: 3,
          name: "xs_prop_trophy_bandito_02a",
        },
      ],
    },
    {
      id: 3,
      name: "Random named preset #7",
      obj: [
        {
          id: 1,
          name: "xs_prop_trophy_bandito_03a",
        },
        {
          id: 2,
          name: "xs_prop_trophy_bandito_03a",
        },
        {
          id: 3,
          name: "xs_prop_trophy_bandito_03a",
        },
      ],
    },
  ]);

  const [editingPreset, setEditingPreset] = useState<{
    id: number;
    name: string;
    obj: { id: number; name: string }[];
  } | null>(null);

  const handleDelete = (id: number) => {
    const filteredArr = presets.filter((el) => el.id !== id);
    setPresets(filteredArr);
  };

  useEffect(() => {
    if (editingPreset) {
      const updatedPreset = presets.find((el) => el.id === editingPreset.id);
      setEditingPreset(updatedPreset || null);
    }
  }, [presets, editingPreset]);

  return (
    <>
      {!editingPreset ? (
        <div className="world">
          <div className="world__title">
            <img src="icons/world-active.svg" alt="" />
            <h1>World editor</h1>
          </div>
          <div className="world__presets">
            {presets.map((el) => (
              <div key={el.id} className="world__preset">
                <h1>{el.name}</h1>
                <div className="world__presets-icons">
                  <img src="icons/eye.svg" alt="" />
                  <img
                    onClick={() => setEditingPreset(el)}
                    src="icons/edit.svg"
                    alt=""
                  />
                  <img
                    onClick={() => handleDelete(el.id)}
                    src="icons/trash-can.svg"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="world__new">
            <div className="world__new-title">
              <img src="icons/plus.svg" alt="" />
              <h1>Create new preset</h1>
            </div>
          </div>
        </div>
      ) : (
        <PresetEditor
          preset={editingPreset}
          setEditing={setEditingPreset}
          setPresets={setPresets}
          presets={presets}
        />
      )}
    </>
  );
};

export default WorldEditor;
