import { useState } from "react";
import "./Donate.css";
function Donate() {
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [loading, setLoading] = useState(false);

  function loadRazorpay() {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  async function handleDonate() {
    setLoading(true);

    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load");
      setLoading(false);
      return;
    }

    /*
    NEXT STEP (later):
    1. Call backend to create order
    2. Receive order_id
    3. Open Razorpay checkout
  */
  

    setLoading(false);
  }

  return (
    <div className="donate-page">
      <h2>Support Healthcare for Those in Need</h2>
      <p>
        Your contribution helps provide medical treatment and financial
        assistance to individuals who cannot afford healthcare.
      </p>

      <div className="amount-options">
        {[500, 1000, 2500, 5000].map((amt) => (
          <button
            key={amt}
            className={amount === amt ? "active" : ""}
            onClick={() => {
              setAmount(amt);
              setCustomAmount("");
            }}
          >
            ₹{amt}
          </button>
        ))}
      </div>

      <div className="custom-amount">
        <span>₹</span>
        <input
          type="number"
          placeholder="Enter custom amount"
          value={customAmount}
          min="100"
          onChange={(e) => {
            const val = Number(e.target.value);
            setCustomAmount(val);
            if (val >= 100) setAmount(val);
          }}
        />
      </div>

      <button className="donate-btn" onClick={handleDonate} disabled={loading}>
        {loading ? "Processing..." : `Donate ₹${amount}`}
      </button>

      <small>Secure payments • UPI • Cards • Net Banking</small>
    </div>
  );
}
export default Donate;
