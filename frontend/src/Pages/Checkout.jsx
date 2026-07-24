import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  selectCartProducts,
  selectCartSubtotal,
  selectCartTotal,
} from "../redux/slices/cartSlice";

import { fetchAddresses } from "../redux/slices/addressSlice";
import { placeOrder } from "../redux/slices/orderSlice";

import ShippingSection from "../components/Checkout/ShippingSection";
import PaymentSection from "../components/Checkout/PaymentSection";
import ReviewSection from "../components/Checkout/ReviewSection";
import OrderSummary from "../components/Checkout/OrderSummary";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(selectCartProducts) || [];
  const subtotal = useSelector(selectCartSubtotal);
  const total = useSelector(selectCartTotal);

  const { loading: cartLoading } = useSelector((state) => state.cart);
  const { loading: orderLoading } = useSelector((state) => state.order);
  const { addresses } = useSelector((state) => state.address);

  const [addressMode, setAddressMode] = useState("new");

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(null);

  const [newAddress, setNewAddress] = useState({
    fullName: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");

  const [currentStep, setCurrentStep] = useState(1);

  const [completedSteps, setCompletedSteps] = useState({
    shipping: false,
    payment: false,
    review: false,
  });

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  useEffect(() => {
    if (!cartLoading && products.length === 0) {
      navigate("/cart");
    }
  }, [cartLoading, products, navigate]);

  const handlePlaceOrder = async () => {
    try {
      const order = await dispatch(
        placeOrder({
          paymentMethod,
          shippingAddress,
        }),
      ).unwrap();

      navigate(`/order-success/${order.orderId}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (cartLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        Loading...
      </section>
    );
  }
  return (
    <section className="bg-stone-100 min-h-screen w-360">
      <div className=" mx-auto px-5 py-10 md:px-8">
        <div className="pb-6 border-b border-gray-300">
          <h1 className="text-4xl font-light tracking-tight">Checkout</h1>
          <p className="text-black/50">Complete your order securely.</p>
        </div>

        <div className="grid mt-10 grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
          <div className="space-y-10">
            <ShippingSection
              step={1}
              completed={completedSteps.shipping}
              isOpen={currentStep === 1}
              addresses={addresses}
              addressMode={addressMode}
              setAddressMode={setAddressMode}
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
              shippingAddress={shippingAddress}
              setShippingAddress={setShippingAddress}
              newAddress={newAddress}
              setNewAddress={setNewAddress}
              onComplete={(address) => {
                setShippingAddress(address);

                setCompletedSteps((prev) => ({
                  ...prev,
                  shipping: true,
                }));

                setCurrentStep(2);
              }}
            />

            <PaymentSection
              step={2}
              completed={completedSteps.payment}
              isOpen={currentStep === 2}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              onComplete={() => {
                setCompletedSteps((prev) => ({
                  ...prev,
                  payment: true,
                }));

                setCurrentStep(3);
              }}
            />

            <ReviewSection
              step={3}
              completed={completedSteps.review}
              isOpen={currentStep === 3}
              products={products}
              loading={orderLoading}
              onPlaceOrder={handlePlaceOrder}
              total={total}
            />
          </div>

          <OrderSummary subtotal={subtotal} total={total} products={products} />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
