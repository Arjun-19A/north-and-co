import { TbTruckDelivery } from "react-icons/tb";
import {
  MdOutlineWorkspacePremium,
  MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";

const WhySection = () => {
  const featuresData = [
    {
      icon: <MdOutlineWorkspacePremium className="text-black size-8 mb-4" />,
      title: "Premium Craftsmanship",
      description:
        "Every piece is thoughtfully curated to combine timeless aesthetics with uncompromising quality.",
    },
    {
      icon: (
        <MdOutlineShoppingCartCheckout className="text-black size-8 mb-4" />
      ),
      title: "Seamless Shopping",
      description:
        "A clean, intuitive shopping experience from discovery to delivery.",
    },
    {
      icon: (
        <TbTruckDelivery className="text-black size-8 mb-4 font-extralight" />
      ),
      title: "Trusted Delivery",
      description:
        "Fast shipping, careful packaging, and reliable tracking on every order.",
    },
    {
      icon: <RiCustomerServiceLine className="text-black size-8 mb-4" />,
      title: "Customer First",
      description:
        "Friendly support and easy returns designed around your satisfaction.",
    },
  ];
  return (
    <section className="flex flex-col bg-stone-100 items-center w-full px-6 border-y border-gray-200 py-8">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl tracking-tight font-light text-center mx-auto">
          Designed Around Quality.
        </h2>
        <p className="mt-2 text-black/70 max-w-xl mx-auto">
          At North & Co., every detail matters—from the products we curate to
          the experience we deliver.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-10 w-full max-w-330">
        {featuresData.map((feature, index) => (
          <div key={index} className="h-full">
            <div className="h-full p-8 flex flex-col transition-all duration-300 gap-2">
              {feature.icon}
              <h3 className="text-base font-medium text-black">
                {feature.title}
              </h3>
              <p className="text-black/60 leading-6 pb-4">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySection;
