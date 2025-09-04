# Adyen Pay-by-link Generator

This is a Node.js script designed to automate the creation of payment links. The script reads customer data from a CSV file and generates a unique payment link for each customer through the Adyen API.

## ✨ Features

-   **Automation**: Processes a complete list of customers from a `data.csv` file.
-   **Adyen Integration**: Securely connects to Adyen's Checkout API to create payment links.
-   **Secure Configuration**: Manages all credentials and settings through environment variables in a `.env` file.

---

## 📋 Prerequisites

-   [Node.js](https://nodejs.org/) (version 16 or higher)
-   An active [Adyen](https://www.adyen.com/) account with API credentials.

---

## 🚀 Setup and Configuration

Follow these steps to get the project running:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/jivm-mx/pblCreator.git](https://github.com/jivm-mx/pblCreator.git)
    cd pblCreator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the project root. You can copy the `.env.example` file (if you have one) or use the template below. Fill this file with your credentials.
    ```env
    # Adyen Credentials
    ADYEN_API_KEY="YOUR_API_KEY_HERE"
    ADYEN_MERCHANT_ACCOUNT="YOUR_MERCHANT_ACCOUNT_HERE"
    ADYEN_API_URL="ADYEN API URL" For test enviroment, I'm using: https://checkout-test.adyen.com/v70/paymentLinks
    ```

4.  **Prepare the customer data:**
    Ensure the `data.csv` file in the project root has the following format:
    ```csv
    shopperReference,shopperEmail
    USER_001,customer1@example.com
    USER_002,customer2@example.com
    ```

---

## ▶️ Usage

Once everything is configured, run the following command in your terminal to start the link generation process:

```bash
node index.js