"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import type { CartItem } from "@/lib/types";

/* ——————————————————— Cart ——————————————————— */
interface CartContextValue {
  cart: CartItem[];
  cartCount: number;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  isInCart: (productId: string) => boolean;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside AppProviders");
  return ctx;
}

/* ——————————————————— Toast ——————————————————— */
interface ToastContextValue {
  showToast: (msg: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside AppProviders");
  return ctx;
}

/* ——————————————————— Modal ——————————————————— */
interface ModalContextValue {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside AppProviders");
  return ctx;
}

/* ——————————————————— Toast State ——————————————————— */
interface ToastState {
  show: boolean;
  msg: string;
}

export const ToastStateContext = createContext<ToastState>({ show: false, msg: "" });

/* ——————————————————— Providers ——————————————————— */
export function AppProviders({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toastState, setToastState] = useState<ToastState>({ show: false, msg: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const addToCart = useCallback((productId: string) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.productId === productId);
      if (exists) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((item) => item.productId !== productId));
  }, []);

  const isInCart = useCallback(
    (productId: string) => cart.some((item) => item.productId === productId),
    [cart]
  );

  const clearCart = useCallback(() => setCart([]), []);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const showToast = useCallback((msg: string) => {
    setToastState({ show: true, msg });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => {
      setToastState((prev) => ({ ...prev, show: false }));
    }, 2400);
  }, []);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart, isInCart, clearCart }}>
      <ToastContext.Provider value={{ showToast }}>
        <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
          <ToastStateContext.Provider value={toastState}>
            {children}
          </ToastStateContext.Provider>
        </ModalContext.Provider>
      </ToastContext.Provider>
    </CartContext.Provider>
  );
}
