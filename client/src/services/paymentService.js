import api from "./api";

export const createPaymentOrder = async (orderId) => {
  const { data } = await api.post("/api/payment/create-order", {
    orderId,
  });

  return data;
};

export const verifyPayment = async (paymentData) => {
  const { data } = await api.post(
    "/api/payment/verify",
    paymentData
  );

  return data;
};