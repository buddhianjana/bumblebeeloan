import { useNavigate } from "react-router-dom";
import { BaseURLPath, ProductListPaths } from "./../../utilities/constants";

const LandinPage = () => {
  const navigate = useNavigate();
  const onShopNow = () => {
    navigate(BaseURLPath + "/productlist/" + ProductListPaths.MOST_VIWED);
  };

  return (
    <main className="h-full relative bg-white overflow-hidden">
      <div className="pt-18 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Your One-Stop Shop for Mobile Technology
            </h1>
          </div>
          <div>
            <div className="mt-20">
              {/* <!-- Decorative image grid --> */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-84 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://lifemobile.lk/wp-content/uploads/2023/02/OnePlus-nord-n20.png"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://lifemobile.lk/wp-content/uploads/2021/04/Remax-RB-T1-Wireless-Bluetooth-Headset.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://lifemobile.lk/wp-content/uploads/2022/03/JBL-Tune-175BT-Bluetooth-Earphones.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://lifemobile.lk/wp-content/uploads/2022/10/Samsung-9W-Wireless-Charger-Convertible.png"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://lifemobile.lk/wp-content/uploads/2023/01/Apple-Watch-SE-2nd-Gen-40MM-Starlight-Aluminum-GPS-%E2%80%93-Summit-White_Black-Nike-Sport-Band.png"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://lifemobile.lk/wp-content/uploads/2023/03/ultra-.png"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://lifemobile.lk/wp-content/uploads/2023/01/03-59.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={onShopNow}
                type="button"
                className="inline-block text-center bg-color_primary border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-color_primary_darker"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { LandinPage };
