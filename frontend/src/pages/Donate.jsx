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
    if (amount < 100) {
      alert("Minimum donation amount is ₹100");
      return;
    }

    setLoading(true);

    const res = await loadRazorpay();
    if (!res) {
      alert("Payment SDK failed to load. Please try again.");
      setLoading(false);
      return;
    }

    /*
      NEXT STEP (BACKEND REQUIRED):
      1. Call backend -> create Razorpay order
      2. Get order_id
      3. Open Razorpay checkout
      4. Verify payment on backend
    */

    setLoading(false);
  }

  return (
    <div className="donate-page">
      {/* HEADER */}
      <div className="donate-header">
        <h2>Support Healthcare for Those in Need</h2>
        <p>
          Your donation helps underprivileged individuals access medical
          treatment, emergency care, and essential healthcare services.
        </p>
      </div>

      {/* WHY DONATE */}
      <div className="donate-why">
        <h3>Why Your Support Matters</h3>
        <ul>
          <li>✔ Covers medical treatment and hospital expenses</li>
          <li>✔ Supports patients who cannot afford care</li>
          <li>✔ Ensures transparent and ethical fund usage</li>
        </ul>
      </div>

      {/* AMOUNT SELECTION */}
      <div className="donate-box">
        <h4>Select Donation Amount</h4>

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

        {/* CUSTOM AMOUNT */}
        <div className="custom-amount">
          <span>₹</span>
          <input
            type="number"
            placeholder="Enter custom amount (min ₹100)"
            value={customAmount}
            min="100"
            onChange={(e) => {
              const val = Number(e.target.value);
              setCustomAmount(val);
              if (val >= 100) setAmount(val);
            }}
          />
        </div>

        {/* DONATE BUTTON */}
        <button
          className="donate-btn"
          onClick={handleDonate}
          disabled={loading}
        >
          {loading ? "Processing..." : `Donate ₹${amount}`}
        </button>

        <small className="donate-note">
          Secure payments • UPI • Cards • Net Banking
        </small>
      </div>

      {/* TRANSPARENCY */}
      <div className="donate-transparency">
        <h4>Transparency Promise</h4>
        <p>
          We are committed to 100% transparency. Donations are used strictly for
          healthcare and medical support initiatives.
        </p>
      </div>
    </div>
  );
}

export default Donate;
