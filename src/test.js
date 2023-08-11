import express from "express";
import Bard from "bard-ai"; // Import Bard without destructuring the import

const app = express();
const port = 3000;

// Initialize bard instance with your cookie dictionary
const cookieDict = {
  "__Secure-1PSID":
    "ZgjDcub6Zfo6j-KwJ5a-jMeXcCgbwIgjQ7aaobcbYYXd8ZBRES_cOWF5hlQwYbkEgveEfw.",
  "__Secure-1PSIDTS":
    "sidts-CjIBSAxbGd-58ory6X-9ofRPoP8DmDsocA18HxkgHcHgaO7RAkWmEWy1E5BSdJh9E8ooiBAA",
  // Any cookie values you want to pass to the session object.
};

let myBard = new Bard({ cookie_dict: cookieDict });

app.get("/get_financial_planning", async (req, res) => {
  const user_details = `
    Hey these are the details of a user ,currentBalance= 101666.33 , accountType= FIXED,compoundingFrequency=HALF-YEARLY,currentValue: 119845.90,
    interestComputation: COMPOUND,interestPayout: HALF-YEARLY,interestPeriodicPayoutAmount: 0,interestRate: 2,principalAmount: 109890.98,
    tenureDays: 180,cashLimit of credit card: 20000,currentDue: 3000,loyaltyPoints: 2450,minDueAmount: 1346,previousDueAmount: 7654,
    totalDueAmount: 9756,shareHolerEquityType: COMMON-STOCK , now on the basis of above details you need to provide financial planning to the user,
    just keep the text verbose
    `;

  try {
    const answer = await myBard.get_answer(user_details); // Use the appropriate method from the Bard instance
    res.json({ financial_planning: answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
