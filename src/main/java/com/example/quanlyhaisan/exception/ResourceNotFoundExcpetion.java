package com.example.quanlyhaisan.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundExcpetion extends RuntimeException{
    public ResourceNotFoundExcpetion(String message) {
        super(message);
    }
}
