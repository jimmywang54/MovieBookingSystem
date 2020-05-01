package com.neu.edu.ticketreservation.bean.wrapper;

import com.neu.edu.ticketreservation.bean.UserProfile;

public class UserProfileWrapper {

    private String firstName;

    private String lastName;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public UserProfileWrapper copyFromUser(UserProfile userProfile){
        this.firstName = userProfile.getFirstName();
        this.lastName = userProfile.getLastName();
        return this;
    }
}