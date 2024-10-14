import { useState } from "react";
import "./PresetEditor.scss";
import { Preset } from "../../types/Preset";
type Props = {
  preset: Preset;
  setEditing: (preset: Preset | null) => void;
  setPresets: (presets: Preset[]) => void;
  presets: Preset[];
};

const PresetEditor = ({ preset, setEditing, setPresets, presets }: Props) => {
  const [newName, setNewName] = useState<string>("");
  const [visibleProps, setVisibleProps] = useState([...preset.obj]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleAdd = () => {
    if (newName && visibleProps.length < 6) {
      const updatedProps = [
        ...visibleProps,
        {
          id: Date.now(),
          name: newName,
        },
      ];

      setVisibleProps(updatedProps);
      setNewName("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleCancel = () => {
    setEditing(null);
  };

  const handleSave = () => {
    if (visibleProps.length <= 6) {
      const updatedPres = presets.map((el) => {
        if (el.id === preset.id) {
          return {
            ...el,
            obj: visibleProps,
          };
        }
        return el;
      });
      setPresets(updatedPres);
      setEditing(null);
    }
  };

  const handleDelete = (id: number) => {
    const updatedProps = visibleProps.filter((el) => el.id !== id);
    setVisibleProps(updatedProps);
  };

  return (
    <div className="editor">
      <div className="editor__editing">
        <h1 className="editor__title">Editing {preset.name}</h1>
        <form onSubmit={handleSubmit} className="editor__id">
          <input
            name="new-prop"
            type="text"
            placeholder="Enter model ID"
            value={newName}
            onChange={handleNameChange}
          />
          <img onClick={handleAdd} src="icons/plus.svg" alt="" />
        </form>
      </div>
      <div className="editor__list">
        <h1 className="editor__list-title">Object list</h1>
        {visibleProps.map((el) => (
          <div key={el.id} className="editor__list-item">
            <h2>{el.name}</h2>
            <div className="editor__list-icons">
              <img src="icons/copy-gray.svg" alt="" />
              <img src="icons/eye-gray.svg" alt="" />
              <img src="icons/edit-gray.svg" alt="" />
              <img
                onClick={() => handleDelete(el.id)}
                src="icons/trash-can-gray.svg"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleSave} className="save">
        <img src="icons/save.svg" alt="" />
        <span>Save</span>
      </button>
      <button onClick={handleCancel} className="cancel">
        <img src="icons/cancel.svg" alt="" />
        <span>Cancel</span>
      </button>
    </div>
  );
};

export default PresetEditor;
