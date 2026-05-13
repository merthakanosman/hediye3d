"use client";

import { Icon } from "./Icons";
import { useModal } from "./AppProviders";

export function AddTeklifButtonClient() {
  const { openModal } = useModal();
  return (
    <button className="btn btn-ghost btn-arrow" onClick={openModal}>
      <Icon name="pencil" size={15} />
      Teklif Al
    </button>
  );
}

export default AddTeklifButtonClient;
