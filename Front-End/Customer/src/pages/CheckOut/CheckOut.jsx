import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { CheckOutSummary } from "./components/CheckOutSummary";
import { useState, useEffect } from "react";
// import cart context
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  //const { total } = useContext(CartContext);

  const [setTotal] = useState(0);
  const [dividedAmount, setDividedAmount] = useState(0);
  const [age, setAge] = useState(null);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  async function Payment() {
    let item = { name, address, mobile, note, dividedAmount, total };

    let result = await fetch(
      "http://localhost:8080/api/v1/payment/savepayment",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/shopping-cart");
  }

  async function PaymentSuccess() {
    navigate("/shopping-cart");
    
  }

  useEffect(() => {
    const divided = total / 3;
    setDividedAmount(divided);
  }, []);

  const handleAmountChange = (e) => {
    const amount = parseInt(e.target.value);
    setTotal(amount);
  };

  const handleBirthdayChange = (e) => {
    const birthday = new Date(e.target.value);
    const today = new Date();
    const diff = today.getTime() - birthday.getTime();
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    setAge(age);
  };

  const { getCartSubTotal, getCartItems } = useContext(CartContext);
  const total = getCartSubTotal();

  const handleTextChange = (strFieldId, strNewValue) => {
    console.log(
      "CheckOut.handleTextChange.strNewValue:",
      strFieldId,
      strNewValue
    );
  };

  return (
    <main className="h-full bg-white overflow-hidden">
      <form
        autoComplete="none"
        className="max-w-7xl mx-auto py-10 px-4 sm:pt-16 sm:pb-24 sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Checkout
        </h2>
        <div className="mt-5 sm:mt-8 flex flex-col items-center sm:items-start justify-center sm:flex-row gap-8 sm:gap-16">
          <div>
            <h3 className="text-xl tracking-tight text-gray-900">
              Sign Up and Buy Now...
            </h3>
            <div className="mt-7 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Mobile"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Note"
                  required
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>

              <div className="flex gap-4">
                <input
                  type="date"
                  placeholder="Birthday"
                  required
                  onChange={handleBirthdayChange}
                />
                <input type="hidden" placeholder="Note" required />
              </div>
            </div>
          </div>
          <div>
            {/* Summary */}
            <CheckOutSummary
              dblOrderTotal={getCartSubTotal().toFixed(2)}
              arrCartItems={getCartItems()}
            />
            {/* Payment info */}
            <div>
              <div className="mt-5 flex flex-col gap-1">
                <input class="text-center" type="text" value={parseFloat(total).toFixed(2)} readOnly />

                {age !== null && age >= 18 ? (
                  <div>
                    <div class="grid grid-cols-2 gap-1">
                      <h1 class="text text-[20px] uppercase font-semibold  mt-4">
                        Your Total
                      </h1>
                      <input
                        type="text"
                        placeholder=""
                        class="border text-center mt-4 border-gray-400 py-1 px-2"
                        readOnly
                        value={parseFloat(total).toFixed(2)}
                        onChange={handleAmountChange}
                        max="15000"
                      />

                      <input
                        type="hidden"
                        placeholder="Card Name"
                        class="border text-center border-gray-400 py-1 px-2"
                        readOnly
                        value={parseFloat(total).toFixed(2)}
                        onChange={(e) => setTotal(e.target.value)}
                        max="15000"
                      />
                    </div>
                    <h1 class="text-white text-[20px] uppercase font-semibold mb-5">
                      Installment Plan
                    </h1>
                    <div class="mt-5 grid grid-cols-3 gap-5">
                      <input
                        class="border text-center border-gray-400 py-1 px-2"
                        type="text"
                        value={parseFloat(dividedAmount).toFixed(2)}
                        onChange={(e) => setDividedAmount(e.target.value)}
                      />
                      <input
                        class="border text-center border-gray-400 py-1 px-2"
                        type="text"
                        readOnly
                        value={parseFloat(dividedAmount).toFixed(2)}
                      />
                      <input
                        class="border text-center border-gray-400 py-1 px-2"
                        type="text"
                        value={parseFloat(dividedAmount).toFixed(2)}
                      />
                    </div>
                    <div class="mt-5">
                      <button
                        class="group relative w-[250px] flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-color_primary hover:bg-color_primary_darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-color_primary_softer"
                        onClick={Payment}
                      >
                        Pay First Installment
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div class="grid grid-cols-1 gap-5">
                      <input
                        type="text"
                        placeholder="Card Name"
                        class="border border-gray-400 py-1 px-2 text-center"
                        readOnly
                        value={parseFloat(total).toFixed(2)}
                        onChange={(e) => setTotal(e.target.value)}
                      />
                    </div>
                    <div class="mt-5">
                      <button
                        class="group relative w-[250px] flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-color_primary hover:bg-color_primary_darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-color_primary_softer"
                        onClick={PaymentSuccess}
                      >
                        Pay now
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center items-center"></div>
      </form>
    </main>
  );
};

export { CheckOut };
