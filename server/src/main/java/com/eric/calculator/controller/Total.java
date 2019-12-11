package com.eric.calculator;

import org.springframework.stereotype.Component;

@Component
public class Total {
    private String total;
    private String previous;

    public Total() {
        this.total = "0";
        this.previous = "0";
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String newTotal) {
        this.previous = this.total;
        this.total = newTotal;
    }

    public String getPrevious() {
        return previous;
    }
}