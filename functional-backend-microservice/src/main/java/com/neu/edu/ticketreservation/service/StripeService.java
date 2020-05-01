package com.neu.edu.ticketreservation.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import com.neu.edu.ticketreservation.bean.CreditCardDetails;
import com.neu.edu.ticketreservation.bean.UserBean;
import com.neu.edu.ticketreservation.bean.UserProfile;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import com.stripe.model.PaymentIntent;
import com.stripe.model.PaymentMethod;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class StripeService {

    @Value("${stripeKey}")
    private String secretKey;

    @PostConstruct
    public void init() {
        Stripe.apiKey = secretKey;
    }

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public String addCardToCustomer(UserBean userBean, UserProfile userProfile, CreditCardDetails creditCardDetails) {
        Map<String, Object> cust = new HashMap<>();
        cust.put("email", userBean.getUsername());
        cust.put("name", (userProfile.getFirstName() + " " + userProfile.getLastName()));

        Customer customer = null;
        try {
            customer = Customer.create(cust);
        } catch (StripeException e) {
            logger.error("Exception while creating stripe customer::" + e.getMessage());
            return null;
        }

        Map<String, Object> card = new HashMap<>();
        card.put("number", Long.toString(creditCardDetails.getCreditCardNumber()));
        card.put("exp_month", creditCardDetails.getExpiryMonth());
        card.put("exp_year", creditCardDetails.getExpiryYear());
        card.put("cvc", Long.toString(creditCardDetails.getCvc()));
        Map<String, Object> cardParams = new HashMap<>();
        cardParams.put("type", "card");
        cardParams.put("card", card);

        PaymentMethod paymentMethod = null;
        try {
            paymentMethod = PaymentMethod.create(cardParams);
        } catch (StripeException e) {
            logger.error("Exception while creating stripe payment method::" + e.getMessage());
            return null;
        }

        Map<String, Object> params = new HashMap<>();
        params.put("customer", customer.getId());
        try {
            paymentMethod = paymentMethod.attach(params);
        } catch (StripeException e) {
            logger.error("Exception while attaching stripe payment method::" + e.getMessage());
            return null;
        }

        return customer.getId();
    }

    public String chargeCard(UserBean userBean, UserProfile userProfile, double amountToBeCharged) {
        List<Object> paymentMethodTypes = new ArrayList<>();
        paymentMethodTypes.add("card");
        Map<String, Object> params = new HashMap<>();
        params.put("amount", (int)(amountToBeCharged*100));
        params.put("currency", "usd");
        params.put("customer", userProfile.getStripeCustomerId());
        params.put("payment_method_types", paymentMethodTypes);

        PaymentIntent paymentIntent = null;
        try {
            paymentIntent = PaymentIntent.create(params);
        } catch (StripeException e) {
            logger.error("Exception while charging amount to customer::" + e.getMessage());
            return null;
        }

        return paymentIntent.getId();
    }

}