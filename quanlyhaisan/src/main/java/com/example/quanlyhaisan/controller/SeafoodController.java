package com.example.quanlyhaisan.controller;

import com.example.quanlyhaisan.model.Seafood;
import com.example.quanlyhaisan.repository.SeafoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.OPTIONS})
@RestController
@RequestMapping("/api/seafoods")
public class SeafoodController {
    @Autowired
    private SeafoodRepository seafoodRepository;

    @GetMapping
    public List<Seafood> getAllSeafoods() {
        return seafoodRepository.findAll();
    }
    @PostMapping
    public Seafood createSeafood(@RequestBody Seafood seafood) {
        return seafoodRepository.save(seafood);
    }
}
