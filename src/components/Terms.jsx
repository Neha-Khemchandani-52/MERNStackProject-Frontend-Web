import React from "react";

const Terms = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto my-10">
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>

      <p className="mb-4">
        By accessing and using DevTinder, you agree to comply with our terms and policies.
      </p>

      <p className="mb-4">
        All payments made for premium features or subscriptions are subject to our Refund Policy. 
        Please review the Refund Policy for eligibility, timelines, and conditions.
      </p>
      <p>
        We reserve the right to suspend or terminate accounts that violate our terms, engage in fraudulent activity, or misuse the platform.
      </p>
      <p>
        DevTinder is not responsible for any indirect or incidental damages arising from the use of the platform.
       </p>
      <p>
        We may update these terms at any time without prior notice.
      </p>
    </div>
  );
};

export default Terms;