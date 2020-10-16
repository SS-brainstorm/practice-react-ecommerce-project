import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HcuEOIcuyIPgdXtEGFmEU6w04IfZwVgXo5SYqRGaHOvV4AYgZIWnmLmQ2PPAh0mmDLkc38Utkeu32NXaw27n9gx00UDl4aWf3';

    const onToken = token => {
        console.log(token);
        alert('Payment successful!');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            image="https://svgshare.com/i/CUz.svg"
            panelLabel='Pay Now'
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButton;
