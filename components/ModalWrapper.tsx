"use client";

import { useModal } from "./AppProviders";
import { useToast } from "./AppProviders";
import { TeklifModal } from "./TeklifModal";

export function ModalWrapper() {
  const { isModalOpen, closeModal } = useModal();
  const { showToast } = useToast();

  const handleSubmit = () => {
    closeModal();
    showToast("Teklif gönderildi. 24 saat içinde dönüş yapacağız.");
  };

  return (
    <TeklifModal
      open={isModalOpen}
      onClose={closeModal}
      onSubmit={handleSubmit}
    />
  );
}

export default ModalWrapper;
