package com.eric.calculator;

import org.springframework.stereotype.Component;

@Component
public class Total {
    private double total;
    private double previous;

    public Total() {
        this.total = 0;
        this.previous = 0;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double newTotal) {
        this.previous = this.total;
        this.total = newTotal;
    }

    public double getPrevious() {
        return previous;
    }
}